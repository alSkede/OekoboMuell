import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene11() {
  const scene = lessons.find(s => s.id === 11);
  return <GenericSceneLayout scene={scene} />;
}
