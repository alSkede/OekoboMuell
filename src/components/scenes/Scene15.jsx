import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene15() {
  const scene = lessons.find(s => s.id === 15);
  return <GenericSceneLayout scene={scene} />;
}
