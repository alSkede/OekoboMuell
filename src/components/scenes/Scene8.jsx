import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene8() {
  const scene = lessons.find(s => s.id === 8);
  return <GenericSceneLayout scene={scene} />;
}
