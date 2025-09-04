import { useEffect, useState } from "react";
import axios from "axios";
function Info() {
    const API_URL = "http://localhost:3000/students";
    const [students, setStudents] = useState([]);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

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

    const handleAddMember = async () => {
        if (!fullName || !email) return alert("Bạn đã nhập thiếu thông tin");

        await axios.post(API_URL, {
            name: fullName,
            email: email
        });

        await fetchAPI();

        setFullName("");
        setEmail("");
        alert("Bạn đã thêm sinh viên thành công");
    };
    const handleDeleteMember = async (id) => {
        const response = await axios.delete(`${API_URL}/${id}`)
        fetchAPI();
    }

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "1.5rem" }}>Danh sách sinh viên Fit Up</h1>

            {/* form  */}
            <div style={{ marginBottom: 20, display: "flex", gap: 5 }}>
                <input
                    type="text"
                    placeholder="Hãy nhập tên sinh viên"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Hãy nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleAddMember}>Thêm sinh viên</button>
            </div>

            {/* danh sách sinh viên */}

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mã sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}></th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id || index}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.studentId}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.email}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}><button>Sửa</button></td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}><button onClick={() => handleDeleteMember(student.studentId)}>Xóa</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Info;