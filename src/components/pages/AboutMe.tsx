import TitleWhite from "../atoms/TitleWhite.tsx";
import InterViewCard from "../atoms/InterViewCard.tsx";
import SkillType from "../molecule/SkillType.tsx";

function AboutMe() {
  return (
    <div id={"about"} className="grid gap-16 pb-[28rem] mt-5">
      <div>
        <TitleWhite text={"Certificate"}/>
        <p className="bg-[#FEFCEE] text-black2 p-1 px-4 font-bold rounded-lg w-fit">정보처리기사</p>
      </div>
      <div>
        <TitleWhite text={"Interview"}/>
        <InterViewCard title={"Q 어떤 개발자가 되고 싶으신가요?"} description={"사용자에게 신뢰를 주는 개발자가 되고 싶습니다. 단순히 기능을 구현하는 데 그치지 않고, 직관적인 UI와 매끄러운 사용자 경험을 통해 서비스에 대한 신뢰를 쌓는 것이 진정한 프론트엔드 개발자의 역할이라고 생각합니다. 프로젝트를 진행할 때 항상 “이 기능이 사용자에게 혼란을 줄 여지가 없는가?”를 기준으로 설계와 구현을 합니다."}/>
        <InterViewCard title={"Q 협업 과정에서 중요하게 생각하는 점은 무엇인가요?"} description={"프론트엔드 개발은 혼자서 완성할 수 있는 일이 아니라고 생각합니다. 디자이너, 백엔드 개발자, 기획자 등 다양한 직군과의 협업을 통해 사용자에게 도달하는 최종 결과물이 나오기 때문입니다. 그래서 저는 항상 “어떻게 하면 상대방이 더 쉽게 이해할 수 있을까?”를 고민하며 문서화나 커뮤니케이션에 신경 씁니다. 디자인 시스템을 구축할 때는 디자이너와 컴포넌트 구조를 사전에 충분히 조율하고, 백엔드와는 API 명세를 Swagger나 Notion으로 공유하며 불필요한 커뮤니케이션을 줄였습니다. 이런 과정을 통해 팀 전체의 생산성을 높이는 데 기여했다고 생각합니다."}/>
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
