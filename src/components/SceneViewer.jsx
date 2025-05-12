return (
  <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-800">
    <header className="p-4 text-center text-3xl font-bold bg-green-800 text-white shadow-md">
      {scene.title}
    </header>

    <main className="flex-grow grid grid-cols-2 gap-4 p-6">
      {/* Linke Seite: Bild / Video */}
      <div className="flex flex-col items-center justify-center bg-white shadow rounded p-4">
        <p className="text-xl font-semibold mb-4">Visual (Bild oder Video)</p>
        {/* Hier kommt später das TrudeTV-Video rein */}
        <div className="w-full h-[60vh] bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-500">[Video/Bild Platzhalter]</span>
        </div>
      </div>

      {/* Rechte Seite: Inhalt */}
      <div className="flex flex-col gap-4 bg-white shadow rounded p-6">
        <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
        <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
        <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
        <p className="italic">{scene.funfact}</p>
      </div>
    </main>

    <footer className="flex justify-between items-center p-4 bg-neutral-200">
      <button onClick={() => setSceneIndex(Math.max(sceneIndex - 1, 0))} disabled={sceneIndex === 0} className="px-4 py-2 bg-gray-300 rounded">⬅️ Zurück</button>

      <select value={sceneIndex} onChange={(e) => setSceneIndex(parseInt(e.target.value))} className="border px-3 py-2 rounded">
        {lessons.map((s, idx) => (
          <option key={s.id} value={idx}>{s.id}. {s.title}</option>
        ))}
      </select>

      <button onClick={() => setSceneIndex(Math.min(sceneIndex + 1, lessons.length - 1))} disabled={sceneIndex === lessons.length - 1} className="px-4 py-2 bg-gray-300 rounded">Weiter ➡️</button>
    </footer>
  </div>
);
