import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login.page";
import SideBar from "./component/SideBar";
import Dashboard from "./pages/Dashboard.page";
import ProjectPage from "./pages/Project.page";
import StudentPage from "./pages/Student.page";
import TeacherPage from "./pages/Teacher.page";
import LibraryPage from "./pages/Library.page";
import MajorPage from "./pages/Major.page";
import { useEffect } from "react";
import PreviewPage from "./pages/Preview.page";
import Session from "./pages/Session.page";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const locate = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const invalid = ["/", "/view"];
    if (!invalid.includes(locate.pathname)) {
      if (!token) {
        navigate("/");
      }
    }
  }, [navigate, token]);

  return token ? children : null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/view" element={<PreviewPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <SideBar />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="major" element={<MajorPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="session" element={<Session />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="teacher" element={<TeacherPage />} />
          <Route path="library" element={<LibraryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
