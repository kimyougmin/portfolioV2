import TitleWhite from "../atoms/TitleWhite.tsx";
import InterViewCard from "../atoms/InterViewCard.tsx";
import SkillType from "../molecule/SkillType.tsx";

function AboutMe() {
  return (
    <div id={"about"} className="grid gap-16 pb-[28rem]">
      <div>
        <TitleWhite text={"Certificate"}/>
        <p className="bg-[#FEFCEE] text-black2 p-1 px-4 font-bold rounded-lg w-fit">정보처리기사</p>
      </div>
      <div>
        <TitleWhite text={"Interview"}/>
        <InterViewCard title={"Q 어떤 개발자가 되고 싶으신가요?"} description={"사용자에게 신뢰를 주는 개발자가 되고 싶습니다. 단순히 기능을 구현하는 데 그치지 않고, 직관적인 UI와 매끄러운 사용자 경험을 통해 서비스에 대한 신뢰를 쌓는 것이 진정한 프론트엔드 개발자의 역할이라고 생각합니다. 프로젝트를 진행할 때 항상 “이 기능이 사용자에게 혼란을 줄 여지가 없는가?”를 기준으로 설계와 구현을 합니다."}/>
      </div>
      <div>
        <TitleWhite text={"Skill"}/>
        <div className="flex gap-16 flex-wrap">
          <SkillType type={"FrontEnd"} color={"#070707"}/>
          <SkillType type={"BackEnd & DB"} color={"#070707"}/>
          <SkillType type={"DevOps"} color={"#070707"}/>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
