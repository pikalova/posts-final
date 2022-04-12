import React from 'react';

import { Card as CardMui } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, CardHeader, Divider } from '@mui/material';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
                <FontAwesomeIcon icon={faHome} />
            </CardContent>
        </CardMui>
    );
};
