import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene18() {
  const scene = lessons.find(s => s.id === 18);
  return <GenericSceneLayout scene={scene} />;
}
