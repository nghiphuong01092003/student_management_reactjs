import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

type studyStatusType = {
    statusId: string,
    statusName: string,
    note: string,
    createdAt: string,
    updatedAt: string
}
interface StudyStatusType {
    data: studyStatusType[];
}
const LoadStudyStatus: React.FC<StudyStatusType> = ({ data }) => {
    return (
        <><Button variant="contained" color="primary">Thêm tình trạng học mới</Button>
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
                            <td>{studyStatus.note}</td>
                            <td>{studyStatus.createdAt}</td>
                            <td>{studyStatus.updatedAt}</td>
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
export default LoadStudyStatus;