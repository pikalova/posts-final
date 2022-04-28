import React, { useEffect, useState } from 'react';

import { Card as CardMui, ListItemSecondaryAction } from '@mui/material';

import { Avatar, CardContent, CardHeader, Divider } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck, faHeartCirclePlus, faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from '../../utils/api.js';
import './index.css';
import { AlertDialog } from '../AlertDialog';
import { Link } from 'react-router-dom';

import { dateParse } from '../../utils/functions'

export const Card = ({ item, myUserData, setPostData }) => {

    const [open, setOpen] = useState(false);

    const setLikesData = () => {
        const method = item.likes.includes(myUserData._id) ? 'DELETE' : 'PUT';
        api.addLikes(item._id, method)
        .then((value) => {
            setPostData((prevState) =>{
                const filtered = prevState.filter((item) => {
                    if (item._id == value._id){
                        item.likes = value.likes;
                    }
                    return item;
                })
                return filtered;
            });
        })
        .catch((err) => console.log(err))
    }
    
    const deletePost = () => {
        setOpen(true);
    }

   

    return (
        <div>
            <AlertDialog open={open} setOpen={setOpen} item={item} setPostData={setPostData} />
            <CardMui sx={{ maxWidth: 400 }}>
                <CardContent>
                    <Typography className="card__headerButton">
                        <Button onClick={setLikesData}>
                            {
                                (item.likes.includes(myUserData._id)) ? (<FontAwesomeIcon icon={faHeartCircleMinus} color="#bb3e03" size='xl' />)
                                : (<FontAwesomeIcon icon={faHeartCirclePlus} color="#FF7400" size='xl' />)
}
                            <Typography style={{ padding: '0px 5px' }}>
                                {item.likes.length}
                            </Typography>
                        </Button>
                    </Typography>
                    <CardHeader avatar={<Avatar alt={item.author.name} src={item.author.avatar} />} title={item.author.name} />
                    <Divider />
                    <Link to={`/${item._id}`} ><Button variant='text' style={{ minHeight: '80px', minWidth: '100%' }}>{item.title}</Button></Link>
                    <Divider />
                    <Typography style={{ minHeight: '120px' }} variant="body2" color="text.secondary">
                        {item.text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tags:
                        {item.tags.map((el) => {
                            return <Button size="small" key={el}>{el}</Button>
                        })}
                    </Typography>
                    <Typography variant="body2">
                        <FontAwesomeIcon icon={faCirclePlus} color="orange" /> {dateParse(item["created_at"])}
                    </Typography>
                    <Typography variant="body2">
                        <FontAwesomeIcon icon={faCircleCheck} color='green' /> Last Update: {dateParse(item["updated_at"])}
                    </Typography>
                    <Typography className="card__headerButton">
                        {(item.author._id == myUserData._id) ?
                            (<Button variant="contained" onClick={deletePost} >Удалить</Button>) : (<></>)
                        }
                    </Typography>
                </CardContent>
            </CardMui>
        </div>
    );
};
