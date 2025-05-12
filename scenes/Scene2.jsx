import lessons from "../../data/lessons";

export default function Scene2() {
  const scene = lessons[1]; // Scene 2 = Index 1
  return (
    <div className="space-y-4">
      <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
      <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
      <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
      <p className="italic">{scene.funfact}</p>
    </div>
  );
}
