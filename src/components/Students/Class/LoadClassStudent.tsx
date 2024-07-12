import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { useEffect, useState } from "react";
import ClassModal from "./Modal/ClassModal";
import ModalQuestion from "../../ModalQuestion";
import { toast } from "react-toastify";

export type classType = {
    id: string | null,
    classStudentId: string,
    classStudentName: string,
    createdAt?: string,
    updatedAt?: string
}

interface LoadClassStudentProps {
    data: classType[];
    loadData: () => void;
}
const LoadClassStudent: React.FC<LoadClassStudentProps> = ({ data, loadData }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isNew, setIsNew] = useState<boolean>(false);
    const [selectedClassStudent, setSelectedClassStudent] = useState<classType | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        if (selectedClassStudent !== null) {
            console.log(selectedClassStudent);
        }
    }, [selectedClassStudent])

    const handleClickOpenForm = () => {
        setSelectedClassStudent(null);
        setOpen(true);
        setIsNew(true);
    }

    const handleClose = () => {
        setOpen(false);
        setOpenDialog(false);
        setSelectedClassStudent(null);
    }

    const handleEdit = (classStudent: classType) => {
        setSelectedClassStudent(classStudent);
        setOpen(true);
        setIsNew(false);
    }
    const handleDelete = (classStudent: classType) => {
        setSelectedClassStudent(classStudent);
        setOpenDialog(true);
    }
    const handleConfirm = async () => {
        if (!selectedClassStudent) return;
        const { id, classStudentId, classStudentName } = selectedClassStudent;
        try {
            fetch("https://localhost:44312/api/ClassStudent/delete-ClassStudent", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id, classStudentId, classStudentName
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
        <>
            <Button variant="contained" color="primary" onClick={handleClickOpenForm}>Thêm lớp mới</Button>
            <table id="table_class">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã lớp</th>
                        <th>Tên lớp</th>
                        <th>Ngày tạo</th>
                        <th>Ngày sửa</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((classStudent, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{classStudent.classStudentId}</td>
                            <td>{classStudent.classStudentName}</td>
                            <td>{classStudent.createdAt}</td>
                            <td>{classStudent.updatedAt}</td>
                            <td>
                                <IconButton aria-label="edit" onClick={() => handleEdit(classStudent)} size="large">
                                    <BorderColorRoundedIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => handleDelete(classStudent)} size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ClassModal open={open} handleClose={handleClose} loadData={loadData} selectedClassStudent={selectedClassStudent} isNew={isNew} />
            <ModalQuestion open={openDialog} handleClose={handleClose} content="Bạn có chắn chắn muốn xóa lớp này?" handleConfirm={handleConfirm} />
        </>
    );
}
export default LoadClassStudent;