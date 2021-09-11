console.log('start');

const getInitData = async () => {
   const { data } = await axios.get('/acp/getInitData');
   return data;
}

const postJenre = () => {
   const form = document.forms.formJenre;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/acp/createJenre', formData);
      console.log(data);
   });
}

const postAuthor = () => {
   const form = document.forms.formAuthor;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/acp/createAuthor', formData);
      console.log(data);
   });
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

const renderInit = async () => {
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
   const renderSelectJenres = async () => {
      const selectJenresEl = document.querySelector('.selectBookJenres');
      let html = '<option disabled>select jenres: ctrl + click</option>';
      for (item of data.jenres) {
         html += `
         <option value="${item._id}">${item.name}</option>`;
      }
      selectJenresEl.innerHTML = html;
   }
   renderSelectAuthors();
   renderSelectJenres();
}

const init = () => {
   renderInit();
   postJenre();
   postAuthor();
   postBook();
}
init();