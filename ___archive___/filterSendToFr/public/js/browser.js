console.log('start');

const getList = async () => {
   const { data } = await axios.get('/task/list');
   console.log(data);

   const articleList = data.result.list;

   html = '';
   for (item of articleList ) {
      html = `${html}<a href='/task/${item.id}' article-id=${item.id}>${item.title}</a>`;
   }

   const wrapperEl = document.querySelector('.wrapper');
   wrapperEl.innerHTML = html;
};

getList();