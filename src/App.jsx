import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import Message from './Message.jsx';
import MessageForm from './MessageForm.jsx';
import ShowMessages from './ShowMessages.jsx';

function App() {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (author, text) => {
    const newMessageList = [...messageList, { id: uuidv4(), author: author, text: text, date: new Date() }];
    setMessageList(newMessageList);
  };

  useEffect(() => {
    const robotAnswer = setTimeout(() => {
      if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'Robot')
        addMessage('Robot', 'Здравствуйте! Это Робот.')
    }, 1500);

    return () => { clearTimeout(robotAnswer) };
  }, [messageList]);

  return (
    <div className="App">
      <div class="authors">Собеседники, группы</div>
      <div class="messages">
        <div class="messages__menu">Меню</div>
        <ShowMessages messageList={messageList} />
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
