console.log('start');

const getForm = async () => {
   const { data } = await axios.get('/getForm');
   return data;
}

const postForm = async () => {
   const form = document.forms.form;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/postForm', formData);
      console.log(data.status);
   });
}

const renderForm = async (data) => {
   const formName = document.querySelector('.formName');
   const formDesc = document.querySelector('.formDesc');

   formName.value = data.form[0].name;
   formDesc.value = data.form[0].description;
}

const init = async () => {
   const data = await getForm();
   renderForm(data);
   postForm();
}
init();