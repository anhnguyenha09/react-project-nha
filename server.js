const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Đọc dữ liệu từ file
const readData = () => {
    try {
        const data = fs.readFileSync('./data.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return { students: [], account: [] };
    }
};

// Ghi dữ liệu vào file
const writeData = (data) => {
    try {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
    }
};

// GET /students
app.get('/students', (req, res) => {
    const data = readData();
    res.json(data.students);
});

// POST /students
app.post('/students', (req, res) => {
    const data = readData();
    const newStudent = {
        ...req.body,
        id: Date.now().toString() // Tạo ID đơn giản
    };
    data.students.push(newStudent);
    writeData(data);
    res.json(newStudent);
});

// DELETE /students/:id
app.delete('/students/:id', (req, res) => {
    const data = readData();
    const index = data.students.findIndex(student => student.id === req.params.id);
    if (index !== -1) {
        const deleted = data.students.splice(index, 1);
        writeData(data);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

// GET /account
app.get('/account', (req, res) => {
    const data = readData();
    res.json(data.account);
});

// POST /account
app.post('/account', (req, res) => {
    const data = readData();
    const newAccount = {
        ...req.body,
        id: Date.now().toString()
    };
    data.account.push(newAccount);
    writeData(data);
    res.json(newAccount);
});

// Trang chủ
app.get('/', (req, res) => {
    res.json({
        message: "API Server đang hoạt động!",
        endpoints: {
            students: {
                GET: "/students - Lấy danh sách sinh viên",
                POST: "/students - Thêm sinh viên mới", 
                DELETE: "/students/:id - Xóa sinh viên"
            },
            account: {
                GET: "/account - Lấy danh sách tài khoản",
                POST: "/account - Thêm tài khoản mới"
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
    console.log(`Kiểm tra API tại:`);
    console.log(`- http://localhost:${PORT}/students`);
    console.log(`- http://localhost:${PORT}/account`);
});