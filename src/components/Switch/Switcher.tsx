import React, {useEffect, useState} from 'react';
import {Switch} from "@material-ui/core";

import {useAppDispatch} from "../../hooks";
import {getSwitchStatus} from "../../store/slices/switch.slice";

const Switcher = () => {
    const [check, setCheck] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange = () => {
        setCheck(!check)
    }

    useEffect(() => {
        dispatch(getSwitchStatus(check))
    }, [dispatch, check])

    return (
        <div>
            <Switch onChange={handleChange} color={"primary"} />
        </div>
    );
};

export default Switcher;