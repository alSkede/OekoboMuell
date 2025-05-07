import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene16() {
  const scene = lessons.find(s => s.id === 16);
  return <GenericSceneLayout scene={scene} />;
}
