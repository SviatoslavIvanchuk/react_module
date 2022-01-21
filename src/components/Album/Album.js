import React from 'react';
import css from "./album.module.css";
import {Link} from "react-router-dom";

const Album = ({album, getIdForPhoto}) => {
    const {userId, id, title} = album;

    return (

        <Link to={'photo'}>
            <div className={css.albumBlock} onClick={() => getIdForPhoto(id)}>
                <h4>{userId}-{id}. {title}</h4>
            </div>
        </Link>

    );
};

export default Album;