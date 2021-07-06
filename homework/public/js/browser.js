const formEl = document.forms.formPlanet;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   const contentEl = document.querySelector('.content');

   const id = formData.get('inpPlanet');
   
   const { data } = await axios.post('/task', formData);

   const planets = data.map(item => {
      return item.name;
   });

   contentEl.innerHTML = planets;
   console.log(planets);
});