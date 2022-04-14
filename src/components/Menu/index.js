import React from 'react'
import style from './style.module.css';
import Button from '@mui/material/Button';

const addPost= () => {
    console.log('Ecть контакт!!!');
}

export const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.buttonMenu}>
                <Button variant="contained" onClick={addPost} >Add post</Button>
            </div>
        </div>
    )
}
