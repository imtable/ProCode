console.log('start');

// model
class Product {
   constructor(name, id) {
      this.name = name;
      this.id = id;
      this.count = 1;
   };
};

const products = [];
const setProducts = () => {
   const productsNode = document.querySelectorAll('.products .item');
   for (let item of productsNode) {
      const itemName = item.children[0].innerHTML;
      const itemId = item.dataset.id;

      let product = new Product(itemName, itemId);
      products.push(product);
   };
   return products;
}

const getCart = () => {
   const json = localStorage.getItem('cart') || '[]';
   const cart = JSON.parse(json);
   return cart;
};
const setCart = (cart) => {
   const json = JSON.stringify(cart);
   localStorage.setItem('cart', json);
};

// ctrls
const searchCart = (id, cart) => {
   const itemIdx = cart.findIndex(el => el.id === id);
   return itemIdx;
};
const searchProducts = (id) => {
   const product = products.find(el => el.id === id);
   return product;
}
const addProduct = (id) => {
   const cart = getCart();
   const itemIdx = searchCart(id, cart);

   if (itemIdx === -1) {
      const product = searchProducts(id);
      cart.push(product);
   } else { 
      cart[itemIdx].count++; 
   }
   setCart(cart);
};
const delProduct = (id) => {
   let cart = getCart();
   const itemIdx = searchCart(id, cart);
   if (itemIdx === -1) {
      return false;
   } else {
      cart[itemIdx].count--;
   }
   if (cart[itemIdx].count === 0) {
      cart.splice(itemIdx, 1);
   }
   setCart(cart);
};

const newOrder = () => {
   const btnNewOrder = document.querySelector('.btnNewOrder');
   btnNewOrder.addEventListener('click', (ev) => {
      const orderEl = document.querySelector('.cart_order');
      orderEl.classList.add('show');
   });
}
const makeOrder = () => {
   const cartFormEl = document.forms.cartForm;
   cartFormEl.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target, cartFormEl);
   
      const { data } = await axios.post('/taskCart', formData);
      console.log(data);
   
      const orderEl = document.querySelector('.cart_order');
      orderEl.innerHTML = 'succes';
   });
}
const orderManager = () => {
   newOrder();
   makeOrder();
}

const buy = () => {
   const btnBuy = document.querySelectorAll('.btnBuy');
   btnBuy.forEach((el) => {
      el.addEventListener('click', (ev) => {
         const { id } = ev.target.dataset;
         addProduct(id);
         
         render();
      });
   });
}

// const countIncr = () => {
//    document.addEventListener('click', (ev) => {
//       if (ev.target && ev.target.classList.contains("btnAdd")) {
//          const { id } = ev.target.dataset;
//          addProduct(id);
//          render();
//        }
//    });
// }
// const countDecr = () => {
//    document.addEventListener('click', (ev) => {
//       if (ev.target && ev.target.classList.contains("btnAdd")) {
//          const { id } = ev.target.dataset;
//          delProduct(id);
//          render();
//        }
//    });
// }

// view
const subRender = (listEl) => {
   const cart = getCart();
   let html = '';
   for (item of cart) {
      html += `
      <div class="item" data-id='${item.id}'>
         <h3 class="item_title">${item.name}</h3>
         <span>count: ${item.count}</span>
         <button class="btnDel" data-id='${item.id}' type="button">–</button>
         <button class="btnAdd" id='123' data-id='${item.id}' type="button">+</button>
         <input class="toServer" type="text" name='${item.name}' data-id='${item.id}' value='${item.count}'>
      </div>
      `;
   }
   listEl.innerHTML = html;
}

const render = function() {
   let listEl = document.querySelector('.cart .cart-inner .list');
   if (listEl) {
      subRender(listEl);
      return;
   }

   const cartInnerEl = document.querySelector('.cart .cart-inner');
   listEl = document.createElement('div');
   listEl.classList.add('list');
   cartInnerEl.appendChild(listEl);
   const btnAdd = document.querySelectorAll('.cart .cart-inner .list .btnAdd');
   const btnDel = document.querySelectorAll('.btnDel');

   subRender(listEl);
 };

// magic
const init = () => {
   setProducts();

   buy();

   document.addEventListener('click', (ev) => {
      if (ev.target && ev.target.classList.contains("btnAdd")) {
         const { id } = ev.target.dataset;
         addProduct(id);
         render();
       }
   });
   document.addEventListener('click', (ev) => {
   if (ev.target && ev.target.classList.contains("btnDel")) {
      const { id } = ev.target.dataset;
      delProduct(id);
      render();
      }
   });
}
init();

// лвл 1
// Делаем тоже что и на занятии - корзину. Добавляем 
// возможность не просто накидывать товар а добавлять количество. 
// То есть если товар уже есть в корзине, мы просто 
// пишем что его два(три и так далее), а не один.
// лвл 2
// Добавляем кнопку "оформить заказ" при нажатии
//  на которую предлагают ввести информацию о доставке.
// лвл 3
// Отправляем заполненную и иинформацию о заказе на сервер.
//  Просто выводим инфу в консоль (или бд для тех кто умеет). 
//  Роут на серваке должен иметь валидацию