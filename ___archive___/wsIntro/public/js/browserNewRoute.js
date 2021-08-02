console.log('start on new route');

const socket2 = new WebSocket('ws://localhost:8000/newroute');

const formEl = document.forms.taskForm;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   const inp1 = formData.get('inp1');
   socket2.send(inp1);
});

socket2.addEventListener('message', (ev) => {
   console.log('message from server: ', ev.data);
});