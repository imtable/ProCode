console.log('start');
const socket = io();

const USER = { name: '' }

const userIdentify = async () => {
   const { data } = await axios.get('/userIdentify');
   if (data.status.includes('error')) {
      console.log('user is not identify')
      return;
   }

   // console.log(`success identify user ${data.payload.profile.name}`)
   USER.name = data.payload.profile.name;
   if (USER.name) {
      console.log('welcome back', USER.name);
      renderChat(USER.name);
   }
}

const regUser = async () => {
   const form = document.forms.userFormReg;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);

      const { data } = await axios.post('/userReg', formData);
      if (data.status.includes('success')) {
         console.log(data.status);
         userIdentify();
      }
      console.log(data.status);
      renderError(data.status);
   });
}

const userLogin = async () => {
   const form = document.forms.userFormLogin;
   form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const formData = new FormData(ev.target);
      const { data } = await axios.post('/userLogin', formData);
      if (data.status.includes('success')) {
         console.log(`success login user ${data.status}`);
         USER.name = data.payload.profile.name;
         renderChat(USER.name);
         return;
      }
      console.log(data.status);
      renderError(data.status);
   });
}

const userLogout = async () => {
   const btnLogoutEl = document.querySelector('.logout_btn-logout');
   btnLogoutEl.addEventListener('click', async (ev) => {
      const { data } = await axios.get('/userLogout');
      if (data.status.includes('success')) {
         console.log(`${USER.name} logout success`);
         USER.name = '';
         window.location.reload();
      }
   });
}

function fadeRemove(elem, t, f){
  // кадров в секунду (по умолчанию 50)
  var fps = f || 50; 
  // время работы анимации (по умолчанию 500мс)
  var time = t || 500; 
  // сколько всего покажем кадров
  var steps = time / (1000 / fps);   
  // текущее значение opacity - изначально 0
  var op = 1;
  // изменение прозрачности за 1 кадр
  var d0 = op / steps;
  
  // устанавливаем интервал (1000 / fps) 
  // например, 50fps -> 1000 / 50 = 20мс  
  var timer = setInterval(function(){
    // уменьшаем текущее значение opacity
    op -= d0;
    // устанавливаем opacity элементу DOM
    elem.style.opacity = op;
    // уменьшаем количество оставшихся шагов анимации
    steps--;
    
    // если анимация окончена
    if(steps <= 0){
      // убираем интервал выполнения
      clearInterval(timer);
      // и убираем элемент из потока документа
      elem.remove();
      // elem.style.display = 'none';
    }
  }, (1000 / fps));
}

const renderError = (status) => {
   const errorEl = document.querySelectorAll('.error');
   if (errorEl) {
      errorEl.forEach(element => {
         fadeRemove(element, 222, 60);
      });
   }
   const showedUserFormEl = document.querySelector('.userForm_outer.show');
   const html = `
   <div class="error">
   <p class="error-text">${status}</p>
   </div>`;
   showedUserFormEl.insertAdjacentHTML('beforeEnd', html);
}

const renderSigning = () => {
   const renderLogin = () => {
      const btnSigningEl = document.querySelector('.signing_btn-login');
      btnSigningEl.addEventListener('click', (ev) => {
         const showing = document.querySelector('.userFormLogin_outer').classList.add('show');
         const unshowing = document.querySelector('.userFormReg_outer').classList.remove('show');
      });
   }
   const renderReg = () => {
      const btnSigningEl = document.querySelector('.signing_btn-reg');
      btnSigningEl.addEventListener('click', (ev) => {
         const showing = document.querySelector('.userFormReg_outer').classList.add('show');
         const unshowing = document.querySelector('.userFormLogin_outer').classList.remove('show');
      });
   }
   renderLogin();
   renderReg();
}

const renderChat = () => {
   if (!USER.name) {
      console.log('renderChat func didnt get a user');
      return;
   }
   
   const signingEl = document.querySelector('.signing').classList.add('hide');

   const html = `<input class="msgForm_userName hide" type="text" name="userForm_name" value="${USER.name}">`;
   const msgFormEl = document.querySelector('.msgForm');
   msgFormEl.insertAdjacentHTML('beforeEnd', html);

   const chatEl = document.querySelector('.chat').classList.add('show');
   const logoutEl = document.querySelector('.logout').classList.add('show');
   userLogout();
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
      // const userName = formData.get('msgForm_name');
      const msg = formData.get('msgForm_msg');
      const userName = USER.name;
      
      socket.emit('msgReq', { userName, msg }, (resData) => {
         // console.log(resData);
      });
   });
};
const getMsg = () => {
   const chatEl = document.querySelector('.chat_messages');
   socket.on('msgRes', (data) => {
      const userName = data.userName;
      const msg = data.msg;
   
      const html = `
      <div class="chat_string">
        <span class="chat_name">${userName}:</span>
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
   userIdentify();
   renderSigning();
   userLogin();
   regUser();
   postMsg();
   getMsg();
   postTyping();
   getTyping();
};
init();
