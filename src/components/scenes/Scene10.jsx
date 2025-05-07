import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene10() {
  const scene = lessons.find(s => s.id === 10);
  return <GenericSceneLayout scene={scene} />;
}
