import lessons from "../../data/lessons";
import GenericSceneLayout from "../GenericSceneLayout";

export default function Scene14() {
  const scene = lessons.find(s => s.id === 14);
  return <GenericSceneLayout scene={scene} />;
}
