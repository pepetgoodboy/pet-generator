import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Property from "./pages/Property";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job" element={<Job />} />
      <Route path="/property" element={<Property />} />
    </Routes>
  );
}
