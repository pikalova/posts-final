import React, { useState } from 'react';

import { Card as CardMui } from '@mui/material';

import { Avatar, CardContent, CardHeader, Divider } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleCheck, faHeartCirclePlus, faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from '../../utils/api.js';
import './index.css'

const dateParse = (dateString) => {
    const newDate = new Date(Date.parse(dateString));
    return newDate.toLocaleString();

}



export const Card = ({ item, setPostData }) => {
    const [likes, setLikes] = useState(item.likes);
    const [myLike, setMyLike] = useState(item.likes.includes(item.author._id))
    const setLikesData = () => {
        const method = myLike ? 'DELETE' : 'PUT';
        api.addLikes(item._id, method)
            .then((value) => {
                setMyLike((prevState) => !prevState);
                setLikes(value.likes);
            })
    }
    const deletePost = () => {
        api.deletePost(item._id)
            .then((value) => {
                setPostData((prevState) => prevState.filter((items) => items._id !== value._id));
            })
    }

    return (
        <CardMui sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography className="card__headerButton">
                    <Button variant="contained" onClick={deletePost} >Удалить</Button>   
                    <Button onClick={setLikesData}>
                        {
                            myLike ? (<FontAwesomeIcon icon={faHeartCircleMinus} color="#bb3e03" size='xl' />)
                                : (<FontAwesomeIcon icon={faHeartCirclePlus} color="#FF7400" size='xl' />)
                        }
                        <Typography style={{ padding: '0px 5px' }}>
                            {likes.length}
                        </Typography>
                    </Button>
                </Typography>
                <Button variant='text' style={{ minHeight: '80px', minWidth: '100%' }}>{item.title}</Button>
                <Divider />
                <CardHeader avatar={<Avatar alt={item.author.name} src={item.author.avatar} />} title={item.author.name} />
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
            </CardContent>
        </CardMui>
    );
};
