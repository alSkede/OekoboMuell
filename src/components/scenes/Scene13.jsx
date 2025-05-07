import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene13() {
  const scene = lessons.find(s => s.id === 13);
  return <GenericSceneLayout scene={scene} />;
}
