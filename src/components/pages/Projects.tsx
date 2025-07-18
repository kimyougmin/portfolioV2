import ProjectCard from "../molecule/ProjectCard.tsx";

function Projects() {
  return (
    <div id={"projects"} className="grid grid-cols-4 grid-row-3 gap-4 pt-[4rem] h-auto max-md:pt-[3rem] max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 pb-[24rem]">
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]}/>
    </div>
  );
}

export default Projects;
