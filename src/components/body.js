import LoginPage from "../containers/Login";
import StudentList from "./StudentList";
import Info from "./Info";
import Register from "../containers/Register";
import { Route, Routes } from "react-router-dom";
function Body() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/info" element={<Info />} />
                <Route path="/studentlist" element={<StudentList />} />
            </Routes>
        </main>
    )
}
export default Body;