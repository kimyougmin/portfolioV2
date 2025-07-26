import type {SkillType} from "./SkillType.ts";
import type {DetailCardProps} from "../components/molecule/DetailCard.tsx";
import type {ProjectTagProps} from "../components/atoms/ProjectTag.tsx";

export interface DetailProjectType {
  keyColor: "#5D99FF" | "#DC3644" | "#FFC95D" | "#9B5DFF" | "#5DFF83";
  title: string;
  subtitle: string;
  period: string;
  personnel: string;
  role: string;
  projectTag: ProjectTagProps["tags"];
  description: string;
  keyFeatures: string[];
  useSkills: SkillType["type"][];
  projectContribution: DetailCardProps[];
  troubleshooting: DetailCardProps[];
  projectImages: string[];
}
export const dopDang: DetailProjectType = {
  keyColor: "#5D99FF",
  title: "돕당(dopdang)",
  subtitle: "전문가 매칭 플랫폼",
  period: "2025.03~2025.04",
  personnel: "8인(프론트엔드 3명, 백엔드 5명)",
  role: "PO역할 수행 및 프론트엔드 개발",
  projectTag: ["Team", "Next", "Spring", "TS"],
  description: "돕당(DOPDANG)은 이사, 청소, 과외, 수리 등 다양한 서비스를 원하는 사람과 전문가를 연결해주는 의뢰인 • 전문가 매칭 플랫폼입니다. 사용자는 원하는 서비스를 검색하고, 전문가와 직접 상담하여 맞춤형 서비스를 받을 수 있습니다.",
  keyFeatures: ["✅ 전문가 프로필 등록 및 의뢰인 요구 사항 등록", "✅ 오퍼 제안을 통한 가격 제의 기능", "✅ 실시간 채팅을 통한 2차 가격 협의 의뢰인의 의뢰 시작 기능", "✅ 진행 중인 오퍼의 진행 중, 대금 지급, 지급 완료, 완료 로드맵 제공 "],
  useSkills: ["next", "ts", "spring", "tanstack", "storybook", "zustand", "mysql"],
  projectContribution: [
    {
      title:"프로젝트 구조 설계 및 아토믹 디자인 적용",
      description: ["컴포넌트 재사용성과 유지 보수성을 높이기 위해 아토믹 디자인 패턴을 도입",
        "atoms, molecules, organisms, pages로 디렉터리를 나누고, 기능 단위로 UI 컴포넌트를 분리해 의도 명확한 UI 설계를 실현"]
    }, {
      title:"미들웨어를 통한 SSR 페이지 접근 제어 및 역할 분리",
      description: ["Next.js의 미들웨어 기능을 활용해 SSR 구조로 관리자 페이지 등 민감한 페이지 접근 제어",
        "사용자 권한에 따라 페이지 접근을 제한하고, 인증 정보를 사전에 검사하여 보안성과 UX 향상을 모두 달성"]
    }, {
      title:"배포 자동화 및 테스트 대응",
      description: ["CI/CD 파이프라인은 백엔드 팀장과 협업하여 구축하였으며, Vercel을 통한 자동 배포 환경을 설정",
        "SonarQube를 도입하여 정적 코드 분석을 통한 테스트와 구글 Lighthouse를 이용 추가적인 성능 모니터링"]
    }, {
      title:"협업 및 Git 관리",
      description: ["Git Flow 전략을 기반으로 브랜치를 관리하고, PR 리뷰 및 코드 리뷰 문화를 정착",
        "팀원들과의 원활한 커뮤니케이션을 위해 Notion 기반 위클리 스프린트 관리 및 회고 기록을 작성"]
    }],
  troubleshooting: [
    {
      title:"SSR 페이지에서 사용자 인증 상태가 일치하지 않는 문제",
      description: ["[문제 상황]: 로그인 후 특정 SSR 페이지로 진입했을 때, 클라이언트 측에서는 로그인 상태로 보이지만, 서버 측 렌더링 시에는 로그인 정보가 반영되지 않는 이슈 발생",
      "[해결 과정]: getServerSideProps 내부에서 req.headers.cookie를 직접 파싱해 JWT를 추출 사용자 정보는 서버에서 직접 호출하고, 클라이언트에선 Hydration 또한 쿠키 접근 권한 HttpOnly, Secure, SameSite 속성 설정을 점검해 서버-클라이언트 간 불일치 해소",
      "[회고]: SSR 환경에서도 사용자 인증 정보가 정확하게 반영되어 안정적인 페이지 접근이 가능해짐"]
    }, {
      title:"AWS S3 이미지 업로드 최적화 문제",
      description: ["[문제 상황]: 사용자 프로필 이미지와 게시물 썸네일에서 저해상도, 느린 로딩 속도, 웹 성능 저하 문제가 발생했습니다. 모바일 환경에서 LCP(Largest Contentful Paint) 지표가 낮게 나오는 현상이 있었고, 이미지 비율이 깨지는 문제도 종종 발생",
      "[해결 과정]: AWS S3를 활용한 이미지 업로드 서비스 구축 위해 백엔드 API와 연동하고 업로드 시점에서 낭비되는 자원을 아끼기 위해 압축과 가벼운 webP로 확장자 변경 -> URL 특정 -> 이미지 업로드 3단계로 함수를 나누어 이미지 업로드 함수 제작",
      "[결과]: S3 업로드로 외부 의존도를 줄이고 이미지 리사이징 자동화까지 가능해져 관리 편의성 확보"]
    }],
  projectImages: ["/public/projectImage/dopdang/dopdang1.png","/public/projectImage/dopdang/dopdang2.png","/public/projectImage/dopdang/dopdang3.png","/public/projectImage/dopdang/dopdang4.png", "/public/projectImage/dopdang/dopdang5.png"]
}

