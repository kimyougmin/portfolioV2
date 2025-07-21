import type { SkillType } from "../../types/SkillType.ts";
import SkillIcon from "../atoms/SkillIcon.tsx";
import React from "react";

interface SkillsDescriptionProps {
  skills: SkillType["type"][];
}

function SkillsDescription({ skills }: SkillsDescriptionProps) {
  const [selectedSkill, setSelectedSkill] = React.useState<SkillType["type"] | null>(null);

  const description: Record<SkillType["type"], string> = {
    "react": "React는 컴포넌트 기반 구조로 UI를 효율적으로 구성할 수 있어서 사용합니다. 특히, 상태 관리와 컴포넌트 재사용에 강점을 가지며, 실제 프로젝트에서 빠르게 기능을 확장하거나 유지보수할 때 유용했습니다.",
    "next": "Next.js는 SEO 최적화와 빠른 페이지 렌더링이 필요한 프로젝트에서 유리합니다. 서버 사이드 렌더링과 정적 페이지 생성을 지원해서, 퍼포먼스를 높이고 사용자 경험을 개선할 수 있어 자주 사용합니다.",
    "vue": "Vue는 빠르게 UI를 구성할 수 있는 가볍고 직관적인 프레임워크입니다. 템플릿 기반 문법이 간단하고, 소규모 프로젝트에서 빠른 개발이 필요할 때 효과적으로 활용했습니다.",
    "zustand": "상태 관리가 필요한 React 프로젝트에서 Redux보다 가볍고 간단하게 전역 상태를 다룰 수 있어서 선호합니다. 특히 구조가 단순한 프로젝트에서 학습 부담 없이 사용할 수 있는 것이 장점입니다.",
    "docker": "Docker는 개발 환경을 통일시키고, 배포 시에도 일관성을 유지할 수 있어 사용합니다. 팀 프로젝트나 클라우드 배포 시 환경 차이로 인한 오류를 방지할 수 있어 꼭 도입하는 편입니다.",
    "mysql": "MySQL은 관계형 데이터베이스를 사용하는 전통적인 구조의 백엔드 프로젝트에서 유용했습니다. 데이터 구조가 명확할 때 쿼리와 트랜잭션 처리가 안정적이고 효율적이기 때문에 자주 사용합니다.",
    "tanstack": "TanStack Query는 서버에서 가져온 데이터를 캐싱하고, 자동으로 리패칭하는 기능이 뛰어나서 사용합니다. 특히 사용자 경험을 해치지 않으면서 비동기 데이터를 안정적으로 다루기 위해 활용합니다.",
    "storybook": "Storybook은 컴포넌트를 독립적으로 개발하고 문서화할 수 있게 도와줘서, 협업 프로젝트에서 프론트엔드 작업 효율을 크게 높여줍니다. 디자이너나 백엔드 개발자와 컴포넌트 UI를 공유할 때도 매우 유용합니다.",
    "spring": "Spring은 자바 기반 백엔드 프레임워크로, 보안, 데이터베이스 연동, REST API 구축 등을 체계적으로 구성할 수 있어서 사용했습니다. 특히 엔터프라이즈급 애플리케이션 개발에 강력합니다.",
    "ts": "TypeScript는 코드 작성 시 타입 안정성을 높여주기 때문에 유지보수성과 생산성을 동시에 잡을 수 있었습니다. 특히 협업 시 코드의 의도를 명확하게 전달할 수 있어 즐겨 사용합니다.",
    "postgresql": "PostgreSQL은 MySQL보다 복잡한 쿼리나 JSON 처리에 유리해서 선택했습니다. 오픈소스이면서도 성능과 안정성이 뛰어나고, 대용량 데이터를 다루는 데 적합합니다.",
    "node": "Node.js는 자바스크립트 기반의 백엔드 환경을 구성할 수 있게 해주며, 프론트엔드와 동일한 언어로 전체 스택을 통일할 수 있어 생산성이 높습니다. 빠른 API 서버 구축 시 특히 유용하게 사용했습니다.",
    "mongo": "MongoDB는 NoSQL 기반으로 유연한 데이터 구조가 필요할 때 적합합니다. 프로젝트 초기 구조가 자주 바뀌는 경우나, 정형화되지 않은 데이터를 다룰 때 효과적이었습니다.",
    "nginx": "Nginx는 정적 파일을 서빙하거나 리버스 프록시, 로드 밸런싱 용도로 사용합니다. 배포 시 클라이언트와 서버를 효율적으로 연결하기 위한 웹 서버로 활용했습니다."
  };


  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 mb-6">
        {skills.map((item, index) => (
          <div key={`${item}-${index}`} onClick={() => setSelectedSkill(item)} className="cursor-pointer">
            <SkillIcon type={item} color={"#CDCDCD"} />
          </div>
        ))}
      </div>

      <div className="bg-[#2f2f2f] p-4 rounded-md text-white text-sm min-h-[40px]">
        {selectedSkill ? (
          <p>{description[selectedSkill]}</p>
        ) : (
          <p className="text-gray-400">아이콘을 클릭하면 기술 설명이 나타납니다.</p>
        )}
      </div>
    </div>
  );
}

export default SkillsDescription;
