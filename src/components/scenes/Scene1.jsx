import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene1() {
  const scene = lessons.find(s => s.id === 1);
  return <GenericSceneLayout scene={scene} />;
}