export const rideOn: DetailProjectType = {
  keyColor: "#DC3644",
  title: "RideOn",
  subtitle: "자전거 라이딩 모임 플랫폼",
  period: "2025.02~진행 중",
  personnel: "5인(프론트엔드 5명)",
  role: "프론트엔드 팀원",
  projectTag: ["Team", "Vue", "Node", "JS"],
  description:
    "RideOn은 자전거를 즐기는 사용자들이 자유롭게 라이딩 모임을 생성하고, 참여하며, 위치 기반으로 실시간 소통이 가능한 라이딩 커뮤니티 플랫폼입니다. 사용자는 지역 기반 모임 검색, 장애물 신고, 그룹 채팅 등의 기능을 통해 안전하고 즐거운 라이딩 문화를 형성할 수 있습니다.",
  keyFeatures: [
    "✅ 지도 기반 라이딩 모임 생성 및 참여",
    "✅ 실시간 그룹 채팅 및 채팅 내 이미지 공유 기능",
    "✅ 지도 상 장애물(공사/낙엽 등) 신고 및 공유 기능",
    "✅ 자전거 대여소 위치 조회 및 대여 가능 여부 확인"
  ],
  useSkills: ["vue", "node", "mysql", "pinia", "jenkins", "nginx"],
  projectContribution: [
    {
      title: "장애물 신고 기능 및 지도 연동",
      description: [
        "카카오 맵 API와 연동해 사용자가 위치 기반으로 도로 장애물(공사, 낙엽 등)을 신고할 수 있도록 기능 개발",
        "신고된 장애물 데이터를 서버에 저장하고, 다른 사용자에게 실시간으로 지도에 표시"
      ]
    },
    {
      title: "지도 기반 자전거 대여소 조회 기능 개발",
      description: [
        "공공데이터 API를 활용하여 실시간 자전거 대여소 위치, 자전거 보유 현황 조회 기능 개발",
        "대여소 마커 클릭 시 정보 표시, 필터링 및 검색 기능 추가"
      ]
    }
  ],
  troubleshooting: [
    {
      title: "수동 배포의 문제점",
      description: [
        "[문제 상황]: 프로젝트를 운영하면서 기능 추가나 버그 수정 이후 매번 수동으로 빌드하고 서버에 업로드하는 과정은 시간이 많이 소요되고 오류 발생 가능성도 높았습니다. 또한, 배포 전 코드의 안정성을 보장할 수 있는 테스트 환경이 부재한 상황이었습니다.",
        "[해결 과정]: Jenkins 기반의 CI/CD 파이프라인을 구축해 Vite로 빌드된 Vue 프로젝트를 자동으로 배포하도록 설정했습니다. 배포된 정적 파일은 Nginx 서버를 통해 서비스되며, 코드 품질 검증을 위해 SonarQube를 도입했고, 유닛 테스트는 Jest를 사용해 구성했습니다.",
        "[결과]: 코드 푸시 → 자동 빌드 → 테스트 → 배포까지의 전 과정이 자동화되어 안정적이고 일관된 서비스 운영이 가능해졌습니다. 개발자는 비즈니스 로직에 더 집중할 수 있게 되었고, 사용자에게도 빠르고 신뢰성 있는 업데이트를 제공할 수 있게 되었습니다."
      ]
    },
    {
      title: "새로운 기능 도입을 위한 리팩토링",
      description: [
        "[문제 상황]: 자전거 커뮤니티 플랫폼이라는 기존 기획을 확장해, 실시간 도로 장애물 신고, 라이딩 능력 평가 등 모바일 특화 기능을 도입하면서 기존 웹 구조만으로는 UI/UX 및 기능 구현에 한계가 있었습니다.",
        "[해결 과정]: 모바일 중심 기능 개발을 위해 React Native 기반의 앱을 별도로 구축하기 시작했으며, 서버 사이드 렌더링(SSR)이 가능한 구조로 전환하기 위해 기존 Node.js 서버를 Spring Boot 기반으로 재설계했습니다. 게시글, 리뷰 등 사용자 생성 콘텐츠는 검색 엔진에 잘 노출될 수 있도록 SSR 대응 로직도 도입 중입니다.",
      ]
    }
  ],
  projectImages: [
    "/public/projectImage/rideon/rideon1.png",
    "/public/projectImage/rideon/rideon2.png",
    "/public/projectImage/rideon/rideon3.png",
    "/public/projectImage/rideon/rideon4.png",
    "/public/projectImage/rideon/rideon5.png"
  ]
};

