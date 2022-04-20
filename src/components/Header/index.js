import React, { useEffect, useState } from 'react';
import api from '../../utils/api.js'
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import style from './style.module.css';



export const Header = ({ children }) => {
    const [myUserData, setMyUserData] = useState({});

    useEffect(() => {
        api.getData('users/me')
            .then((value) => {
                setMyUserData({ _id: value.id, name: value.name, avatar: value.avatar });
            })
    }, [])

    return (
        <div className={style.header}>

            <div className="container">
                <div className={style.header__wrapper}>
                    POSTS
                    {children}
                    <div className={style.restButtonsContainer}>
                        <Button variant="text">Home</Button>
                        <Button variant="text">Docs</Button>
                        <Button variant="text">GitHub</Button>
                        <div className={style.avatar}>
                            <Avatar alt={myUserData.name} src={myUserData.avatar} />
                            <Typography variant="body1" color={'#1976d2'}>{myUserData.name}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
