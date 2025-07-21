import type {SkillType} from "../../types/SkillType.ts";

function SkillIcon({type, color}: SkillType) {
  return (
    <div className={`bg-[${color}] rounded-lg justify-items-center content-center w-[70px] h-[70px] `}>
      <img src={`/public/skillIcons/${type}.png`} />
    </div>
  );
}

export default SkillIcon;
