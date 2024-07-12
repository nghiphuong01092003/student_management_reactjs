import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { FC } from 'react';
type ModalQuestionProps = {
    open: boolean,
    handleClose: () => void,
    content: string | React.ReactNode,
    handleConfirm: () => void
}
const ModalQuestion: FC<ModalQuestionProps> = ({ open, handleClose, content, handleConfirm }) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: "#3b556edb", color: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                    onClick={handleClose}>
                    <span>Cảnh báo</span>
                    <IconButton size='small' color='inherit'>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ p: 2 }}>
                        {content}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleConfirm} size='small' color='success' autoFocus>
                        Xác nhận
                    </Button>
                    <Button variant='contained' onClick={handleClose} size='small' color='error' >Hủy</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default ModalQuestion;