import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./albumPage.module.css";
import Album from "../../../components/Album/Album";

const AlbumPage = ({albums, getIdForPhoto}) => {


    return (
        <div className={css.albumsBlock}>
            <div className={css.albums}>
            {albums.map(value => <Album album={value} getIdForPhoto={getIdForPhoto} />)}
            </div>
            <Outlet/>
        </div>
    );
};

export default AlbumPage;