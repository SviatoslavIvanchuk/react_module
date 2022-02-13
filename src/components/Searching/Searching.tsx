import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "./searching.css";
import searchIcon from "../images/searchIcon";
import {useAppDispatch} from "../../hooks";
import {searchMoviesByTitle} from "../../store";

const Searching = () => {
    const [search, setSearch] = useState('');

    const dispatch = useAppDispatch();

    const getValue = (e: any) => {setSearch(e.target.value)}

    const sentSearch = () => {
        dispatch(searchMoviesByTitle(search.split(' ').join('+').toLowerCase()))
    }


    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search..." className="searchInput "onChange={getValue} />

                <button type={"reset"} >
                    <Link to={'/found'} >
                        <img src={searchIcon} alt="search" onClick={sentSearch} />
                    </Link>
                </button>

            </form>
        </div>
    );
};

export default Searching;