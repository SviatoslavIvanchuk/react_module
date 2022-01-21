import React from 'react';

import css from './photos.module.css'
import Photo from "./Photo/Photo";

const Photos = ({photos}) => {

    return (
        <div className={css.photos}>
            {photos.map(value => <Photo photo={value} />)}
        </div>
    );
};

export default Photos;