import React, {FC, useEffect, useState} from 'react';
import {Pagination} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles"


import "./pagination.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMoviesByGenreAndPage} from "../../store";

const useStyles = makeStyles(() => ({
    style: {
        "& .MuiPaginationItem-root": {
            color: "snow",
        }
    }
}));


const PagGenre:FC = () => {
    const dispatch = useAppDispatch();
    const {getGenreId} = useAppSelector(state => state.movieReducer);

    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(()=> {
        dispatch(getMoviesByGenreAndPage({id: getGenreId, pageId: page}))
    }, [dispatch, getGenreId, page])

    return (
        <div className="pagination">
            <Pagination count={500} size="large" page={page} onChange={handleChange}
                        color={"primary"} shape={"rounded"} classes={{ ul: classes.style }}/>
        </div>
    );
};

export default PagGenre;