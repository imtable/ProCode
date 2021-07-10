const formEl = document.forms.formValid;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);

   const { data } = await axios.post('/task', formData);

   console.log(data);
});