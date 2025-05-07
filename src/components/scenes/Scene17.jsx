import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene17() {
  const scene = lessons.find(s => s.id === 17);
  return <GenericSceneLayout scene={scene} />;
}
