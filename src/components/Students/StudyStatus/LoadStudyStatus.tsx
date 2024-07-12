import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import StudyStatusModal from "./Modal/StudyStatusModal";
import { useEffect, useState } from "react";
import ModalQuestion from "../../ModalQuestion";
import { toast } from "react-toastify";

export type studyStatusType = {
    id: string,
    statusId: string,
    statusName: string,
    note?: string,
    createdAt?: string,
    updatedAt?: string
}
interface StudyStatusTypeProps {
    data: studyStatusType[];
    loadData: () => void
}
const LoadStudyStatus: React.FC<StudyStatusTypeProps> = ({ data, loadData }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isNew, setIsNew] = useState<boolean>(false);
    const [selectedStudyStatus, setSelectedStudyStatus] = useState<studyStatusType | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        if (selectedStudyStatus !== null) {
            console.log(selectedStudyStatus);
        }
    }, [selectedStudyStatus])

    const handleClickOpenForm = () => {
        setSelectedStudyStatus(null);
        setOpen(true);
        setIsNew(true);
    }
    const handleClose = () => {
        setOpen(false);
        setSelectedStudyStatus(null);
        setOpenDialog(false);
    }
    const handleEdit = (studyStatus: studyStatusType) => {
        setSelectedStudyStatus(studyStatus);
        setOpen(true);
        setIsNew(false);
    }
    const handleDelete = (studyStatus: studyStatusType) => {
        setSelectedStudyStatus(studyStatus);
        setOpenDialog(true);
    }
    const handleConfirm = () => {
        if (!selectedStudyStatus) return;
        const { id, statusId, statusName, note } = selectedStudyStatus;
        try {
            fetch("https://localhost:44312/api/StudyStatus/delete-StudyStatus", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id, statusId, statusName, note
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        toast.success(data.message);
                        loadData();
                        handleClose();
                    } else {
                        toast.error(data.message);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <><Button variant="contained" color="primary" onClick={handleClickOpenForm}>Thêm tình trạng học mới</Button>
            <table id="table_class">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã tình trạng học</th>
                        <th>Tên tình trạng</th>
                        <th>Ghi chú</th>
                        <th>Ngày tạo</th>
                        <th>Ngày sửa</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((studyStatus, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{studyStatus.statusId}</td>
                            <td>{studyStatus.statusName}</td>
                            <td>{studyStatus?.note}</td>
                            <td>{studyStatus.createdAt}</td>
                            <td>{studyStatus.updatedAt}</td>
                            <td>
                                <IconButton aria-label="edit" onClick={() => handleEdit(studyStatus)} size="large">
                                    <BorderColorRoundedIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDelete(studyStatus)} size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <StudyStatusModal open={open} isNew={isNew} loadData={loadData} handleClose={handleClose} selectedStudyStatus={selectedStudyStatus} />
            <ModalQuestion open={openDialog} handleClose={handleClose} content="Bạn có chắn chắn muốn tình trạng học này?" handleConfirm={handleConfirm} />
        </>
    );
}
export default LoadStudyStatus;