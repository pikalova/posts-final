import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Snackbars} from '../SnackBar/'

import api from '../../utils/api';

export const AlertDialog = ({open, setOpen, item, setPostData}) => {
  const [openSB, setOpenSB] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
const deletePost = () => {
  api.deletePost(item._id)
  .then((value) => {
    setPostData((prevState) => prevState.filter((items) => items._id !== value._id));
  })
  setOpen(false);
  setOpenSB(true);
}

return (
  <div>
      <Snackbars openSB={openSB} setOpenSB={setOpenSB} message={'Удалено успешно!'}/>
      <Dialog
        open={open || false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Вы действительно хотите удалить "${item.title}"? `}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {item.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={deletePost} autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
</div>
  );
}
