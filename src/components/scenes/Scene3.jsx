import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene3() {
  const scene = lessons.find(s => s.id === 3);
  return <GenericSceneLayout scene={scene} />;
}
