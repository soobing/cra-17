import { Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./page/Home";
import Upload from "./page/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="upload" element={<Upload />} />
    </Routes>
  );
}

export default App;
