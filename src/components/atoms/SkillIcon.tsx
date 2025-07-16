export interface SkillIconProps {
  type: "ts" | "react" | "next" | "vue" | "node" | "mysql" | "mongo" | "postgresql" | "nginx" | "jenkins" | "docker";
}
function SkillIcon({type}: SkillIconProps) {
  return (
    <div className="bg-[#070707] rounded-lg justify-items-center content-center w-[70px] h-[70px] ">
      <img src={`/public/skillIcons/${type}.png`} />
    </div>
  );
}

export default SkillIcon;
