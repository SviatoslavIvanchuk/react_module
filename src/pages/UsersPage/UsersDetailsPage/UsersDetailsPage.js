import {Outlet} from "react-router-dom";

import UserDetails from "../../../components/UserDetails/UserDetails";
const UsersDetailsPage = ({user, getPostByUserId}) => {


    const date = new Date();

    return (
        <div>
            <UserDetails key={date.getMilliseconds().toString()} user={user} getPostByUserId={getPostByUserId} />
            <Outlet/>
        </div>
    );
};

export default UsersDetailsPage;