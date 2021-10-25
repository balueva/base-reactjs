import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import { AUTHOR_ROBOT } from './const';

import Message from './Message.jsx';
import MessageForm from './MessageForm.jsx';
import ShowMessages from './ShowMessages.jsx';
import ChatList from './ChatList.jsx';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    { id: 1, caption: 'Школа 2В', statusStr: 'Класс 2В', isGroup: true, avatar: '' },
    { id: 2, caption: 'Школа 2В родители', statusStr: 'Класс 2В только родители', isGroup: true, avatar: 'panda.jpg' },
    { id: 3, caption: 'Liberty school', statusStr: 'Liberty school Famili&Friends-2', isGroup: true, avatar: '' },
    { id: 4, caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: 5, caption: 'Лиза', statusStr: '', isGroup: false, avatar: 'pikachu.jpg' },
    { id: 6, caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
    { id: 7, caption: 'Ольга', statusStr: '', isGroup: false, avatar: '' },
    { id: 8, caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: 9, caption: 'Лиза', statusStr: '', isGroup: false, avatar: '' },
    { id: 10, caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
    { id: 11, caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: 12, caption: 'Лиза', statusStr: '', isGroup: false, avatar: '' },
    { id: 13, caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
    { id: 14, caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: 15, caption: 'Лиза', statusStr: '', isGroup: false, avatar: '' },
    { id: 16, caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' }
  ]);

  const addMessage = (author, text) => {
    const newMessageList = [...messageList, { id: uuidv4(), author: author, text: text, date: new Date() }];
    setMessageList(newMessageList);
  };

  useEffect(() => {
    const robotAnswer = setTimeout(() => {
      if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR_ROBOT)
        addMessage(AUTHOR_ROBOT, 'Здравствуйте! Это Робот.')
    }, 1500);

    return () => { clearTimeout(robotAnswer) };
  }, [messageList]);

  return (
    <div className="App">
      <div class="chats">
        <div class="menu">Меню списка чатов</div>
        <ChatList chatList={chatList} />
        <div class="menu">Футер</div>
      </div>
      <div class="messages">
        <div class="menu">Меню активного чата</div>
        <ShowMessages messageList={messageList} />
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
