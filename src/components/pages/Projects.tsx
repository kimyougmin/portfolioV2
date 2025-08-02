import ProjectCard from "../molecule/ProjectCard.tsx";

interface ProjectsProps {
  detailModalOpenHandler: (title: string) => void;
}
function Projects({detailModalOpenHandler}: ProjectsProps) {
  return (
    <div id={"projects"} className="grid grid-cols-4 grid-row-3 gap-4 pt-[4rem] h-auto max-md:pt-[3rem] max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 pb-[24rem]">
      <ProjectCard title={"돕당"} content={"각 분자의 전문 지식을 가진 전문가와 의뢰인을 매칭하여 오퍼를 통한 합리적인 비용으로 서비스를 이용할 수 있습니다."} image={"/projectImage/dopdang/dopdang1.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler} githubURL={"https://github.com/prgrms-web-devcourse-final-project/WEB3_4_ZIZON_FE"} deploymentURL={"https://www.dopdang.shop/"}/>
      <ProjectCard title={"RideOn"} content={"자전거 라이딩 모임을 연결하고 라이딩에 필요한 날씨, 도로 등의 정보를 제공하는 서비스입니다."} image={"/projectImage/rideon/rideon6.png"} tags={["Team", "Vue", "Node", "JS"]} detailModalOpenHandler={detailModalOpenHandler} githubURL={"https://github.com/kimyougmin/RideOn"} deploymentURL={"http://rideon.kro.kr/"}/>
      <ProjectCard title={"CoinAI"} content={"코인 API를 이용해 다수의 코인 시세 모니터링 및 AI를 활용한 단기적 가격 예측 서비스입니다."} image={"/coinai.png"} tags={["Team", "React", "Python", "TS"]} detailModalOpenHandler={detailModalOpenHandler} githubURL={"https://github.com/kimyougmin/CoinAi"} deploymentURL={"https://coin-ai-nu.vercel.app/"}/>
      <ProjectCard title={"RealTimeChat"} content={"WebSocket socket.io 기반 1:1 실시간 채팅 지원하는 서비스입니다."} image={"/realTimeChat.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler} githubURL={"https://github.com/kimyougmin/RealTimeChat"} deploymentURL={""}/>
      <ProjectCard title={"TextClassification API"} content={"욕설·비속어 필터링 및 4가지로 분류하는 API 서비스입니다."} image={"/textClassifier.png"} tags={["Team", "Next", "Spring", "TS"]} detailModalOpenHandler={detailModalOpenHandler} githubURL={"https://github.com/kimyougmin/TextClassifierApi"} deploymentURL={"https://text-classifier-front.vercel.app/"}/>
    </div>
  );
}

export default Projects;
