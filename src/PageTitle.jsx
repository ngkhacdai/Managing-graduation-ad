import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // Define titles based on routes
    const titleMap = {
      "/": "Login",
      "/view": "Preview",
      "/home": "Dashboard",
      "/home/major": "Majors",
      "/home/project": "Projects",
      "/home/session": "Sessions",
      "/home/student": "Students",
      "/home/teacher": "Teachers",
      "/home/library": "Library",
    };

    // Match dynamic paths like /home/session/detail/:id
    if (pathname.startsWith("/home/session/detail")) {
      document.title = "Session Details";
    } else {
      // Set document title based on the path or fallback to a default
      document.title = titleMap[pathname] || "My App";
    }
  }, [location]);

  return null;
}

export default PageTitle;
