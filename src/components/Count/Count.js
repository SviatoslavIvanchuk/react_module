import {useReducer} from "react";

import {reducer} from "../Reducer/Reducer";

const Count = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <div>{state.count}</div>
            <button onClick={()=> dispatch({type:'inc'})}>Inc</button>
            <button onClick={()=> dispatch({type:'dec'})}>Dec</button>
            <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
        </div>
    );
};

export default Count;