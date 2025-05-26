import SceneViewer from "./components/SceneViewer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./components/QuizContext";
import CertificatePage from "./components/CertificatePage";
<Route path="/zertifikat" element={<CertificatePage />} />

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<SceneViewer />} />
          <Route path="/zertifikat" element={<CertificatePage />} />
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;

