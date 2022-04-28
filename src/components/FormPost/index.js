import { Button, InputLabel, TextareaAutosize, TextField } from '@mui/material'
import React, { useState} from 'react'

import { Snackbars } from '../SnackBar'
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom'



export const FormPost = ({setPostData,setPageNumber}) => {
    const [openSB, setOpenSB] = useState(false);
    const navigate = useNavigate();


    const sendData = (event) => {
        event.preventDefault();
        console.log(event.target.file)
        const {
            target: { title, text, image, tags: { value } },
        } = event;
        const editTags = value.split('#').filter((item) => item != '');
        api.addPost({
            title: title.value,
            text: text.value,
            image: image.value,
            tags: editTags,
        }).then((data) => {
            setOpenSB(true);
            setPostData((prevState) => {
                const newData = [...prevState, data]
                setPageNumber(Math.ceil(newData.length/12));
                return newData;
            })
            setTimeout(() => navigate('/'),2000);
        }).catch((err) => {
            alert(err)
        })
    }

 
    return (
        <div>
            <Snackbars openSB={openSB} setOpenSB={setOpenSB} message={'Успешно добавлено'}/>
            <form className='post' onSubmit={sendData}>
                <TextField name='title' label="Title" variant="standard" required/>
                <TextField name='image' label="Image URL" variant="standard" required />
                <InputLabel>Text: </InputLabel>
                <TextareaAutosize name="text" style={{ height: 200 }} required/>
                <TextField
                    inputProps={{ pattern: "^(#{1}.{1,}){1,}$", title:'Tags should contain #, e.g. #home #aboutme' }}
                    name="tags"
                    label="Tags separated by #"
                    variant="standard"
                    required
                />
                <Button type='submit' >Отправить</Button>
            </form>
        </div>
    )
}
