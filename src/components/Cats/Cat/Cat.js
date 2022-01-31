import React from 'react';

const Cat = ({dispatch, cat}) => {

    return (
        <div>
            {cat.cat}__
            <button onClick={() => dispatch({type: "deleteCat", payload: cat.id})}>Delete</button>
        </div>
    );
};

export default Cat;