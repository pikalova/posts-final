import React from 'react'
import style from './style.module.css';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';


export const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className={style.menu}>
            <div className={style.buttonMenu}>
                <Link to={'/add'}>
                    <Button variant="contained" >Add post</Button>
                </Link>
            </div>
        </div>
    )
}
