console.log('start');

const socket = new WebSocket('ws://localhost:8000');

const formEl = document.forms.taskForm;

formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target);
   const inp1 = formData.get('inp1');
   socket.send(inp1);
});

socket.addEventListener('message', (ev) => {
   console.log('message from server: ', ev.data);
});