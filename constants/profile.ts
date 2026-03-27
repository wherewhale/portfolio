import {
  Award,
  CareerTimelineItem,
  Certification,
  ProfileValue,
  SkillsDescription,
} from "@/types/profile";

export const MY_VALUES: ProfileValue[] = [
  {
    title: "신속한",
    items: [
      "완벽보다는 실행에 집중하여 빠르게 결과를 도출합니다.",
      "실시간 피드백을 통해 혼자보다는 함께의 힘을 중시합니다.",
      "나보다는 팀의 전체 성장과 발전에 우선순위를 두고 행동합니다.",
    ],
  },
  {
    title: "높은",
    items: [
      "비즈니스적 시선에서 한계보다는 가치에 중심을 둡니다.",
      "한 번의 완성보다는 개선과 더 나은 수준의 결과를 중시합니다.",
      "가장 중요한 한 가지를 정해 한 번에 하나의 일에 집중합니다.",
    ],
  },
  {
    title: "유연한",
    items: [
      "변화하는 환경에 빠르게 적응합니다.",
      "다양한 상황에서 창의적인 해결책을 제시합니다.",
      "새로운 도전에 대해 긍정적으로 접근합니다.",
    ],
  },
];

export const CAREER_TIMELINE: CareerTimelineItem[] = [
  {
    period: "2023.07 - 2024.03",
    title: "프론트엔드 개발자 (사원)",
    subtitle: "(주)휴몬랩",
  },
  {
    period: "2024.04 - 2024.11",
    title: "프론트엔드 리더 (팀장)",
    subtitle: "한비",
  },
  {
    period: "2025.09 - 현재",
    title: "프론트엔드, 중간 관리자 (대리)",
    subtitle: "(주)휴몬랩",
  },
];

export const AWARDS: Award[] = [
  {
    name: "제 5회 e-ICON 세계대회 1위 (교육부 장관상)",
    date: "2015. 09",
    description:
      "네이버 modoo! 를 활용한 중등 화학 교육 WebApp 개발 및 프로젝트 발표",
  },
  {
    name: "OO대학교 2020 SW경진대회 장려상",
    date: "2020. 11",
    description: "가게 대기열 프로젝트 Hate-Wait 가게 전용 웹 개발",
  },
  {
    name: "OO대학교 LINK+ 우수 캡스톤 디자인 경진대회 우수상",
    date: "2021. 01",
    description: "가게 대기열 프로젝트 Hate-Wait 고도화 및 프로젝트 발표",
  },
  {
    name: "KB IT’s Your Life 6기 최우수 훈련생",
    date: "2025. 08",
    description:
      "금융권 웹 개발 부트캠프 KB IT’s Your Life 6기 최우수 훈련생 선정 (수료생 280명 중 20명)",
  },
  {
    name: "KB IT’s Your Life 해커톤 장려상",
    date: "2025. 09",
    description:
      "소상공인의 ESG 상생을 위한 AI 연동 미션형 리워드 플랫폼 'KB옐로리본' 개발",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Developer - Associate (DVA-C02)",
    date: "2024. 12",
  },
  {
    name: "SQL 개발자 (SQLD)",
    date: "2025. 04",
  },
  {
    name: "정보처리기사",
    date: "2025. 06",
  },
  {
    name: "ADsP (데이터분석 준전문가)",
    date: "2025. 06",
  },
];

export const SKILL_DESCRIPTIONS: SkillsDescription[] = [
  {
    category: "WEB",
    items: [
      "각 상황에 따른 올바른 시멘틱 구조를 사용하여, 검색 엔진에서 하위 메뉴와 기능들을 노출시킨 경험이 있습니다.",
      "브라우저 별 지원 범위를 확인하며 작성합니다.",
    ],
  },
  {
    category: "JavaScript & TypeScript",
    items: [
      "ES6+의 최신 문법과 기능을 활용하여, 가독성과 유지보수성이 높은 코드를 작성합니다.",
      "JavaScript와 TypeScript로 구성된 코드를 이해하고 작성할 수 있습니다.",
      "Vanilla JS로 로컬 기기와 통신하는 프로젝트를 직접 작성하여 배포한 경험이 있습니다.",
      "TypeScript의 타입 시스템을 활용하여, 코드의 안정성과 예측 가능성을 높이는 방법에 익숙합니다.",
    ],
  },
  {
    category: "React & Next.js",
    items: [
      "custom hooks를 원하는 로직으로 모듈화하여 사용할 수 있습니다.",
      "각 프로젝트 별 디자인 패턴을 파악하고, 적용할 수 있으며 기능과 목적에 따라 합리적으로 분리합니다.",
      "함수형 컴포넌트가 익숙하며, 거의 모든 코드를 함수형 컴포넌트로 작성합니다.",
      "반복되고, 길어지는 코드를 지양하며, 직관적인 컴포넌트로 분리하는 구조를 선호합니다.",
      "dynamic import로 클라이언트 단의 로딩이 필요한 컴포넌트를 분리하여 사용합니다.",
      "Server Component와 Client Component의 역할과 특성을 이해하고, 적절히 활용하여 최적의 성능과 사용자 경험을 제공합니다.",
    ],
  },
];
