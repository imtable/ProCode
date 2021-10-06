console.log('start');
const socket = io();

const checkSID = async () => {
   const { data } = await axios.get('/chat/checkSID');
   return data;
}

const regUser = async () => {
   const form = document.forms.userForm;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/chat/regUser', formData);
      console.log(data.status);
      
      userLogIn();
   });
}

const renderChat = async (user) => {
   const userForm_outer = document.querySelector('.userForm_outer').classList.toggle('hide');

   const html = `<input class="msgForm_userName hide" type="text" name="userForm_name" value="${user[0].name}">`;
   const msgForm = document.querySelector('.msgForm');
   msgForm.insertAdjacentHTML('beforeEnd', html);

   const chat = document.querySelector('.chat').classList.toggle('hide');
}

const userLogIn = async () => {
   const user = await checkSID();
   if (user === 'user not registered') {
      console.log(user);
      return;
   }
   renderChat(user);
}

const userMsgEl = document.querySelector('.msgForm_msg');
const postMsg = () => {
   const msgFormEl = document.forms.msgForm;
   msgFormEl.addEventListener('submit', (ev) => {
      ev.preventDefault();
      if (!userMsgEl.value) {
         return;
      }
      const formData = new FormData(ev.target);
      const userName = formData.get('msgForm_name');
      const msg = formData.get('msgForm_msg');
      
      socket.emit('msgReq', { userName, msg }, (resData) => {
         // console.log(resData);
      });
   });
};
const getMsg = () => {
   const chatEl = document.querySelector('.chat');
   socket.on('msgRes', (data) => {
      const userName = data.userName;
      const msg = data.msg;
   
      const html = `
      <div class="chat_string">
        <span class="chat_name">${userName}</span>
        <span class="chat_msg">${msg}</span>
      </div>`
      chatEl.insertAdjacentHTML('beforeEnd', html);
      chatEl.scrollTo(0, chatEl.scrollHeight);
      userMsgEl.value = '';
   });
};

const postTyping = () => {
   const typingUpd = (ev) => {
      const userName = document.querySelector('.msgForm_userName').value;   
      socket.emit('typingReq', { userName }, () => {
      });
   };

   userMsgEl.addEventListener('keydown', typingUpd);
};

let timerVal = null;
const timer = () => {
   clearTimeout(timerVal);
   timerVal = setTimeout(() => {
      const currentUser = document.querySelector(`#${userName}`);
      typingEl.removeChild(currentUser);
   }, 2222);
};
const getTyping = () => {
   socket.on('typingRes', (data) => {
      const userName = data.userName;
      const typingEl = document.querySelector('.chat_typing');

      const currentUser = document.querySelector(`#${userName}`);
      if (currentUser) {
         return;
      };
      
      const html = `
      <span class="chat_typing_userName" id="${userName}">${userName} is typing.. </span>`;
      typingEl.insertAdjacentHTML('beforeEnd', html);
      
      const timer = () => {
         let timerVal = null;
         clearTimeout(timerVal);
         timerVal = setTimeout(() => {
            const currentUser = document.querySelector(`#${userName}`);
            typingEl.removeChild(currentUser);
         }, 2222);
      };
      timer();
   });
};

const init = async () => {
   userLogIn();
   regUser();
   postMsg();
   getMsg();
   postTyping();
   getTyping();
};
init();
