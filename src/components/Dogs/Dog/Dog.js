import React from 'react';

const Dog = ({dog, dispatch}) => {

    return (
        <div>
            {dog.dog}__
            <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>Delete</button>
        </div>
    );
};

export default Dog;