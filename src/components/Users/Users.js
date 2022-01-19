
import User from "../User/User";


const Users = ({users}) => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     userService.getAll().then(value => setUsers(value))
    // }, [])

    // console.log(User)

    return (
        <div>

            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};

export default Users;