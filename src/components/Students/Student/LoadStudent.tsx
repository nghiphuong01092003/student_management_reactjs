import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

type studentType = {
    studentId: string,
    studentName: string,
    dateOfBirth: string,
    placeOfBirth: string,
    gender: string,
    idcard: string,
    ethnic: string,
    phoneNumber: string,
    statusId: string,
    createdAt: string,
    updatedAt: string
}
interface studenProps {
    data: studentType[]
}
const Loadtudent: React.FC<studenProps> = ({ data }) => {
    return (
        <>  <Button variant="contained" color="primary">Thêm sinh viên mới</Button>
            <table id="table_class">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Nơi sinh</th>
                        <th>Giới tính </th>
                        <th>CCCD</th>
                        <th>Dân tộc</th>
                        <th>Số điện thoại</th>
                        <th>Mã tình trạng học</th>
                        <th>Ngày tạo</th>
                        <th>Ngày sửa</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.studentId}</td>
                            <td>{student.studentName}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.placeOfBirth}</td>
                            <td>{student.gender}</td>
                            <td>{student.idcard}</td>
                            <td>{student.ethnic}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.statusId}</td>
                            <td>{student.createdAt}</td>
                            <td>{student.updatedAt}</td>
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
            </table></>
    );
}
export default Loadtudent;