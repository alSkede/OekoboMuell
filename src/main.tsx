import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import SceneViewer from "./components/SceneViewer";
import CertificatePage from "./components/CertificatePage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/scenes" element={<SceneViewer />} />
        <Route path="/zertifikat" element={<CertificatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
