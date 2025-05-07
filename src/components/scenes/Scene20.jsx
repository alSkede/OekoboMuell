import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene20() {
  const scene = lessons.find(s => s.id === 20);
  return <GenericSceneLayout scene={scene} />;
}
