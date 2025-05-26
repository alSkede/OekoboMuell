const SceneComponents = new Proxy({}, {
  get: () => () => null  // leere Fallback-Komponente
});

const SceneComponent = () => (
  <div>
    <h2 className="text-xl font-semibold">Szene {scene.id}</h2>
    <p>{scene.knowledge}</p>
    <p className="mt-2">{scene.action}</p>
    <SceneQuiz scene={scene} />
    <p className="mt-4 text-sm italic">{scene.funfact}</p>
  </div>
);
