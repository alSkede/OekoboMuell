import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene9() {
  const scene = lessons.find(s => s.id === 9);
  return <GenericSceneLayout scene={scene} />;
}
