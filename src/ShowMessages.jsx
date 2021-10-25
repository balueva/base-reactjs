import { useRef, useEffect } from 'react';
import './App.scss';
import { AUTHOR_ME } from './const';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

function ShowMessages({ messageList }) {

    const bottomMessageList = useRef(null);

    useEffect(() => {
        if (bottomMessageList.current)
            bottomMessageList.current.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);

    return (
        <List class="messages__list" sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                messageList.map(message =>
                    <ListItem key={message.id} >
                        <Grid container align={message.author === AUTHOR_ME ? 'right' : 'left'}>
                            <Grid item xs={12} >
                                <ListItemText secondary={message.author} />
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText primary={message.text} text-align='justify' />
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText secondary={message.date.toLocaleString()} />
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            }
            <div ref={bottomMessageList} class='bottom-list' />
        </List>

    )
};

export default ShowMessages;


//<div class='messages__list'>
//            {
//                messageList.map(message =>
//                    <div key={message.id}>
//                        <span>{message.id}: {message.author}</span>
//                        <p>{message.text}</p>
//                        <span>{message.date.toLocaleString()}</span>
//                    </div>)
//            }
//            <div ref={bottomMessageList} class='bottom-list' />
//        </div>

