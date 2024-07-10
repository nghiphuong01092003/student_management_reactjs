import { Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import LoadClassStudent, { classType } from "./Students/Class/LoadClassStudent";
import Loadtudent from "./Students/Student/LoadStudent";
import LoadStudyStatus from "./Students/StudyStatus/LoadStudyStatus";
import { toast } from "react-toastify";

const dataFake = [{
    value: 0,
    label: 'Quản lý lớp học'
}, {
    value: 1,
    label: 'Quản lý sinh viên'
}, {
    value: 2,
    label: 'Quản lý tình trạng học'
}
]
type dataType = {
    value: number,
    label: string
}
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
type studyStatusType = {
    statusId: string,
    statusName: string,
    note: string,
    createdAt: string,
    updatedAt: string
}
const ContentColumn1 = () => {
    const [data, setData] = useState<dataType[]>(dataFake);
    const [type, setType] = useState<number>(0)
    const [classStudentData, setClassStudentData] = useState<classType[]>([]);
    const [studentData, setStudentData] = useState<studentType[]>([]);
    const [studyStatusData, setStudyStatusData] = useState<studyStatusType[]>([]);

    useEffect(() => {
        if (type === 0) {
            fetchClassStudentData();
        } else if (type === 1) {
            fetchStudentData();
        } else if (type === 2) {
            fetchStudyStatusData();
        }
    }, [type]);

    const fetchClassStudentData = async () => {
        fetch("https://localhost:44312/api/ClassStudent/get-ClassStudent")
            .then(res => res.json())
            .then(data => {
                if (data?.status) {
                    setClassStudentData(data.classStudents)
                } else {
                    toast.error(data?.message);
                }
            });
    };
    const fetchStudentData = async () => {
        fetch("https://localhost:44312/api/Student/get-Student")
            .then(res => res.json())
            .then(data => {
                if (data?.status) {
                    setStudentData(data.students)
                } else {
                    toast.error(data?.message);
                }
            });
    };
    const fetchStudyStatusData = async () => {
        fetch("https://localhost:44312/api/StudyStatus/get-StudyStatus")
            .then(res => res.json())
            .then(data => {
                if (data?.status) {
                    setStudyStatusData(data.studyStatuses)
                } else {
                    toast.error(data?.message);
                }
            });
    };
    const handleClick = (item: number) => {
        setType(item);
    }

    const RenderTable = () => {
        if (type === 0) {
            return <LoadClassStudent data={classStudentData} />
        } else if (type === 1) {
            return <Loadtudent data={studentData} />
        } else {
            return <LoadStudyStatus data={studyStatusData} />
        }
    }

    return (
        <React.Fragment>
            <div id="content_column1">
                <ul className="list">
                    {
                        data.length > 0 ?
                            data?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <li>
                                        <Link href="#" onClick={() => handleClick(item?.value)}>
                                            {item?.label}
                                        </Link>
                                    </li>
                                </React.Fragment>
                            ))
                            : null
                    }
                </ul>
            </div>
            <div id="content_column2">{RenderTable()}</div>
        </React.Fragment>
    )
};
export default ContentColumn1;