import React, {FC, useState} from 'react';


import "./login.css"
import loginIcon from "../images/loginIcon";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useForm} from "react-hook-form";

const LogIn:FC = () => {
    const [open, setOpen] = useState(false);
    const [username, setUserName] = useState(null);
    const {register, reset, handleSubmit} = useForm();

    const handleClickOpen = () => {setOpen(true)}
    const handleClose = (data: any) => {
        setUserName(data.login)
        setOpen(false)
        reset()
    }

    return (
        <div className="login">
            <div onClick={handleClickOpen} className="userName">
                <img src={loginIcon} alt="login"/>
                <h5 >{username}</h5>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent className="dialogWind">
                    <DialogContentText>Log In to see more movies</DialogContentText>
                    <form onSubmit={handleSubmit(handleClose)}>
                        <div className="inputBlock">
                            <input type="text" placeholder={'Name...'} {...register('login')}/>
                            <input type="text" placeholder={'Password...'} {...register('password')}/>
                        </div>
                        <button>Log In</button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LogIn;