export const coinAi: DetailProjectType = {
  keyColor: "#9B5DFF",
  title: "CoinAi",
  subtitle: "코인 시세 및 단기 시세 예측 플랫폼",
  period: "2024.06 ~ 진행 중",
  personnel: "2인(프론트엔드 1명, AI 개발 1명)",
  role: "프론트엔드 전담 개발",
  projectTag: ["Team", "React", "Python", "AI"],
  description:
    "CoinAi는 실시간 가상자산(비트코인, 이더리움 등) 시세 조회와 AI를 활용한 단기 시세 예측 기능을 제공하는 플랫폼입니다. 사용자는 주요 암호화폐의 차트와 분석 지표를 확인하고, AI 모델의 예측 결과를 통해 보다 전략적인 투자 판단을 내릴 수 있습니다.",
  keyFeatures: [
    "✅ 실시간 코인 시세 조회 및 차트 렌더링",
    "✅ AI 기반의 단기 시세 예측 결과 제공 (5분/30분 단위)",
    "✅ 기술적 지표(이동평균선, RSI 등) 시각화",
    "✅ 관심 코인 즐겨찾기 및 반응형 UI 제공"
  ],
  useSkills: ["react", "python", "nginx"],
  projectContribution: [
    {
      title: "실시간 시세 차트 및 예측 결과 시각화",
      description: [
        "WebSocket을 활용해 바이낸스 API로부터 실시간 가격 데이터를 받아와 사용자에게 차트로 제공",
        "Recharts 라이브러리를 활용하여 캔들 차트, 이동평균선(MA), RSI 등 기술 지표 시각화",
        "AI 모델의 예측 결과(상승/하락 확률)를 UI에 반영해 직관적인 데이터 전달"
      ]
    },
    {
      title: "종목 검색 및 시세 차트 기능 개발",
      description: [
        "사용자가 다양한 암호화폐를 검색할 수 있도록 검색 UI 및 자동완성 기능 구현",
        "선택한 종목의 실시간 시세 및 과거 시세 데이터를 차트로 구성해 직관적인 정보 전달",
        "차트에 거래량, 가격, 시간 단위 변경 등 인터랙션 기능 추가"
      ]
    }
  ],
  troubleshooting: [
    {
      title: "모델 응답 지연 및 데이터 동기화 문제",
      description: [
        "[문제 상황]: 초기 개발 단계에서 예측 모델 API 호출 시 반응 시간이 일정하지 않아 프론트엔드에서 UI 렌더링 지연 및 차트와의 데이터 불일치 현상이 발생함.",
        "[해결 과정]: API 응답 구조를 정형화하고 로딩 상태 관리 로직을 도입해 UI 렌더링을 예측 응답 수신 이후로 지연시킴. 또한 서버 측 캐싱을 통해 불필요한 모델 재호출을 방지함.",
        "[결과]: 차트와 예측 결과 간 동기화 문제가 해결되어 사용자 경험이 크게 개선되었으며, 전체 페이지 로딩 속도도 안정적으로 유지됨."
      ]
    },
    {
      title: "정적 자산 배포 및 빌드 자동화",
      description: [
        "[문제 상황]: 프론트엔드 배포 시마다 수동으로 빌드를 진행하고 Nginx 서버에 파일을 옮기는 과정이 반복되어 작업 효율이 저하되고 버전 관리에 어려움이 있었습니다.",
        "[해결 과정]: GitHub Actions 기반의 CI 파이프라인을 구축하여 코드 푸시 시 자동으로 빌드 및 서버에 배포되도록 구성. Nginx 설정을 통해 캐시 전략도 함께 설정.",
        "[결과]: 반복적인 수동 작업을 제거하고, 안정적이고 일관된 배포 환경을 구축함으로써 개발자의 생산성이 향상됨."
      ]
    }
  ],
  projectImages: [
    "/public/projectImage/coinai/coinai1.png",
    "/public/projectImage/coinai/coinai2.png",
  ]
}

