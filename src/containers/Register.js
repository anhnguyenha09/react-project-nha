import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Registration() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');

    // Hàm kiểm tra mật khẩu mạnh
    const validateStrongPassword = value =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
        'Mật khẩu phải ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt';

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:3001/account', {
                studentId: data.maSinhVien,
                name: data.hoVaTen,
                email: data.email,
                password: data.password
            });
            alert('Đăng ký thành công!');
        } catch (err) {
            console.error('Lỗi khi lưu dữ liệu:', err);
            alert('Lỗi khi lưu dữ liệu!');
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.box} onSubmit={handleSubmit(onSubmit)}>
                <h2 style={styles.title}>Đăng Ký</h2>

                <label style={styles.label}>Mã sinh viên</label>
                <input
                    {...register('maSinhVien', { required: 'Mã sinh viên là bắt buộc' })}
                    placeholder="Nhập mã sinh viên..."
                    style={styles.input}
                />
                {errors.maSinhVien && <p style={styles.error}>{errors.maSinhVien.message}</p>}

                <label style={styles.label}>Họ và tên</label>
                <input
                    {...register('hoVaTen', { required: 'Họ và tên là bắt buộc' })}
                    placeholder="Nhập họ và tên..."
                    style={styles.input}
                />
                {errors.hoVaTen && <p style={styles.error}>{errors.hoVaTen.message}</p>}

                <label style={styles.label}>Email</label>
                <input
                    {...register('email', {
                        required: 'Email là bắt buộc',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Email không đúng định dạng'
                        }
                    })}
                    placeholder="Nhập email..."
                    style={styles.input}
                />
                {errors.email && <p style={styles.error}>{errors.email.message}</p>}

                <label style={styles.label}>Mật khẩu</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Mật khẩu là bắt buộc',
                        validate: validateStrongPassword
                    })}
                    placeholder="Nhập mật khẩu..."
                    style={styles.input}
                />
                {errors.password && <p style={styles.error}>{errors.password.message}</p>}

                <label style={styles.label}>Xác nhận mật khẩu</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Xác nhận mật khẩu là bắt buộc',
                        validate: value => value === password || 'Mật khẩu không khớp'
                    })}
                    placeholder="Xác nhận mật khẩu..."
                    style={styles.input}
                />
                {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword.message}</p>}

                <button type="submit" style={styles.button}>
                    Đăng Ký
                </button>
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
        width: "300px",
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
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px",
    },
    error: {
        color: "red",
        fontSize: "12px",
        margin: "0 0 10px 0",
    },
    button: {
        padding: "10px",
        background: "#0d6efd",
        color: "white",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Registration;