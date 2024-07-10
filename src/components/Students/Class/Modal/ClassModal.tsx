import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type ModalProps = {
    open: boolean,
    handleClose: () => void
    loadData: () => void
}

type classType = {
    classStudentId: string,
    classStudentName: string,
}

const ClassModal: FC<ModalProps> = ({ open, handleClose, loadData }) => {
    const [data, setData] = useState<classType>({
        classStudentId: "",
        classStudentName: ""
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    const handleSave = async () => {
        try {
            fetch("https://localhost:44312/api/ClassStudent/insert-ClassStudent", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        toast.success(data.message);
                        loadData();
                        handleClose()
                    } else {
                        toast.error(data.message);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

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
                    <span>THÊM LỚP MỚI</span>
                    <IconButton size='small' color='inherit'>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent >
                    <Box sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    label="Mã lớp"
                                    size='small'
                                    value={data.classStudentId}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setData((prev) => ({
                                            ...prev,
                                            classStudentId: event.target.value
                                        }));
                                    }}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField fullWidth
                                    size='small'
                                    id="outlined-error"
                                    label="Tên lớp"
                                    value={data.classStudentName}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setData((prev) => ({
                                            ...prev,
                                            classStudentName: event.target.value
                                        }));
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' size='small' color='success' onClick={handleSave} autoFocus>
                        Lưu
                    </Button>
                    <Button variant='contained' size='small' color='error' onClick={handleClose}>Hủy</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default ClassModal;