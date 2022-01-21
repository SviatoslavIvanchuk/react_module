import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './Layout.module.css'

const Layout = () => {

    return (
        <>
            <header className={css.header}>
                <Link to='/users' >Users</Link>
                <Link to='/posts' >Posts</Link>
            </header>

                <Outlet/>

            <footer>

            </footer>
        </>

    );
};

export default Layout;