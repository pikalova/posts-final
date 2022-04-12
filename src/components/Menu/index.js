import React from 'react'
import style from './style.module.css';
import Button from '@mui/material/Button';

export const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.buttonMenu}>
                <Button variant="contained" onClick={console.log('Есть контакт')}>Add post</Button>
            </div>
        </div>
    )
}
