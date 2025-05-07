import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene4() {
  const scene = lessons.find(s => s.id === 4);
  return <GenericSceneLayout scene={scene} />;
}
