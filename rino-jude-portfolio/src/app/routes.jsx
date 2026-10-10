import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { ProjectDetail } from "../pages/ProjectDetail.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
