const UserDetails = ({user, getPosts}) => {


    let userList = [];
    function getItem(user) {
        for(let item in user) {
            if(typeof(user[item]) === 'object') {
                getItem(user[item]);

            } else {
                // console.log(`${item}: `,User[item])
                userList.push(`${item}: ${user[item]}`)
            }
        }
    }
    getItem(user);
    // console.log(User.id)

    let id = user.id;
    return (
        <div>
            <div>
                {userList.map((item) => <li key={1 + userList.indexOf(`${item}`)}>{item}</li>)}
            </div>
            <button onClick={() => getPosts(id) }>get Posts</button>
        </div>
    );
};

export default UserDetails;