import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api';
import './index.css'
import { dateParse } from '../../utils/functions'
import { Card, CardContent, CardActions, CardMedia, Grid, CardHeader, Avatar } from '@mui/material';
import { faHeartCirclePlus, faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Comment } from '../Comment'


export const ShowPost = ({ myUserData, setPostData }) => {
  const params = useParams();
  const [item, setItem] = useState({
    author: {},
    likes: [],
    comments: []
  });

  useEffect(() => {
    api.getData(`posts/${params.itemId}`)
      .then((value) => setItem(value))
      .catch((err) => console.log(err))
  }, [])
  const setLikesData = () => {
    const method = item.likes.includes(myUserData._id) ? 'DELETE' : 'PUT';
    api.addLikes(item._id, method)
      .then((value) => {
        setPostData((prevState) => {
          const filtered = prevState.filter((item) => {
            if (item._id == value._id) {
              item.likes = value.likes;
            }
            return item;
          })
          return filtered;
        });
        setItem(value);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className='button'>
      <Link to={'/'}><Button variant="outlined">Back</Button></Link>
      </div>
      {item && <Grid container spacing={2} className='grid'>
        <Grid item container xs={16} >
          <Grid item xs={8}>
            <CardMedia
              component="img"
              className='img'
              image={item.image}
              alt={item.title}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h3'>
              <CardHeader
                avatar={<Avatar
                  alt={item.author.name}
                  src={item.author.avatar}
                />}
                title={item.author.name}
                subheader={dateParse(item.updated_at)}
              />

            </Typography>
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

          </Grid>

        </Grid>
        <Grid item xs={16}>
          <Typography variant='h5'>
            {item.title}
          </Typography>
          <Typography style={{ padding: '15px 0px' }} variant='body1'>
            {item.text}
          </Typography>
        </Grid>
        <Grid item xs={16}>
          <Typography variant='h6'>
            Comments:
          </Typography>

          {
            item.comments.map((comment) => <Comment comment={comment} key={comment._id}/>)

          }

        </Grid>
      </Grid>
      }

    </div>
  )
}
