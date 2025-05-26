import SceneViewer from "./components/SceneViewer";
import { QuizProvider } from "./components/QuizContext";
import CertificatePage from "./components/CertificatePage";
<Route path="/zertifikat" element={<CertificatePage />} />

function App() {
  return (
    <QuizProvider>
      <SceneViewer />
    </QuizProvider>
  );
}

export default App;

