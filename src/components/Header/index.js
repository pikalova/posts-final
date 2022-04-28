import React, { useEffect, useState } from 'react';
import api from '../../utils/api.js'
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';



export const Header = ({ myUser }) => {
    const navigate = useNavigate();
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <Link to={'/'}><Button variant="text">Home</Button></Link>
                    <div className={style.restButtonsContainer}>
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
