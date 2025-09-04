import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/account");
      const account = res.data.find(
        (acc) => acc.userName === email && acc.password === password
      );

      if (account) {
        alert("Đăng nhập thành công!");
        navigate("/studentlist");
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối server!");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.box} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Đăng nhập</h2>

        <label style={styles.label}>Email</label>
        <input
          type="text"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Mật khẩu</label>
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Đăng nhập
        </button>

        <div style={styles.linkContainer}>
          <p style={styles.linkText}>Chưa có tài khoản? </p>
          <Link to="/" style={styles.link}>Đăng ký ngay</Link>
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
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
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

export default LoginPage;