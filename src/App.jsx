import SceneViewer from "./components/SceneViewer";

function App() {
  return <SceneViewer />;
}

export default App;

import Scene2 from "./components/scenes/Scene2";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <Scene2 />
    </div>
  );
}

export default App;

