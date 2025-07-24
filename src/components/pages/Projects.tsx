import ProjectCard from "../molecule/ProjectCard.tsx";

interface ProjectsProps {
  detailModalOpenHandler: (title: string) => void;
}
function Projects({detailModalOpenHandler}: ProjectsProps) {
  return (
    <div id={"projects"} className="grid grid-cols-4 grid-row-3 gap-4 pt-[4rem] h-auto max-md:pt-[3rem] max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 pb-[24rem]">
      <ProjectCard title={"돕당"} content={"각 분자의 전문가를 의뢰인에게 매칭하는 서비스입니다."} image={"/public/projectImage/dopdang/dopdang1.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler}/>
      <ProjectCard title={"RideOn"} content={"자전거 라이딩 모임을 연결해주는 서비스입니다."} image={"/public/projectImage/rideon/rideon6.png"} tags={["Team", "Vue", "Node", "JS"]} detailModalOpenHandler={detailModalOpenHandler}/>
      <ProjectCard title={"CoinAI"} content={"다수의 코인 시세 모니터링 및 단기적 가격 예측 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "React", "Python", "TS"]} detailModalOpenHandler={detailModalOpenHandler}/>
      <ProjectCard title={"RealTimeChat"} content={"WebSocket 기반 1:1 실시간 채팅 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler}/>
      <ProjectCard title={"TextClassification API"} content={"욕설·비속어 필터링 및 4가지로 분류하는 API 서비스입니다."} image={"/public/coinai.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler}/>
    </div>
  );
}

export default Projects;
