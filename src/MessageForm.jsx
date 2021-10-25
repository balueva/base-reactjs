import { useState, useEffect, useRef } from 'react';
import './App.scss';
import { AUTHOR_ME } from './const';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

function MessageForm({ addMessage }) {

  const [textareaValue, setTextareaValue] = useState('');
  const onTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const refTextarea = useRef(undefined);

  //фокус при первой отрисовке, если убрать autoFocus у TextField
  /*
  useEffect(() => {
    refTextarea.current?.focus();
  }, []);
*/
  const addUserMessage = (event) => {
    event.preventDefault();
    if (textareaValue !== '') {
      addMessage(AUTHOR_ME, textareaValue);
      setTextareaValue('');
    }
    refTextarea.current.focus();
  };

  return (
    <form class="sendmessage" action="#" onSubmit={addUserMessage}>
      <TextField
        id="outlined-multiline-flexible" multiline rows={3} variant="standard" fullWidth
        color="success"
        value={textareaValue} onChange={onTextareaChange} inputRef={refTextarea} autoFocus
      />
      <IconButton color="primary" type="submit" variant='outlined' color="success">
        <SendIcon />
      </IconButton>
    </form>
  )
}

export default MessageForm;
