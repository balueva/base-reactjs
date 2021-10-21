import './Message.scss';

function Message({ name }) {
    return (
        <div className="Message">
            <h1> Hello, {name} </h1>
        </div>
    )
}

export default Message;