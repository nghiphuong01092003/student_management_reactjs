import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { useState } from "react";
import ClassModal from "./Modal/ClassModal";

export type classType = {
    classStudentId: string,
    classStudentName: string,
    createdAt: string,
    updatedAt: string
}

interface LoadClassStudentProps {
    data: classType[];
    loadData: () => void;
}
const LoadClassStudent: React.FC<LoadClassStudentProps> = ({ data, loadData }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpenForm = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
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
                                <IconButton aria-label="delete" size="large">
                                    <BorderColorRoundedIcon />
                                </IconButton>
                                <IconButton aria-label="delete" size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ClassModal open={open} handleClose={handleClose} loadData={loadData} />
        </>
    );
}
export default LoadClassStudent;