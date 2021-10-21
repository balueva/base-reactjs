import { useState } from 'react';
import './App.scss';

function MessageForm({ addMessage }) {

  const [textareaValue, setTextareaValue] = useState('');
  const onTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const addUserMessage = (event) => {
    event.preventDefault();
    if (textareaValue !== '') {
      addMessage('XXX', textareaValue);
      setTextareaValue('');
    }
  };

  return (
    <form class="sendmessage" action="#" onSubmit={addUserMessage}>
      <textarea value={textareaValue} onChange={onTextareaChange} cols="30" rows="5"></textarea>
      <button type="submit">Отправить</button>
    </form>
  )
}

export default MessageForm;