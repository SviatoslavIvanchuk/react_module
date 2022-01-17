import '../../App.css';

const User = (props) => {
    const {id, name, surname, email} = props;
    return (
        <div className={'user'}>
            <h3>{id}. {name} {surname}</h3>
            <h4>{email}</h4>
        </div>
    );
};

export default User;