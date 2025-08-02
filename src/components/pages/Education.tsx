import EducationCard from "../molecule/EducationCard.tsx";

function Education() {
  return (
    <div id={"education"} className="flex flex-wrap gap-4 w-full sm:pb-[50rem] ">
      <EducationCard
        title="데브코스: 클라우드기반 프론트엔드 엔지니어링"
        description="프로그래머스 (주)그렙의 부트캠프 교육과정 수료"
        period="2024.11~2025.04"
        content={[
          "주 50시간 9to6로 교육과 교육생들과 팀 프로젝트 다양한 경험",
          "실무에 가까운 클라우드 및 협업 환경 기반 프로젝트",
          "React, TypeScript, AWS 등을 집중적으로 학습"
        ]}
      />
      <EducationCard
        title="동서대학교"
        description="소프트웨어학과 수료"
        period="2019.03~2025.02"
        content={[
          "전반적인 CS 지식과 개발 방법론 등의 이론적인 부분을 학습하고 실습 진행",
          "실습 기반 프로젝트로 실무적인 코드 작성 학습",
          "다양한 언어와 프레임워크를 학습하여 풀스택 영역의 개발"
        ]}
      />
    </div>
  );
}

export default Education;
