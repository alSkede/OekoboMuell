import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene7() {
  const scene = lessons.find(s => s.id === 7);
  return <GenericSceneLayout scene={scene} />;
}
