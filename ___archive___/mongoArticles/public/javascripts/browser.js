console.log('start');
const formEl = document.forms.pushArticle;

const getArticles = async () => {
   const { data } = await axios.get('/getArticles');
   return data;
}

const postArticle = () => {
   formEl.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/', formData);
      console.log(data);
      render();
   });
}

const render = async () => {
   const articlesEl = document.querySelector('.articles');
   const articles = await getArticles();

   let html = '';
   for (item of articles) {
      html += `
         <div class="item">
            <span>${item.title}</span>
         </div>`;
   }
   articlesEl.innerHTML = html;
}

const init = () => {
   render();
   postArticle();
}
init();