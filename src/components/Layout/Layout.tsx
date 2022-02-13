import React from "react";
import {Outlet, Link} from "react-router-dom";

import "./Layout.css"
import GenresList from "../genres/GenresList";
import LogIn from "../LogIn/LogIn";
import Switcher from "../Switch/Switcher";
import {useAppSelector} from "../../hooks";
import Searching from "../Searching/Searching";

const Layout = () => {

    const {status} = useAppSelector(state => state.switchReducer);

    return (
        <>
            <header className="header" >
                <Switcher/>
                <div className="logo">
                    <Link to={'/'}>Best Movies</Link>
                </div>

                <div className="menu">
                    <div className="genres">
                        <Link to={'/genres'}>Movies</Link>
                        <div className="genresList">
                            <GenresList/>
                        </div>
                    </div>
                </div>

                <Searching/>
                <LogIn/>
            </header>

                <div className={status? "contentLight" : "content"}>
                    <Outlet/>
                </div>

            <footer className="footer" >
                <h4>TMDB React Project</h4>
            </footer>
        </>
    );
};

export default Layout;