import LoginPage from "../containers/Login";
import RegisterPage from "../containers/Register";
import StudentList from "./StudentList";
import Info from "./Info";
import { Route, Routes } from "react-router-dom";

function Body() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/info" element={<Info />} />
                <Route path="/studentlist" element={<StudentList />} />
            </Routes>
        </main>
    )
}
export default Body;