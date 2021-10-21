import { useRef, useEffect } from 'react';
import './App.scss';


function ShowMessages({ messageList }) {

    const bottomMessageList = useRef(null);

    useEffect(() => {
        if (bottomMessageList.current)
            bottomMessageList.current.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);

    return (
        <div class="messages__list">
            {
                messageList.map(message =>
                    <div key={message.id}>
                        <span>{message.id}: {message.author}</span>
                        <p>{message.text}</p>
                        <span>{message.date.toLocaleString()}</span>
                    </div>)
            }
            <div ref={bottomMessageList} class="bottom-list" />
        </div>
    )
};

export default ShowMessages;