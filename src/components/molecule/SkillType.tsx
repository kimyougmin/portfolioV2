import SkillIcon, {type SkillIconProps} from "../atoms/SkillIcon.tsx";

interface SkillTypeProps {
  type: "FrontEnd" | "BackEnd & DB" | "DevOps";
}

export default function SkillType({type}: SkillTypeProps) {
  const front: SkillIconProps["type"][] = ["ts", "react", "next", "vue"];
  const backend: SkillIconProps["type"][] = ["node", "mysql", "mongo", "postgresql"];
  const devops: SkillIconProps["type"][] = ["nginx", "jenkins", "docker"];

  const skillMap: Record<SkillTypeProps["type"], SkillIconProps["type"][]> = {
    "FrontEnd": front,
    "BackEnd & DB": backend,
    "DevOps": devops
  };

  return (
    <div>
      <p className="text-2xl text-black9 text-left font-semibold mb-4">{type}</p>
      <div className="flex gap-4 flex-wrap">
        {skillMap[type].map((item) => (
          <SkillIcon key={item} type={item} />
        ))}
      </div>
    </div>
  );
}
