import React from 'react';

import css from "./album.module.css";

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div className={css.albumBlock}>
            <h4>{userId}-{id}. {title}</h4>
        </div>
    );
};

export default Album;