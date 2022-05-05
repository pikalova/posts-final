import React, { useContext} from 'react';
import Button from '@mui/material/Button';
import { Avatar, Typography, Chip, Stack } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext'


export const Header = () => {
    const navigate = useNavigate();
    const {myUserData, setMyUserData} = useContext(UserContext)

    const logout = () => {
        localStorage.clear();
        setMyUserData({})
        navigate('auth');
    }

    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <Link to={'/'}><Button variant="text">Home</Button></Link>
                    <div className={style.restButtonsContainer}>
                    {myUserData._id && (<div className={style.avatar}>
                            <Avatar alt={myUserData?.name} src={myUserData?.avatar} />
                            <Typography variant="body1" color={'#1976d2'}>{myUserData?.name}</Typography>
                            <Chip onClick={logout} icon={<LogoutIcon/>} label='LogOut' color="info" variant='outlined' ></Chip>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};
