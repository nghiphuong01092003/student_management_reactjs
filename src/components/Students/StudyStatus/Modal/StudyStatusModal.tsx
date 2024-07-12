import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { studyStatusType } from '../LoadStudyStatus';

type StudyStatusType = {
    id: string | null,
    statusId: string,
    statusName: string,
    note?: string,
    createdAt?: string,
    updatedAt?: string
}

type StudyStatusProps = {
    open: boolean,
    handleClose: () => void
    loadData: () => void
    selectedStudyStatus: studyStatusType | null
    isNew: boolean
}
const StudyStatusModal: FC<StudyStatusProps> = ({ open, handleClose, loadData, selectedStudyStatus, isNew }) => {
    const [data, setData] = useState<StudyStatusType>({
        id: null,
        statusId: "",
        statusName: "",
        note: "",
        createdAt: "",
        updatedAt: "",
    })

    useEffect(() => {
        if (selectedStudyStatus !== null) {
            console.log(selectedStudyStatus);
            setData((prev) => ({
                ...prev,
                id: selectedStudyStatus.id,
                statusId: selectedStudyStatus.statusId,
                statusName: selectedStudyStatus.statusName,
                note: selectedStudyStatus.note
            }))
        }
    }, [selectedStudyStatus])

    const reset = () => {
        setData({
            id: null,
            statusId: "",
            statusName: "",
            note: "",
            createdAt: "",
            updatedAt: "",
        })
    }

    const handleSave = async () => {
        try {
            const dataMap = {
                statusId: data.statusId,
                statusName: data.statusName,
                note: data.note,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt
            }
            if (isNew) {
                await fetch("https://localhost:44312/api/StudyStatus/insert-StudyStatus", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataMap)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.status) {
                            toast.success(data.message);
                            loadData();
                            handleClose();
                            reset();
                        } else {
                            toast.error(data.message);
                        }
                    });
            } else {
                await fetch("https://localhost:44312/api/StudyStatus/change-StudyStatus", {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.status) {
                            toast.success(data.message);
                            loadData();
                            handleClose();
                            reset();
                        } else {
                            toast.error(data.message);
                        }
                    });
            }

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
                    <span>THÊM TÌNH TRẠNG HỌC MỚI</span>
                    <IconButton size='small' color='inherit'>
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent >
                    <Box sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    label="Mã tình trạng học"
                                    size='small'
                                    value={data.statusId}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setData((prev) => ({
                                            ...prev,
                                            statusId: event.target.value
                                        }));
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <TextField fullWidth
                                    size='small'
                                    id="outlined-error"
                                    label="Tên tình trạng học"
                                    value={data.statusName}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setData((prev) => ({
                                            ...prev,
                                            statusName: event.target.value
                                        }));
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <TextField fullWidth
                                    size='small'
                                    id="outlined-error"
                                    label="Chú thích"
                                    value={data.note}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setData((prev) => ({
                                            ...prev,
                                            note: event.target.value
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

export default StudyStatusModal;