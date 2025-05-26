import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./components/QuizContext";
import StartPage from "./components/StartPage";
import SceneViewer from "./components/SceneViewer";
import CertificatePage from "./components/CertificatePage";

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/szenen" element={<SceneViewer />} />
          <Route path="/zertifikat" element={<CertificatePage />} />
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
