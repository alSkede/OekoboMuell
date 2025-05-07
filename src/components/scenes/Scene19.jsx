import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene19() {
  const scene = lessons.find(s => s.id === 19);
  return <GenericSceneLayout scene={scene} />;
}
