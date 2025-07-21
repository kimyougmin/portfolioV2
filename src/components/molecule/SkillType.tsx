import SkillIcon from "../atoms/SkillIcon.tsx";
import type {SkillType} from "../../types/SkillType.ts";

interface SkillTypeProps {
  type: "FrontEnd" | "BackEnd & DB" | "DevOps";
  color: "#070707" | "#CDCDCD";
}
export default function SkillType({type, color}: SkillTypeProps) {
  const front: SkillType["type"][] = ["ts", "react", "next", "vue"];
  const backend: SkillType["type"][] = ["node", "mysql", "mongo", "postgresql"];
  const devops: SkillType["type"][] = ["nginx", "jenkins", "docker"];

  const skillMap: Record<SkillTypeProps["type"], SkillType["type"][]> = {
    "FrontEnd": front,
    "BackEnd & DB": backend,
    "DevOps": devops
  };

  return (
    <div>
      <p className="text-2xl text-black9 text-left font-semibold mb-4">{type}</p>
      <div className="flex gap-4 flex-wrap">
        {skillMap[type].map((item) => (
          <SkillIcon key={item} color={color} type={item} />
        ))}
      </div>
    </div>
  );
}
