import React, {useReducer, useState} from "react";

import {reducer} from "../Reducer/Reducer";


const Cats = () => {
    const [state, dispatch] = useReducer(reducer, {cat: ''});
    const [cat, setCat] = useState(null);

    const onSubmitChange = (e) => {
      e.preventDefault()
        e.target.value = '';
    }

    const clickButton = () => {
        if (state.cat !== cat) {
            dispatch({type: "cat", payload: cat});

            let idBlock = document.getElementById('catList');
            let li = document.createElement('li');
                li.innerHTML = state.cat;

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
                <form onSubmit={onSubmitChange}>
                    <label>Add Cat: <input onChange={e => setCat(e.target.value)}/> </label>
                    <button onClick={clickButton}>Add</button>
                </form>
            </div>

            <hr/>

            <div>
                <ul id={'catList'}>

                </ul>
            </div>
        </div>
    );
};

export default Cats;