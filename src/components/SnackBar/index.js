import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';


export const Snackbars = ({openSB, setOpenSB, message}) =>{

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        
        setOpenSB(false);
    };


  return (
    <Snackbar
        open={openSB || false}
        autoHideDuration={8000}
        onClose={handleClose}
        message={message}
        
      />
  );
}