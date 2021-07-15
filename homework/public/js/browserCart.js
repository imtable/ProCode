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
const productsNode = document.querySelectorAll('.products .item');
for (let item of productsNode) {
   let product = new Product(item.children[0].innerHTML, item.dataset.id);
   products.push(product);
};

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

// view
const btnNewOrder = document.querySelector('.btnNewOrder');
const cartFormEl = document.querySelector('.cart .cart-inner .cartForm');
const render = () => {
   const cart = getCart();
   let html = '';
   for (item of cart) {
      html += `
      <div class="item" data-id='${item.id}'>
               <h3 class="item_title">${item.name}</h3>
               <span>count: ${item.count}</span>
               <button class="btnDel" data-id='${item.id}' type="button">–</button>
               <button class="btnAdd" data-id='${item.id}' type="button">+</button>
               <input class="toServer" type="text" name='${item.name}' data-id='${item.id}' value='${item.count}'>
      </div>
      `;
   }
   btnNewOrder.insertAdjacentHTML('beforeBegin', html);
   // cartFormEl.innerHTML = html;
}

// magic
render();

// const btnDel = document.querySelectorAll('.btnDel');
// const btnAdd = document.querySelectorAll('.btnAdd');
// btnAdd.forEach((el) => {
//    el.addEventListener('click', (ev) => {
//       const { id } = ev.target.dataset;
//       addProduct(id);
//       render();
//    });
// });
// btnDel.forEach((el) => {
//    el.addEventListener('click', (ev) => {
//       const { id } = ev.target.dataset;
//       delProduct(id);
//       render();
//    });
// });

btnNewOrder.addEventListener('click', (ev) => {
   const orderEl = document.querySelector('.cart_order');
   orderEl.classList.add('show');
});

cartFormEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target, cartFormEl);

   const { data } = await axios.post('/taskCart', formData);
   console.log(data);

   const orderEl = document.querySelector('.cart_order');
   orderEl.innerHTML = 'succes';
});

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