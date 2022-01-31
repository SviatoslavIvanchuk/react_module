import React from 'react';

import css from "./layout.module.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <header className={css.header}>
                <Link to='/cars' >Cars</Link>
                <Link to='/users' >Users</Link>
                <Link to='/posts' >Posts</Link>
                <Link to='/comments' >Comments</Link>
            </header>

            <div className={css.content}>
                <Outlet/>
            </div>

            <footer className={css.footer} >
                Home Work 5
            </footer>
        </>
    );
};

export default Layout;