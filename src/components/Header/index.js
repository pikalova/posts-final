import React, { useState } from 'react';
import Button from '@mui/material/Button';
import style from './style.module.css';

export const Header = ({ children }) => {
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
                    </div>
                </div>
            </div>
        </div>
    );
};
