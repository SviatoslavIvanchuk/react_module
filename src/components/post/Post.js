import '../../App.css';

const Post = (props) => {
    const {userId, id, title, body} = props;

    return (
        <div className={'post'}>
            <h5>{userId}--{id}. {title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;