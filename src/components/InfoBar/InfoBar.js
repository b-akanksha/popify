import React from 'react'
import { Alert, Snackbar } from '@mui/material';

const InfoBar = ({ open, handleClose, message }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert severity="error" sx={{ width: '100%' }} onClose={handleClose} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    )
}

export default InfoBar;