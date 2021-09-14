console.log('start');

const getInitData = async () => {
   const { data } = await axios.get('/acp/getInitData');
   return data;
}

const postBook = () => {
   const form = document.forms.formBook;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/acp/createBook', formData);
      console.log(data);
   });
}

const postGenre = () => {
   const form = document.forms.formGenre;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/acp/createGenre', formData);
      console.log(data);
      render();
   });
}

const postAuthor = () => {
   const form = document.forms.formAuthor;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/acp/createAuthor', formData);
      console.log(data);
      render();
   });
}

const render = async () => {
   const data = await getInitData();
   const renderSelectAuthors = async () => {
      const selectAuthorsEl = document.querySelector('.selectBookAuthors');
      let html = '<option disabled>select authors: ctrl + click</option>';
      for (item of data.authors) {
         html += `
         <option value="${item._id}">${item.shortname}</option>`;
      }
      selectAuthorsEl.innerHTML = html;
   }
   const renderSelectGenres = async () => {
      const selectGenresEl = document.querySelector('.selectBookGenres');
      let html = '<option disabled>select genres: ctrl + click</option>';
      for (item of data.genres) {
         html += `
         <option value="${item._id}">${item.name}</option>`;
      }
      selectGenresEl.innerHTML = html;
   }
   renderSelectAuthors();
   renderSelectGenres();
}

const init = () => {
   render();
   postGenre();
   postAuthor();
   postBook();
}
init();