import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.page";
import SideBar from "./component/SideBar";
import Dashboard from "./pages/Dashboard.page";
import ProjectPage from "./pages/Project.page";
import StudentPage from "./pages/Student.page";
import TeacherPage from "./pages/Teacher.page";
import LibraryPage from "./pages/Library.page";
import MajorPage from "./pages/Major.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<SideBar />}>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/home/major" element={<MajorPage />} />
            <Route path="/home/project" element={<ProjectPage />} />
            <Route path="/home/student" element={<StudentPage />} />
            <Route path="/home/teacher" element={<TeacherPage />} />
            <Route path="/home/library" element={<LibraryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
