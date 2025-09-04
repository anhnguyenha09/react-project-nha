import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Registration() {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.studentId) newErrors.studentId = "Mã sinh viên là bắt buộc";
        if (!formData.name) newErrors.name = "Họ và tên là bắt buộc";
        if (!formData.email) {
            newErrors.email = "Email là bắt buộc";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Email không đúng định dạng";
        }
        if (!formData.password) newErrors.password = "Mật khẩu là bắt buộc";
        if (formData.password.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Xác nhận mật khẩu là bắt buộc";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu không khớp";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log("Bắt đầu đăng ký...");

        try {
            // Dữ liệu để thêm vào students
            const studentData = {
                studentId: formData.studentId,
                name: formData.name,
                email: formData.email,
                password: formData.password
            };

            // Dữ liệu để thêm vào account
            const accountData = {
                userName: formData.email,
                password: formData.password
            };

            console.log("Dữ liệu sinh viên:", studentData);
            console.log("Dữ liệu account:", accountData);

            // QUAN TRỌNG: Đảm bảo URL chính xác
            console.log("Đang POST đến: http://localhost:3000/students");
            const studentResponse = await axios.post("http://localhost:3000/students", studentData);
            console.log("Kết quả thêm student:", studentResponse.data);
            
            console.log("Đang POST đến: http://localhost:3000/account");
            const accountResponse = await axios.post("http://localhost:3000/account", accountData);
            console.log("Kết quả thêm account:", accountResponse.data);

            alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
            
            // Reset form
            setFormData({
                studentId: "",
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            setErrors({});
            
            console.log("Đang chuyển hướng đến /login...");
            navigate("/login");

        } catch (error) {
            console.error("Chi tiết lỗi:", error);
            console.error("Response data:", error.response?.data);
            console.error("Response status:", error.response?.status);
            console.error("Request URL:", error.config?.url);
            alert("Có lỗi xảy ra khi đăng ký! Kiểm tra console để biết chi tiết.");
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.box} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Đăng Ký</h2>

                <label style={styles.label}>Mã sinh viên</label>
                <input
                    type="text"
                    name="studentId"
                    placeholder="Nhập mã sinh viên..."
                    value={formData.studentId}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.studentId && <p style={styles.error}>{errors.studentId}</p>}

                <label style={styles.label}>Họ và tên</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nhập họ và tên..."
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}

                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Nhập email..."
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.email && <p style={styles.error}>{errors.email}</p>}

                <label style={styles.label}>Mật khẩu</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu..."
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.password && <p style={styles.error}>{errors.password}</p>}

                <label style={styles.label}>Xác nhận mật khẩu</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Xác nhận mật khẩu..."
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

                <button type="submit" style={styles.button}>
                    Đăng Ký
                </button>

                <div style={styles.linkContainer}>
                    <p style={styles.linkText}>Đã có tài khoản? </p>
                    <Link to="/login" style={styles.link}>Đăng nhập ngay</Link>
                </div>
            </form>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(120deg, #0d6efd, #6c63ff)",
        margin: 0,
        fontFamily: "Arial, sans-serif",
    },
    box: {
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "350px",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    label: {
        fontSize: "14px",
        marginBottom: "5px",
        color: "#555",
    },
    input: {
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
    },
    error: {
        color: "red",
        fontSize: "12px",
        margin: "0 0 15px 0",
    },
    button: {
        padding: "12px",
        background: "#0d6efd",
        color: "white",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "15px",
        transition: "background-color 0.3s ease",
    },
    linkContainer: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
    },
    linkText: {
        margin: 0,
        fontSize: "14px",
        color: "#666",
    },
    link: {
        color: "#0d6efd",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: "500",
    }
};

export default Registration;