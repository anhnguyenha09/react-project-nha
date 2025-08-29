import { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
    const API_URL = "http://localhost:3001/students";
    const [students, setStudents] = useState([]);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    // Tách hàm fetch ra ngoài để tái sử dụng
    const fetchAPI = async () => {
        try {
            const response = await axios.get(API_URL);
            setStudents(response.data);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleAddMember = async () => {
        if (!fullName || !email) return alert("Bạn đã nhập thiếu thông tin");
        if (emailError) return alert("Email không đúng định dạng");

        await axios.post(API_URL, {
            name: fullName,
            email: email
        });

        await fetchAPI();

        setFullName("");
        setEmail("");
        setEmailError("");
        alert("Bạn đã thêm sinh viên thành công");
    };

    const handleDeleteMember = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchAPI();
    };

    // Kiểm tra định dạng email với regex
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            setEmailError("Email phải đúng định dạng (ví dụ: example@email.com)");
        } else {
            setEmailError("");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "1.5rem" }}>Danh sách sinh viên Fit-up</h1>

            {/* Form nhập */}
            <div style={{ marginBottom: 20, display: "flex", gap: 10, alignItems: "center", backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <input
                    type="text"
                    placeholder="Hãy nhập tên sinh viên"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px", flex: 1 }}
                />
                <input
                    type="email"
                    placeholder="Hãy nhập email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                    style={{ padding: "0.5rem", border: emailError ? "1px solid red" : "1px solid #ccc", borderRadius: "4px", flex: 1 }}
                />
                {emailError && <p style={{ color: "red", fontSize: "0.9rem", margin: "0 0 0.5rem" }}>{emailError}</p>}
                <button
                    onClick={handleAddMember}
                    style={{ padding: "0.75rem 1rem", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                    Thêm sinh viên
                </button>
            </div>

            {/* Danh sách sinh viên */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mã sinh viên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sửa</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.id}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.email}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <button style={{ padding: "0.5rem", backgroundColor: "#facc15", border: "none", borderRadius: "4px", cursor: "pointer" }}>Sửa</button>
                            </td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <button onClick={() => handleDeleteMember(student.id)} style={{ padding: "0.5rem", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;