export const realTimeChat: DetailProjectType = {
  keyColor: "#FFC95D",
  title: "RealTimeChat",
  subtitle: "WebSocket 기반 실시간 채팅",
  period: "2024.12~2025.01",
  personnel: "1인 개발",
  role: "기획 및 전체 풀스택 개발",
  projectTag: ["personal", "react", "socket.io", "node.js"],
  description:
    "RealTimeChat은 실시간 커뮤니케이션이 필요한 다양한 서비스에서 활용할 수 있도록 설계된 웹 기반 채팅 플랫폼입니다. 사용자 간 1:1 메시지를 실시간으로 주고받을 수 있습니다.",
  keyFeatures: [
    "✅ WebSocket 기반 실시간 1:1",
    "✅ 친구 추가 기능을 통한 친구 등록",
    "✅ 채팅방 읽음 여부 및 최근 메시지 알림 표시",
  ],
  useSkills: ["react", "node", "socket", "mysql"],
  projectContribution: [
    {
      title: "채팅 시스템 프론트엔드 전반 구현",
      description: [
        "Socket.io 클라이언트와 연결하여 메시지 실시간 송수신 로직 구현",
        "채팅방 리스트, 읽음 여부, 메시지 전송 시간 등을 React 상태 기반으로 관리",
        "대화 UI는 Basic CSS로 반응형으로 설계"
      ]
    },
    {
      title: "Mysql 기반 대화 기록 관리",
      description: [
        "Mysql에 채팅 메시지, 전송 시간, 송신자/수신자 정보 등을 저장하고, 무한 스크롤 방식으로 과거 대화 로딩 구현",
        "각 채팅방의 최근 메시지 및 읽음 상태 정보까지 저장하여 UX 개선"
      ]
    }
  ],
  troubleshooting: [
    {
      title: "RDB를 이용한 실시간 데이터 처리",
      description: [
        "[문제 상황]: 실시간으로 채팅이 생성되는데 이를 RDB에 저장해야하는데 이 부분에서 성능에 이슈가 발생했습니다.",
        "[해결 과정]: 트랜잭션을 처리를 이용하여 실시간 채팅과 RDB 저장을 동일 레벨로 처리하고 둘 중 하나라도 실패하시 전송에 문제가 생겼다는 메시지를 반환 했습니다.",
        "[회고]: 성능은 유지하면서 데이터의 안전성을 보장할 수 있었습니다. 다만 모든 메시지를 일일히 저장하는 것이 아니라 캐시 서버(Nosql)을 이용해 일괄 처리하는 로직을 추가로 업데이는 하면 데이터베이스에 부담을 줄 일 수 있을 것이라는 생각이 듭니다."
      ]
    },
    {
      title: "브라우저 간 연결 불안정 및 중복 메시지 수신 문제",
      description: [
        "[문제 상황]: 브라우저 새로고침 시 소켓 연결이 중복되어 같은 메시지를 여러 번 수신하는 문제가 발생",
        "[해결 과정]: 소켓 연결 초기화 시 기존 연결을 닫는 로직과, 서버에서 중복 연결 차단 로직 구현",
        "[결과]: 불필요한 메시지 중복 수신 없이 안정적인 채팅 기능 제공"
      ]
    }
  ],
  projectImages: [
    "/public/projectImage/realtimechat/chat1.png",
    "/public/projectImage/realtimechat/chat2.png",
    "/public/projectImage/realtimechat/chat3.png",
    "/public/projectImage/realtimechat/chat4.png"
  ]
};

