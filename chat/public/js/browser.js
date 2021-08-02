console.log('start');
const socket = io();

const userFormEl = document.forms.userForm;
const userMsgEl = document.querySelector('.userForm_msg');
const chatEl = document.querySelector('.chat');
const typingEl = document.querySelector('.chat_typing');

const postMsg = () => {
   userFormEl.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const userName = formData.get('userForm_name');
      const msg = formData.get('userForm_msg');
   
      socket.emit('msgReq', { userName, msg }, (resData) => {
         // console.log(resData);
      });
   });
}
const getMsg = () => {
   socket.on('msgRes', (data) => {
      const userName = data.userName;
      const msg = data.msg;
      console.log(data);
   
      const html = `
      <div class="chat_string">
        <span class="chat_name">${userName}</span>
        <span class="chat_msg">${msg}</span>
      </div>`
      chatEl.insertAdjacentHTML('beforeEnd', html);
      chatEl.scrollTo(0, chatEl.scrollHeight);
      userMsgEl.value = '';
   });
}
const getTyping = () => {
   socket.on('typingRes', (data) => {
      const userName = data.userName;
      html = `<span class="chat_typing_userName">${userName} is typing.. </span>`;
      typingEl.insertAdjacentHTML('beforeEnd', html);
   });
};
const postTyping = () => {
   const typingUpd = (ev) => {
      const userName = document.querySelector('.userForm_userName').value;   
      socket.emit('typingReq', { userName }, () => {
      });
   };

   const typingListener = () => {
     userMsgEl.addEventListener('keydown', typingUpd);
   };
   userMsgEl.addEventListener('focus', typingListener);
};
const killTyping = () => {
   setInterval(() => {
      typingEl.innerHTML = '';
   }, 5555);
}

const init = () => {
   postMsg();
   getMsg();
   postTyping();
   getTyping();
   killTyping();
};
init();