import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function ChatList({ chatList }) {

    return (
        <List class="chats__list" sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            {
                chatList.map(item =>
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar alt={item.caption} src={'/img/' + item.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={item.caption} secondary={item.statusStr} />
                    </ListItem>
                )
            }
        </List>
    );
};

export default ChatList;
