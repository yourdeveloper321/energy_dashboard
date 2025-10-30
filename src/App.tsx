import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DevicePage from "./pages/DevicePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ All app routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/device/:id" element={<DevicePage />} />
      </Routes>

      {/* ✅ Toast container stays outside routes but inside BrowserRouter */}
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
