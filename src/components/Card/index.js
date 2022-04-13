import React from 'react';

import { Card as CardMui } from '@mui/material';

import { Avatar, CardContent, CardHeader, Divider, IconButton } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const dateParse = (dateString) => {
    const newDate = new Date(Date.parse(dateString));
    return newDate.toLocaleString();

}


export const Card = ({ item }) => {
    return (
        <CardMui sx={{ maxWidth: 400 }}>
            {console.log(item)}
            <CardContent>
                <Button variant='text' style={{ minHeight: '80px', minWidth: '100%' }}>{item.title}</Button>
                <Divider />
                <CardHeader avatar={<Avatar alt={`${item.author.name}`} src={`$item.author.avatar`} />} title={item.author.name} />
                <Typography style={{ minHeight: '120px' }} variant="body2" color="text.secondary">
                    {item.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tags:
                    {item.tags.map((el) => {
                        return <Button size="small">{el}</Button>
                    })}
                </Typography>
                <Typography variant="body2">
                    <FontAwesomeIcon icon={faCirclePlus} /> {dateParse(item["created_at"])}
                    <Divider orientation='vertical' style={{ margin: '0px 5px', height: 20 }}></Divider>
                    <FontAwesomeIcon icon={faCirclePlus} /> {dateParse(item["created_at"])}
                </Typography>

            </CardContent>
        </CardMui>
    );
};
