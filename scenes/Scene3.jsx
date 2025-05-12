import lessons from "../../data/lessons";

export default function Scene3() {
  const scene = lessons[2]; // Scene 3 = Index 2
  return (
    <div className="space-y-4">
      <p><strong>🗯️ Trude sagt:</strong> {scene.trudeSpeech}</p>
      <p><strong>📚 Wissen:</strong> {scene.knowledge}</p>
      <p><strong>✋ Mitmachaktion:</strong> {scene.action}</p>
      <p className="italic">{scene.funfact}</p>
    </div>
  );
}
