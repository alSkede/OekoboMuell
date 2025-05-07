import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene5() {
  const scene = lessons.find(s => s.id === 5);
  return <GenericSceneLayout scene={scene} />;
}