export const textClassification: DetailProjectType = {
  keyColor: "#5DFF83",
  title: "TextClassification API",
  subtitle: "욕설·비속어 필터링 API 서비스",
  period: "2024.3 ~ 2024.06",
  personnel: "1인",
  role: "전체 기획 및 LLM 개발",
  projectTag: ["personal", "react", "python", "LLM"],
  description:
    "TextClassification API은 온라인 커뮤니티, 댓글 시스템 등 다양한 웹 서비스에서 사용자의 입력 텍스트를 분석하고 비속어나 욕설를 필터링해주는 REST API 기반의 필터링 서비스입니다.",
  keyFeatures: [
    "✅ 욕설/비속어 탐지 및 분류 기능",
    "✅ 클라이언트 요청 시 실시간 응답 제공 (REST API)",
    "✅ 키워드 커스터마이징 기능 및 변형된 비속어 검출"
  ],
  useSkills: [
    "react",
    "ts",
    "python",
  ],
  projectContribution: [
    {
      title: "API 테스트 대시보드 UI 개발",
      description: [
        "개발자나 운영자가 필터링 API를 테스트할 수 있는 대시보드를 구현",
        "입력창에 텍스트를 입력하면 실시간으로 클린 텍스트를 반환받아 비교 가능하도록 구성",
      ]
    },
    {
      title: "LLM fine-tuning",
      description: [
        "모델을 전이 학습하여 4가지의 분류로 욕설 및 비속어를 분류",
      ]
    }
  ],
  troubleshooting: [
    {
      title: "비속어 탐지 정확도 문제",
      description: [
        "[문제 상황]: 클라이언트에서 테스트 중 일부 비속어가 필터링되지 않거나, 정상 문장이 오탐지되는 현상 발생",
        "[해결 과정]: AI 팀과 협업해 욕설 사전 기반 룰 필터링과 함께 FastText 임베딩 기반의 의미 유사도 탐지 로직을 병행 적용",
        "[결과]: 비속어 탐지 정확도 91% → 97%로 향상, 오탐지율은 35% 감소"
      ]
    },
  ],
  projectImages: [
    "/public/projectImage/textclean/textclean1.png",
    "/public/projectImage/textclean/textclean2.png",
    "/public/projectImage/textclean/textclean3.png"
  ]
};

