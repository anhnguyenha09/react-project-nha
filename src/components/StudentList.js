import { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
    const API_URL = "http://localhost:3001/users";
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        try {
            const response = await axios.get(API_URL);
            setStudents(response.data);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "1.5rem" }}>Danh sách sinh viên Fit-up</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mã sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email sinh viên</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id || index}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.studentId}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;