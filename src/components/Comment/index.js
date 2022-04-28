import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import api from '../../utils/api'
import { dateParse } from '../../utils/functions'
import './index.css'

export const Comment = ({ comment }) => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        api.getData(`users/${comment.author}`)
            .then((value) => setAuthor(value))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {comment && (<Card sx={{ minWidth: 275 }} className='card' >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <CardHeader
                            avatar={<Avatar
                                alt={author.name}
                                src={author.avatar}
                            />}
                            title={author.name}
                            subheader={dateParse(comment.updated_at)}
                        />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {comment.text}
                        </Typography>
                    </Typography>

                </CardContent>

            </Card>)}
        </>
    )
}
