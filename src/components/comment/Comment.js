import '../../App.css';

const Comment = (props) => {
    const {postId, id, name, email, body} = props;
    return (
        <div className={'comment'}>
            <h5>{postId}--{id}. {name}</h5>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;