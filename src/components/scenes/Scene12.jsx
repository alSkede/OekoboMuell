import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene12() {
  const scene = lessons.find(s => s.id === 12);
  return <GenericSceneLayout scene={scene} />;
}
