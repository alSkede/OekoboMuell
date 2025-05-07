import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene2() {
  const scene = lessons.find(s => s.id === 2);
  return <GenericSceneLayout scene={scene} />;
}
