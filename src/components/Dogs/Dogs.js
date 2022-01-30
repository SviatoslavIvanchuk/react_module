import React, {useReducer, useState} from "react";

import {reducer} from "../Reducer/Reducer";


const Dogs = () => {
    const [state, dispatch] = useReducer(reducer, {dog: ''});
    const [dog, setDog] = useState(null);

    const clickButton = () => {
        if (state.dog !== dog) {
            dispatch({type: "dog", payload: dog});

            let idBlock = document.getElementById('dogList');
            let li = document.createElement('li');
                li.innerHTML = state.dog;

            let delButton = document.createElement('button');
                delButton.innerText = 'Dell';
                delButton.onclick = () => li.remove();

            idBlock.append(li)
            li.append(delButton)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <label>Add Dog: <input onChange={e => setDog(e.target.value)}/> </label>
                    <button onClick={clickButton}>Add</button>
                </form>
            </div>

            <hr/>

            <div>
                <ul id={'dogList'}>

                </ul>
            </div>
        </div>
    );
};

export default Dogs;