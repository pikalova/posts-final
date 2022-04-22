import React, { useEffect, useState } from 'react';
import api from '../../utils/api.js'
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import style from './style.module.css';



export const Header = ({ myUser}) => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    POSTS
                    <div className={style.restButtonsContainer}>
                        <Button variant="text">Home</Button>
                        <Button variant="text">Docs</Button>
                        <Button variant="text">GitHub</Button>
                        <div className={style.avatar}>
                            <Avatar alt={myUser.name} src={myUser.avatar} />
                            <Typography variant="body1" color={'#1976d2'}>{myUser.name}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
