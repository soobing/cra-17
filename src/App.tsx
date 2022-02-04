import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import FileUpload from "./page/FileUpload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="upload" element={<FileUpload />} />
    </Routes>
  );
}

export default App;
