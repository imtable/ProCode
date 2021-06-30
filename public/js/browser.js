console.log('start');

const formEl = document.forms.taskForm;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   const id = formData.get('inpId');

   const { data } = await axios.post('/task', formData);
   console.log(data[0].name);

   const planets = data.map(item => {
      return item.name;
   });
   const contentEl = document.querySelector('.content');
   contentEl.innerHTML = planets;
});

console.log('end');