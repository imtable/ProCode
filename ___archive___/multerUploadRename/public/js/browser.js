const formEl = document.forms.formFileUpload;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   const { data } = await axios.post('/multer', formData);
   console.log(data);
});