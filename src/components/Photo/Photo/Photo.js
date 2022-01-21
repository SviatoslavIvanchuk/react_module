import React from 'react';
import css from "./photo.module.css";

const Photo = ({photo}) => {
    const {albumId, id, title, thumbnailUrl} = photo;
    return (
        <div className={css.photoBlock}>
            {albumId}-{id}. {title}
            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default Photo;