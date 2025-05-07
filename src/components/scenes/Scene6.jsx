import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene6() {
  const scene = lessons.find(s => s.id === 6);
  return <GenericSceneLayout scene={scene} />;
}
