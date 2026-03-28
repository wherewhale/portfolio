import { ProjectData, ProjectDetail } from "@/types/project";

export const PROJECTS_DATA: ProjectData[] = [
  {
    year: "2026",
    projects: [
      {
        id: "gyopool",
        title: "교풀AI(GyopoolAI)",
        logo: "/assets/images/projects/gyopool/logo.png",
        description:
          "교사가 직접 제작한 AI 도구로 학생별 맞춤형 교육을 실현하는 에듀테크 플랫폼입니다. 교사의 과도한 행정 및 수업 설계 부담을 해결하며, 공교육 현장의 디지털 전환을 위해 시작했습니다.",
        date: "2025.09 - 현재",
        thumbnail: "/assets/images/projects/gyopool/thumbnail.png",
      },
    ],
  },
  {
    year: "2025",
    projects: [
      {
        id: "kb-refit",
        title: "KB리핏(KB Refit)",
        logo: "/assets/images/projects/kb-refit/logo.png",
        description:
          "KB IT’s Your Life 6기 금융권 웹 개발자 부트캠프에서 진행한 종합 실무 프로젝트로 KB스타뱅킹 위에서 전자영수증 및 사업자를 위한 영수처리, 병원비 보험처리 서비스를 마이데이터와 연동하였다고 가정하고 개발하였습니다. ",
        date: "2025.06 - 2025.08",
        thumbnail: "/assets/images/projects/kb-refit/thumbnail.png",
      },
      {
        id: "doldol",
        title: "DOLDOL",
        logo: "/assets/images/projects/doldol/logo.png",
        description:
          "웹 애플리케이션으로 구현한 온라인 롤링페이퍼 서비스입니다. 토이 프로젝트로 진행되었으며, 부트캠프에서 만난 개발 동아리에서 1개월 동안 개발하여 출시하였습니다. 1개월 간 약 1,200개의 메시지를 주고 받았으며, 200명 이상의 유저가 사용하였습니다.",
        date: "2025.05 - 2025.06",
        thumbnail: "/assets/images/projects/doldol/thumbnail.png",
      },
    ],
  },
  {
    year: "2024",
    projects: [
      {
        id: "palette",
        title: "팔레트(Palette)",
        logo: "/assets/images/projects/palette/logo.png",
        description:
          "뮤지션이 음악 서비스 판매자가 되어, MR/BEAT와 같은 음악을 업로드하여 판매하거나, 자신의 음악적 재능을 서비스화하여 판매할 수 있는 재능 거래 플랫폼 입니다. 폐쇄적인 음악 시장의 특성을 해결하며, 인디 음악인의 시장 활성화를 위해 시작했습니다.",
        date: "2024.04 - 2024.11",
        thumbnail: "/assets/images/projects/palette/thumbnail.png",
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        id: "copool",
        title: "코풀 (Copool)",
        logo: "/assets/images/projects/copool/logo.png",
        description:
          "공·사교육 모두에서 사용할 수 있도록 파이썬, 아두이노와 같은 프로그래밍, 피지컬 컴퓨팅 도구를 활용하여 프로젝트 중심의 AI SW 교육 콘텐츠를 제공하는 교육 코스웨서 서비스입니다.",
        date: "2023.07 - 2024.03",
        thumbnail: "/assets/images/projects/copool/thumbnail.png",
      },
    ],
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  gyopool: {
    id: "gyopool",
    title: "교풀AI(GyopoolAI)",
    logo: "/assets/images/projects/gyopool/logo.png",
    description:
      "교사가 직접 제작한 AI 도구로 학생별 맞춤형 교육을 실현하는 에듀테크 플랫폼입니다. 교사의 과도한 행정 및 수업 설계 부담을 해결하며, 공교육 현장의 디지털 전환을 위해 시작했습니다.",
    date: "2025.09 - 현재",
    thumbnail: "/assets/images/projects/gyopool/thumbnail.png",
    info: {
      team: "Team : PM 1명, FE 1명, BE 2명, Data Engineer 1명 ",
      role: "웹 개발 중간 관리자, Front-end",
      techStack: [
        {
          category: "코어",
          items: [
            "React",
            "Next.js 15 (App Router)",
            "TypeScript",
            "Turborepo",
          ],
        },
        { category: "스타일링", items: ["Tailwind CSS", "SCSS"] },
        { category: "상태 관리", items: ["Zustand", "Apollo Client"] },
      ],
    },
    gallery: [
      { src: "/assets/images/projects/gyopool/gallery/1.png", alt: "gallery1" },
      { src: "/assets/images/projects/gyopool/gallery/2.png", alt: "gallery2" },
      { src: "/assets/images/projects/gyopool/gallery/3.png", alt: "gallery3" },
      { src: "/assets/images/projects/gyopool/gallery/4.png", alt: "gallery4" },
    ],
    contributions: [
      "Next.js 15 & Turborepo 기반 모노레포 아키텍처 설계를 통해 선생님, 학생, 어드민 서비스 통합 관리,공통 UI 및 비즈니스 로직의 재사용성 극대화",
      "React 19 Server Component 활용, 부분적 렌더링 구조 설계 ",
      "App - Container - Hook - Component 4계층 구조 설계, 코드 응집도 향상 및 유지보수 효율성 극대화",
      "vercel-react-best-practice AI 에이전트 기반 실시간 코드 리뷰 및 최적화 프로세스 구축",
      "GraphQL + Apollo Client 통신 환경 기반 인스턴스 클라이언트 설정, InMemoryCache 전략을 수립하여 불필요한 네트워크 비용 절감 및 클라이언트 상태 관리 최적화",
      "결제 4단계 교차 검증 프로세스를 설계하여 자산 누락 리스크를 차단 및 Slack 알림 시스템 구축",
      "Toss Funnel 라이브러리를 기반 다단계 입력 폼 내, URL 쿼리 파라미터 동기화 커스텀 훅 모듈화",
      "Vitest, Husky 활용 pre-commit 단위 테스트 구축",
      "Suspense와 Skeleton UI 적용을 통한 체감 대기 시간 단축",
    ],
    performance: [
      { label: "번들 사이즈", value: "88% 감소", description: "874kb → 105kb" },
      {
        label: "Lighthouse Performance Score",
        value: "전 영역 90점 이상",
        description: "Legacy 대비 88.5% 속도 향상",
      },
      { label: "MAU", value: "4000+" },
      { label: "고객 유치", value: "7000+" },
    ],
    troubleshootings: [
      {
        title: "AI 도구 동적 제작 페이지의 폼(Form) 성능 최적화",
        problem: `AI 도구 동적 제작 페이지 구현 중, CPU 4배 속도 저하 환경에서 글자 입력 간 3초, 질문 위치 수정 간 4초가 소요되는 극심한 Form 성능 저하가 발생하였습니다. 렌더링 연쇄 작용과 브라우저 리플로우 관점에서 원인을 분석했습니다.`,
        solution: `부모의 watch를 제거하고 useFieldArray의 fields를 활용하며, control 객체를 통해 각 컴포넌트가 필요한 상태만 격리하여 구독하도록 구조를 고도화했습니다. 또한 브라우저 리플로우를 방지하기 위해 자동 높이 조절 UI를 일반 텍스트 영역으로 교체하는 디자인적 협의를 진행했습니다.`,
        beforeAfter: {
          before: "4,000ms",
          after: "150ms",
          label: "INP(Interaction to Next Paint) 개선",
        },
        learned: [
          "React의 가상 DOM 리렌더링과 브라우저의 리플로우(Reflow)를 분리하여 가설을 세우고, 크롬 개발자 도구의 성능 프로파일링을 통해 병목 지점을 특정하는 법을 익혔습니다.",
          "사용자 경험(UX)의 핵심 지표인 INP 수치를 개선하기 위해 서비스의 안정성과 반응 속도를 최우선으로 고려하는 비즈니스적 판단력을 길렀습니다.",
          "전체 구독 방식의 한계를 파악하고, 개별 구독 형태의 최적화된 상태 관리 로직을 구현하며 효율적인 설계의 중요성을 체감했습니다.",
        ],
        images: [
          {
            src: "/assets/images/projects/gyopool/troubleshooting/1.png",
            alt: "성능 측정 결과",
            caption:
              "Chrome DevTools를 활용한 메인 스레드 점유율 분석 및 병목 지점 확인 과정",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/2.png",
            alt: "잘못된 코드와 수정 코드 비교",
            caption: "잘못된 코드와 수정 코드 비교",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/3.png",
            alt: "오류 코드 예시",
            caption: "오류 코드 예시",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/4.png",
            alt: "수정 코드 예시",
            caption: "수정 코드 예시",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/5.png",
            alt: "개선 후 성능 측정 결과",
            caption:
              "개선 후 Chrome DevTools를 활용한 메인 스레드 점유율 분석 및 INP 개선 확인 과정",
          },
        ],
        links: [
          {
            title: "React Hook Form INP 3,912ms 97% 성능 개선기",
            url: "https://velog.io/@wha1eson/React-Hook-Form-INP-3912ms-97-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%EA%B8%B0",
          },
        ],
      },
      {
        title:
          "라이브 서비스의 무중단 다국어(i18n) 도입 및 번역 자동화 파이프라인 구축",
        problem:
          "서비스의 글로벌 진출로 인해 라이브 운영 중인 프로젝트에 다국어(i18n) 지원을 추가해야 했습니다. 이때 기존 유저들이 공유하거나 즐겨찾기 한 URL(Legacy URL)이 깨지지 않아야 했고, 검색 엔진 최적화(SEO) 점수 하락을 방지해야 하는 깐깐한 제약 조건이 있었습니다.",
        solution:
          "SEO 방어를 위해 URL 쿼리 파라미터가 아닌 Sub-path 라우팅(`/[locale]/...`) 방식을 채택했습니다. 초기 로딩 속도(TTFB)를 저하시키는 CSR 기반의 전역 상태(Context) 사용을 배제하고, next-intl의 미들웨어와 쿠키를 활용해 서버 단에서 언어를 우선 추론하도록 설계했습니다. 더불어 기획/디자인 팀과의 협업 병목을 줄이기 위해 Google Sheets API를 연동하여 평면적인 시트 데이터를 다국어 JSON 트리로 파싱하는 Node.js 스크립트를 작성했습니다.",
        improvements: [
          "한국어 유저의 경우 기존 URL 경로를 그대로 유지(`as-needed` 설정)하면서도 다국어 라우팅을 매끄럽게 연동하여 기존 사용자의 UX와 SEO 점수를 완벽히 방어했습니다.",
          "SEO가 중요한 영역은 서버 컴포넌트(SSR)로, 인터랙션이 필요한 부분은 클라이언트 컴포넌트(CSR)로 철저히 분리하여 성능 손실 없이 다국어 데이터를 하이드레이션(Hydration)했습니다.",
          "터미널 명령어 한 줄(`npm run build:i18n`)로 구글 시트의 번역 데이터가 운영 서버의 JSON 파일로 자동 반영되는 파이프라인을 구축했습니다.",
        ],
        beforeAfter: {
          before: "다국어 미지원",
          after: "무중단 다국어 라우팅 및 자동화 구축",
          label: "운영 중인 라이브 서비스의 글로벌 인프라 확장",
        },
        learned: [
          "Next.js App Router 환경에서 전역 상태 관리(Zustand 등) 없이 미들웨어와 쿠키만으로 서버와 클라이언트 간의 상태를 동기화하는 구조적 패러다임을 깊이 이해했습니다.",
          "2차원 배열 데이터를 재귀(Recursive) 알고리즘을 통해 3차원 JSON 트리로 가공하는 로직을 직접 구현하며 데이터 핸들링 역량을 키웠습니다.",
          "기능 구현을 넘어, 타 직군(기획, 디자인)과의 협업 프로세스를 자동화하여 팀 전체의 개발 생산성(DX)을 끌어올리는 인프라 설계의 중요성을 체감했습니다.",
        ],
        links: [
          {
            title: "달리는 기차의 바퀴를 바꿔라: i18n 다국어 주입기",
            url: "https://velog.io/@wha1eson/%EB%8B%AC%EB%A6%AC%EB%8A%94-%EA%B8%B0%EC%B0%A8%EC%9D%98-%EB%B0%94%ED%80%B4%EB%A5%BC-%EB%B0%94%EA%BF%94%EB%9D%BC-i18n-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A3%BC%EC%9E%85%EA%B8%B0",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/gyopool/troubleshooting/6.png",
            alt: "구글 언어별 URL 구조 DOCS",
            caption:
              "구글 검색엔진 최적화 가이드 문서에서 권장하는 언어별 URL 구조",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/7.png",
            alt: "node 실행 스크립트 예시",
            caption:
              "npm run build:i18n 명령어로 구글 시트 데이터를 다국어 JSON 변환",
          },
          {
            src: "/assets/images/projects/gyopool/troubleshooting/8.png",
            alt: "번역 자동화 파이프라인 결과",
            caption:
              "번역 자동화 파이프라인 구축으로 구글 시트의 번역 데이터가 운영 서버의 JSON 파일로 자동 반영되는 모습",
          },
          {
            src: "https://velog.velcdn.com/images/wha1eson/post/0f9d9c41-0a61-4ec0-8fb0-04aa13f9659f/image.gif",
            alt: "다국어 적용 결과 화면",
            caption: "깜빡임 없이 매끄럽게 동작하는 라이브 서비스 다국어 UI",
          },
        ],
      },
    ],
  },
  palette: {
    id: "palette",
    title: "팔레트 (Palette)",
    logo: "/assets/images/projects/palette/logo.png",
    thumbnail: "/assets/images/projects/palette/thumbnail.png",
    date: "2024.04 - 2024.11",
    description:
      "뮤지션이 음악 서비스 판매자가 되어, MR/BEAT와 같은 음악을 업로드하여 판매하거나, 자신의 음악적 재능을 서비스화하여 판매할 수 있는 재능 거래 플랫폼 입니다.",

    info: {
      team: "FE 1명, BE 1명, 기획자 1명",
      role: "Front-end",
      techStack: [
        {
          category: "Core",
          items: [
            "React",
            "Next.js 14 (Page Router)",
            "TypeScript",
            "Turborepo",
          ],
        },
        {
          category: "Styling",
          items: ["TailwindCSS"],
        },
        {
          category: "State Management",
          items: ["Tanstack-Query", "Zustand"],
        },
      ],
    },

    gallery: [
      {
        src: "/assets/images/projects/palette/gallery/5.png",
        alt: "팔레트 메인 화면",
      },
      {
        src: "/assets/images/projects/palette/gallery/1.png",
        alt: "팔레트 작곡 마켓 화면",
      },
      {
        src: "/assets/images/projects/palette/gallery/2.png",
        alt: "팔레트 어드민 서비스 현황 그래프 화면",
      },
      {
        src: "/assets/images/projects/palette/gallery/3.png",
        alt: "팔레트 어드민 서비스 판매 상품 관리 화면",
      },
      {
        src: "/assets/images/projects/palette/gallery/4.png",
        alt: "팔레트 판매 상품 폼 구성",
      },
    ],

    contributions: [
      "기획 단계에서 Admin/Client 디자인 시스템 통합을 위해 Turborepo를 활용한 MonoRepo 구성",
      "axios interceptors를 활용한 유저 Refresh Token 인증 로직 구현 및 간편화",
      "사이트 내 전역적인 음악 재생을 위해 useContext를 활용한 음악 플레이어 개발",
      "검색엔진 최적화(SEO)를 위한 랜딩 페이지, 판매 상품 페이지 SSR, ISR 구성",
      "서버의 부하를 줄이며, 사용자의 대용량 파일 업로드를 보장하기 위한 AWS S3 멀티파일 업로드 구현",
      "사용 서비스 실시간 문의, 답변을 위해 socket.io-client를 활용한 채팅 UI 시스템 구현",
      "나이스페이먼츠 PG사 계약을 통한 결제 모듈 추가 (결제 요청 - 결제 - 결제 검증 단계 구현)",
      "빌드 환경 분리를 위한 웹서버(Vercel) 빌드 Shell 스크립트 작성",
      "개발 과정, QA, 코드 리뷰 시스템의 체계화를 위한 Google Sheets, Templates(Issue, PR) 문서 작성",
    ],

    performance: [
      {
        label: "MAU",
        value: "1.1천+",
        description: "유저 350명+ 전환",
      },
      {
        label: "거래 규모",
        value: "800만+",
        description: "거래 게시물 350건+",
      },
      {
        label: "DB 확보",
        value: "350GB",
        description: "약 380곡, 뮤지션 250명 확보",
      },
      {
        label: "Google CTR",
        value: "43.0%",
        description: "총 클릭 230+, 노출 520+",
      },
      {
        label: "Naver CTR",
        value: "38.2%",
        description: "총 클릭 110+, 노출 290+",
      },
    ],

    troubleshootings: [
      {
        title: "S3 - 클라이언트 멀티파트 업로드 구현",
        problem:
          "정식 출시 3일 전, 베타 서비스 운영 중 파일 업로드 API 호출 이후 서버가 다운되는 현상이 발견되었습니다. 예상한 크기보다 용량이 큰 파일이 업로드되어, 서버 인스턴스의 메모리 사용이 용량을 초과했기 때문입니다.",
        solution:
          "업로드 과정에서 서버의 리소스를 사용하는 것이 아닌 클라이언트의 리소스를 직접 사용하기 위해, 서비스의 저장공간인 AWS S3와 연결하였습니다. 해당 과정에서 AWS에서 권장하는 멀티파트 업로드(Multipart Upload) 방식을 도입하여 문제를 해결했습니다.",
        improvements: [
          "클라이언트 직접 업로드 방식을 사용하여 서버 리소스 사용 비율을 극적으로 줄이고 기존보다 빠른 업로드 속도를 달성했습니다.",
          "멀티파트 업로드 구현 과정에서 진행 상황을 보여줄 수 있도록 Progress Bar를 추가하여 UI를 직관적으로 개선했습니다.",
          "테스트 과정에서 S3, CloudFront의 URL에 누구나 접근할 수 있던 취약점을 발견하고 권한을 수정하여 서비스 운영 안정성을 높였습니다.",
        ],
        beforeAfter: {
          before: "서버 메모리 초과 (다운)",
          after: "서버 부하 0 (직접 업로드)",
          label: "대용량 업로드 시 서버 안정성 개선",
        },
        learned: [
          "처음으로 Next.js의 api 기능을 통해 간단한 서버 사이드 코드를 작성했으며, Next.js 백엔드를 활용할 수 있게 되었습니다.",
          "멀티파트 업로드의 원리와 방식에 대해 공부할 수 있었으며, 대용량 업로드의 에러 핸들링을 경험했습니다.",
          "실제 고객을 만나기 전에 리소스 사용에 대한 부분을 테스트하는 부분에 대해 관심을 가지고, 테스트 코드에 대해서 알아보게 되었습니다.",
        ],
        links: [
          {
            title: "클라이언트에서 대용량 파일 업로드 (Next.js, S3)",
            url: "https://wha1estory.notion.site/Next-js-S3-18f4d2d1f08f455c9591536bac9852d5",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/palette/troubleshooting/2.png",
            alt: "팔레트 서비스 업로드 에러 발생 당시 서버 모니터링 화면",
            caption:
              "고객에게 받은 업로드 파일이 서버 메모리를 초과하여 발생한 에러 상황",
          },
          {
            src: "/assets/images/projects/palette/troubleshooting/1.png",
            alt: "개선 이후 업로드 진행 상황을 보여주는 UI 화면",
            caption:
              "멀티파트 업로드 방식으로 개선된 업로드 진행 상황을 보여주는 UI 화면",
          },
        ],
      },
      {
        title: "자체 음악 플레이어 제작하기",
        problem:
          "음악 플레이어를 구축하며, 페이지 이동(라우팅)에 따라 컴포넌트가 마운트/언마운트되어 플레이어가 초기화되고 음악이 끊기는 문제에 직면하였습니다. 또한, 플레이어 외부의 특정 버튼으로도 플레이어에 이벤트를 전달할 수 있는 전역적인 구조가 필요했습니다.",
        solution:
          "useContext를 이용하여 전역적으로 이벤트와 상태를 공유하였으며, 이를 Custom Hook으로 감싸 플레이어의 이벤트와 상태 전달이 필요한 컴포넌트에서 플레이어와 연동하여 사용할 수 있도록 구조를 재설계했습니다.",
        improvements: [
          "App Component 최상단에 Provider를 위치시켜, 페이지 라우팅 시에도 끊기지 않고 백그라운드에서 재생되는 자체 플레이어를 구현했습니다.",
          "전역적으로 정보를 공유하여 개별 게시물 컴포넌트에서도 플레이어의 재생 여부 확인과 재생/정지 이벤트를 매끄럽게 제어할 수 있게 되었습니다.",
          "서버에서 받아오는 랜덤 플레이리스트 정보를 전역 상태 변수로 관리하여, 라우팅마다 발생하던 불필요한 서버 요청(API Call)을 대폭 줄였습니다.",
        ],
        beforeAfter: {
          before: "페이지 이동 시 음악 끊김",
          after: "끊김 없는 백그라운드 재생",
          label: "음악 플레이어 UX 및 상태 유지 개선",
        },
        learned: [
          "useContext와 Provider의 역할에 대해 깊게 고민해볼 수 있었으며, 실제 코드에 사용해보며 Context API를 완벽히 이해하고 적용할 수 있게 되었습니다.",
          "라이브러리 사용 과정에서 선정 기준과 기능에 대한 장·단점을 톺아보고 논리적인 선택을 가져갈 수 있었습니다.",
          "타 프로젝트(Youtube Music)를 통해 구현할 수 있는 한계점을 파악하고 원리를 찾아보는 과정을 체득하게 되었습니다. (새로고침 과정에서 플레이어가 유지될 수 없는 이유 등)",
        ],
        links: [
          {
            title: "Nextjs에 음악 Player 시스템 구축",
            url: "https://wha1estory.notion.site/Nextjs-Player-51d90b0d825c468d87376b9f7aa96961",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/palette/troubleshooting/3.png",
            alt: "전역 상태 적용 전 플레이어 구조",
            caption:
              "라우팅 시 컴포넌트 초기화로 인해 음악이 끊기던 기존 구조의 문제점",
          },
          {
            src: "/assets/images/projects/palette/troubleshooting/4.png",
            alt: "개선된 전역 음악 플레이어 UI",
            caption:
              "useContext 기반의 전역 상태 관리로 페이지 이동 간에도 끊김 없이 재생되는 플레이어",
          },
        ],
      },
    ],
  },
  copool: {
    id: "copool",
    title: "코풀 (Copool)",
    logo: "/assets/images/projects/copool/logo.png",
    thumbnail: "/assets/images/projects/copool/thumbnail.png",
    date: "2023.07 - 2024.03",
    description:
      "공·사교육 모두에서 사용할 수 있도록 파이썬, 아두이노와 같은 프로그래밍, 피지컬 컴퓨팅 도구를 활용하여 프로젝트 중심의 AI SW 교육 콘텐츠를 제공하는 교육 코스웨어 서비스입니다.",
    link: "https://copool.kr",
    info: {
      team: "FE 1명, BE 1명, FullStack 1명, 디자이너 1명",
      role: "Front-end, UX 설계 및 리뉴얼",
      techStack: [
        {
          category: "Core",
          items: [
            "React",
            "Next.js 14 (Page Router)",
            "TypeScript",
            "Turborepo",
          ],
        },
        {
          category: "Styling",
          items: ["TailwindCSS"],
        },
        {
          category: "State Management",
          items: ["Tanstack-Query", "Zustand"],
        },
      ],
    },

    gallery: [
      {
        src: "/assets/images/projects/copool/gallery/1.png",
        alt: "코풀 랜딩페이지",
      },
      {
        src: "/assets/images/projects/copool/gallery/2.png",
        alt: "코풀 커뮤니티 페이지",
      },
      {
        src: "/assets/images/projects/copool/gallery/3.png",
        alt: "코풀 개발자 MBTI 페이지",
      },
    ],

    contributions: [
      "기기 성능에 따라 인증 Token이 저장되지 않고, 로그인 화면으로 전환되는 인증 로직(HOC) 이슈 개선",
      "Notion API - Page Upload, 미디어 업로드 누락 에러 개선을 위한 비동기 업로드 로직 재구성",
      "기존 텍스트 에디터 사용성 개선을 위한 블록형 에디터(텍스트, 이미지, 영상, 코드 컴파일러) 구현",
      "온라인 코드 컴파일러 UI 개발 및 로컬 카메라 기기, 라즈베리파이 피코와 연동 가능한 Javascript 기반 티처블 머신 개발",
      "Google Search Console, Mix-panel으로 종합한 정보를 기반하여 고객 관심 유도, 접근성 개선을 위한 랜딩 페이지 리뉴얼 (4건의 계약 유치)",
      "코딩 교육 컨퍼런스 이벤트를 위한 ‘IT 진로 테스트’ 개발 및 ‘개발자 MBTI’ 이벤트 페이지 리뉴얼",
    ],

    performance: [
      {
        label: "MAU & 계약",
        value: "2000+",
        description: "UI/UX 개선을 통한 4건의 계약 유치",
      },
      {
        label: "미디어 업로드",
        value: "100%",
        description: "누락 이슈 해결 및 교육자료 업로드 활성화",
      },
      {
        label: "신규 기능",
        value: "컴파일러",
        description: "온라인 코드 컴파일러 및 자체 티처블 머신 개발",
      },
    ],

    troubleshootings: [
      {
        title: "노션 페이지 미디어 업로드 누락 개선을 위한 Queue 구현",
        problem:
          "Admin 페이지에서 Notion API를 이용하여 교육 자료를 업로드하는 중, 미디어 자료 중 일부가 간헐적이고 무작위적으로 업로드에 실패하여 교육 자료의 일부가 지속적으로 누락되는 이슈에 직면하였습니다.",
        solution:
          "기존 Promise.all 로직에서 발생할 수 있는 문제들을 세분화하여 가설을 세우고 검증하는 과정을 통해, 동시 다발적인 요청으로 인한 서버의 메모리 제한(OOM)이 원인임을 파악했습니다. 서버 Scale-Up 없이 프론트엔드 레벨에서 문제를 해결하기 위해, Recursive(재귀) 알고리즘을 활용한 큐(Queue) 기반의 순차적 업로드 로직으로 전면 재구성했습니다.",
        improvements: [
          "미디어 업로드 로직을 순차 처리 방식으로 변경하여, 간헐적으로 발생하던 미디어 누락 이슈를 완벽히 해결하고 업로드 성공률을 100%로 개선했습니다.",
          "재업로드 로직과 함께 전체 업로드 진행 상황을 보여주는 Progress UI를 구성하여, 관리자가 업로드 상태를 명확히 인지할 수 있도록 UX를 향상시켰습니다.",
          "순차 처리로 인해 기존 업로드 방식보다 시간은 더 소요되었으나, '속도'보다 '기능의 정확성(데이터 무결성)'을 우선시하는 비즈니스적 트레이드오프(Trade-off)를 성공적으로 조율했습니다.",
        ],
        beforeAfter: {
          before: "약 80%",
          after: "100%",
          label: "미디어 업로드 성공 비율",
        },
        learned: [
          "외부 API와 내부 API를 모두 이용하는 기능에서 문제가 발생했을 때, 원인을 파악하기 위한 가설 검증 단계와 실험을 체계적으로 진행해볼 수 있었습니다.",
          "기능의 정확도와 처리 속도 사이의 충돌 상황에서, 서비스의 비즈니스적 관점과 우선순위를 고려하여 합리적인 결정을 내리는 시야를 얻게 되었습니다.",
          "비동기 로직과 재귀 함수의 흐름을 다시 검토해볼 수 있었으며, 유지보수를 위한 직관적인 코드 설계의 중요성을 깨달았습니다.",
          "서버의 리소스 제한이 있을 때 백엔드 인프라 수정에만 의존하지 않고, 프론트엔드 단에서의 구조적 로직 개선만으로도 문제를 해결할 수 있는 역량을 길렀습니다.",
        ],
        links: [
          {
            title: "Notion Page Upload Issue 분석",
            url: "https://wha1estory.notion.site/Notion-Page-Upload-Issue-de65d26e9ba84081bb85e2238f66f9fe",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/copool/troubleshooting/1.png",
            alt: "Notion API를 통해 전달받은 미디어 파일",
            caption: "Notion API를 통해 전달받은 미디어 파일",
          },
          {
            src: "/assets/images/projects/copool/troubleshooting/2.png",
            alt: "원인 파악을 위한 파일 분석 과정1",
            caption: "원인 파악을 위한 파일 분석 과정1",
          },
          {
            src: "/assets/images/projects/copool/troubleshooting/5.png",
            alt: "원인 파악을 위한 파일 분석 과정2",
            caption: "원인 파악을 위한 파일 분석 과정2",
          },
          {
            src: "/assets/images/projects/copool/troubleshooting/4.png",
            alt: "원인 파악을 위한 파일 분석 과정3",
            caption: "콘솔 로직 검토 및 업로드 실패 로직 상세 분석",
          },
          {
            src: "/assets/images/projects/copool/troubleshooting/3.png",
            alt: "원인 파악을 위한 파일 분석 과정4",
            caption:
              "큐 구현을 통한 재업로드 로직 구성 및 업로드 진행 상황 검토",
          },
        ],
      },
    ],
  },
  "kb-refit": {
    id: "kb-refit",
    title: "KB 리핏 (KB Refit)",
    logo: "/assets/images/projects/kb-refit/logo.png",
    thumbnail: "/assets/images/projects/kb-refit/thumbnail.png",
    date: "2025.07 - 2025.08",
    description:
      "KB IT’s Your Life 6기 금융권 웹 개발자 부트캠프 종합 실무 프로젝트로, KB스타뱅킹 위에서 전자영수증 및 사업자를 위한 영수처리, 병원비 보험처리 서비스를 마이데이터와 연동하였다고 가정하고 개발한 서비스입니다.",

    info: {
      team: "FE 2명, BE 4명",
      role: "Team Leader, Front-end",
      techStack: [
        {
          category: "Core",
          items: ["Vue3", "Nuxt.js 4", "TypeScript", "Turborepo", "PWA"],
        },
        {
          category: "Styling",
          items: ["TailwindCSS"],
        },
        {
          category: "State Management",
          items: ["Tanstack-Query", "Pinia"],
        },
      ],
    },

    gallery: [
      {
        src: "/assets/images/projects/kb-refit/gallery/1.png",
        alt: "리핏 홈 화면",
      },
      {
        src: "/assets/images/projects/kb-refit/gallery/2.png",
        alt: "리핏 내 지갑 상세 화면",
      },
      {
        src: "/assets/images/projects/kb-refit/gallery/5.png",
        alt: "리핏 내 지갑 브랜드 상점 화면",
      },
      {
        src: "/assets/images/projects/kb-refit/gallery/3.png",
        alt: "리핏 고용24 연동 화면",
      },
      {
        src: "/assets/images/projects/kb-refit/gallery/4.png",
        alt: "리핏 영수증 발급 화면",
      },
    ],

    contributions: [
      "Turborepo를 활용한 모노레포 구성 (일반 사용자, 사장님, Admin 전용 페이지 분리)",
      "Middleware를 활용한 Auth 로직 구성 (페이지 권한 별 예외 처리 로직 구현)",
      "Firebase Cloud Storage 연동 및 이미지 업로드, 다운로드 기능 개발",
      "i18n, Google Sheets 연동을 통한 다국어 지원(한국어, 영어) 및 JSON 생성 Script 개발",
      "vitest를 활용한 페이지 별 UI 로직 테스트 코드 작성 및 husky를 활용한 커밋 전 테스트 연동",
      "vue transition, custom hook, pinia를 활용한 다형성 훅(useFunnel) 커스텀 구현",
      "PWA 웹앱 구성을 위한 Manifest 작성 및 적용",
    ],

    performance: [
      {
        label: "코드 품질",
        value: "501건",
        description: "PR 및 코드 리뷰 시스템화를 통한 협업 진행",
      },
      {
        label: "웹 성능 지표",
        value: "90점+",
        description: "Lighthouse 웹 성능 최적화 지표 '좋음' 달성",
      },
      {
        label: "수상 내역",
        value: "최우수",
        description: "KB IT's Your Life 최우수 교육생 선정",
      },
    ],

    troubleshootings: [
      {
        title:
          "Vue 반응성 시스템과 TanStack Query 충돌로 인한 무한 루프 에러 해결",
        problem:
          "Nuxt 배포(Vercel) 환경에서 페이지 진입 시 'Maximum call stack size exceeded' 에러와 함께 브라우저가 멈추는 무한 루프 현상이 발생했습니다. 로컬 개발 환경에서는 발생하지 않아 이전 배포 이력을 트래킹한 결과, TanStack Query의 useMutation 훅 추가 이후 발생한 문제임을 확인했습니다.",
        solution:
          "문제의 핵심은 useMutation의 mutationKey에 Pinia의 반응형 객체(store)를 통째로 전달한 것에 있었습니다. Vue의 반응성 시스템이 store를 읽는 순간 이를 종속성으로 등록(track)하고, 평가와 렌더링이 반복되며 무한 루프(trigger)를 유발한 것입니다. 이를 해결하기 위해 mutationKey에 반응형 객체를 직접 넣지 않고, store.businessNumber, store.category와 같이 원시값(Primitive Type)으로 해체 및 구조 분해하여 전달하는 방식으로 코드를 전면 수정했습니다.",
        improvements: [
          "mutationKey에 Pinia Store(반응형 객체) 대신 원시값을 명시적으로 전달함으로써, 불필요한 재렌더링과 track/trigger 무한 루프 고리를 완벽하게 끊어냈습니다.",
          "로컬 환경에서는 감춰져 있던 문제를 배포 환경(Vercel)의 엄격한 평가 타이밍에서 발견하고 트래킹하여, 사용자가 직면할 수 있는 크리티컬한 에러(브라우저 멈춤 현상)를 조기에 차단했습니다.",
        ],
        beforeAfter: {
          before: "무한 루프 (브라우저 다운)",
          after: "정상 렌더링",
          label: "Call Stack 초과 에러 해결 및 안정성 확보",
        },
        learned: [
          "Vue의 반응성 시스템(Reactivity)이 어떻게 동작(track/trigger)하는지, 그리고 Proxy 객체가 렌더링에 미치는 영향을 깊이 이해하게 되었습니다.",
          "TanStack Query가 내부적으로 키(Key)를 기반으로 상태를 관리하는 원리를 파악하고, 프레임워크와 외부 라이브러리를 혼용할 때 발생할 수 있는 라이프사이클 충돌 문제를 경험했습니다.",
          "단순히 동작하는 코드를 짜는 것을 넘어, 상태 관리 도구(Pinia, React Query 등)의 내부 동작 방식을 정확히 알고 원시값과 참조값을 구분하여 사용해야 함을 체감했습니다.",
        ],
        links: [
          {
            title:
              "tanstack mutationKey 값으로 인한 Maximum call stack size exceeded 이슈",
            url: "https://velog.io/@wha1eson/tanstack-mutationKey-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%95%9C-Maximum-call-stack-size-exceeded-%EC%9D%B4%EC%8A%88",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/kb-refit/troubleshooting/1.png",
            alt: "Maximum call stack size exceeded 에러 로그",
            caption: "Vercel 배포 환경에서 발생한 Call Stack 초과 에러",
          },
          {
            src: "/assets/images/projects/kb-refit/troubleshooting/2.png",
            alt: "500 Internal Server Error 에러 로그",
            caption:
              "Vercel 배포 환경에서 mutationKey에 반응형 객체를 전달하여 발생한 500 Internal Server Error 에러",
          },
          {
            src: "/assets/images/projects/kb-refit/troubleshooting/3.png",
            alt: "문제 발생 코드",
            caption: "commit 이력을 통해 역추적한 문제가 발생한 코드",
          },
          {
            src: "/assets/images/projects/kb-refit/troubleshooting/4.png",
            alt: "AI와 분석한 에러 원인",
            caption: "AI 도구를 활용하여 분석한 에러 원인",
          },
        ],
      },
    ],
  },
  doldol: {
    id: "doldol",
    title: "돌돌 (DOLDOL)",
    logo: "/assets/images/projects/doldol/logo.png",
    thumbnail: "/assets/images/projects/doldol/thumbnail.png",
    date: "2025.05 - 2025.07",
    description:
      "웹 애플리케이션으로 구현한 온라인 롤링페이퍼 서비스입니다. 부트캠프 개발 동아리에서 1개월 동안 기획 및 개발하여 정식 출시한 토이 프로젝트입니다.",
    link: "https://doldol.wha1eson.co.kr/",
    info: {
      team: "FE 3명, BE 4명",
      role: "Front-end Leader",
      techStack: [
        {
          category: "Core",
          items: [
            "React",
            "Next.js 15 (App Router)",
            "TypeScript",
            "Turborepo",
          ],
        },
        {
          category: "Styling",
          items: ["TailwindCSS"],
        },
        {
          category: "State Management",
          items: ["Tanstack-Query"],
        },
      ],
    },

    gallery: [
      {
        src: "/assets/images/projects/doldol/gallery/1.png",
        alt: "돌돌 랜딩 페이지",
      },
      {
        src: "/assets/images/projects/doldol/gallery/2.png",
        alt: "돌돌 받은 메시지 리스트 페이지",
      },
      {
        src: "/assets/images/projects/doldol/gallery/3.png",
        alt: "돌돌 메시지 작성 페이지",
      },
    ],

    contributions: [
      "HOC(고차 컴포넌트)와 Axios Interceptors를 활용한 Token 관리 Auth 로직 구성",
      "공통 Layout 및 Server·Client Component 분리를 통한 전체 페이지 렌더링 최적화",
      "next/image 모듈을 활용한 .png → .webp 대체 및 Lazy Load 구현",
      ".gif → .mp4 미디어 포맷 대체를 통해 리소스 크기를 기존 대비 25% 수준으로 대폭 감소",
      "글씨체, 배경 수정 등 커스터마이징이 가능한 Textarea 컴포넌트 구현",
      "LocalStorage를 활용한 최근 로그인 방식 저장 로직 구성",
      "Dynamic Import를 활용한 회원가입 및 메시지 Form 제출 페이지 전환 로직 구성",
      "PR, 이슈 템플릿 생성 및 프론트엔드 팀 개발·소통 방식(Convention) 구축",
    ],

    performance: [
      {
        label: "사용자 반응",
        value: "200명+",
        description: "1개월 간 약 1,200개의 메시지 작성 완료",
      },
      {
        label: "웹 성능 최적화",
        value: "98점+",
        description: "Lighthouse 기준 전체 페이지 평균 98점 달성",
      },
      {
        label: "리소스 최적화",
        value: "75% 감소",
        description: "gif를 mp4로 대체하여 미디어 리소스 크기 최적화",
      },
    ],

    troubleshootings: [
      {
        title: "Next.js Middleware 인증 로직 실패와 HOC 기반 Client 인증 전환",
        problem:
          "Next.js App Router 환경에서 Cookie와 Middleware를 활용하여 서버 단에서 동작하는 Auth 로직을 구현하려 시도했으나, 브라우저 쿠키의 동작 특성(Cross-domain 등)과 Token 저장 방식에 따른 에러로 인해 정상적인 인증이 이루어지지 않는 한계에 부딪혔습니다.",
        solution:
          "서버 사이드 인증 방식의 한계를 인지하고, 문제를 우회하기 위해 브라우저의 LocalStorage를 활용한 클라이언트 사이드 인증 방식으로 전면 개편했습니다. React의 HOC(고차 컴포넌트)를 도입하여 페이지 권한을 분리하고, Axios Interceptors를 활용해 토큰 관리 로직을 중앙화하여 안정적인 인증 시스템을 구축했습니다.",
        learned: [
          "실패 경험을 통해 브라우저 쿠키(Cookie)와 로컬 스토리지(Local Storage)의 정확한 특징과 저장 방식에 따른 보안적/구조적 차이를 깊이 이해하게 되었습니다.",
          "트러블 슈팅 과정에서 무분별한 기술 블로그 참고를 지양하고, Next.js 공식 문서를 우선적으로 확인하고 적용하는 올바른 개발 습관을 길렀습니다.",
        ],
        links: [
          {
            title: "돌돌(DOLDOL) Github Repository",
            url: "https://github.com/team-serius/doldol-client",
          },
        ],
      },
      {
        title: "FE 리더로서의 컴포넌트 설계 개선 및 DX(개발자 경험) 고도화",
        problem:
          "3명의 프론트엔드 팀원이 협업하는 과정에서 각자의 코드 작성 스타일이 달라 병합 시 충돌이 발생했고, props 네이밍이나 컴포넌트 분리 기준이 모호하여 재사용성이 떨어지는 문제가 있었습니다. 또한 프레임워크에 의존적인 코드 작성으로 인해 자바스크립트 기본기에서 기인하는 에러들이 발견되었습니다.",
        solution:
          "나만 아는 코드가 아닌 '팀원 모두가 직관적으로 사용할 수 있는 컴포넌트'를 목표로 Props 네이밍 규칙과 확장성을 고려한 컴포넌트 설계를 주도했습니다. \n또한 nvm, husky, .vscode 설정을 강제하여 팀원 간 개발 환경(DX)을 통일하고, 엄격한 코드 리뷰 문화를 정착시켰습니다.",
        learned: [
          "'모던 자바스크립트 DeepDive'를 탐구한 내용을 기반으로 JavaScript 코어 리뷰를 진행하였습니다.",
          "단순히 결과물만 개발하는 것이 아니라, 코드를 작성하고 협업하는 과정 자체(개발자 경험, DX)를 개선하는 시야를 얻게 되었습니다.",
          "팀원들에게 내 코드의 동작 원리를 설명하고 설득하는 과정을 통해, 내가 아는 것과 모르는 것을 명확히 구분하는 메타인지 능력을 길렀습니다.",
        ],
        links: [
          {
            title: "JavaScript 문법의 중요성을 깨닫게 한 PR 리뷰",
            url: "https://github.com/team-serius/doldol-client/pull/21",
          },
          {
            title: "[Velog] 모던 자바스크립트 Deep Dive 학습 시리즈",
            url: "https://velog.io/@wha1eson/series/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Deep-Dive",
          },
        ],
        images: [
          {
            src: "/assets/images/projects/doldol/troubleshooting/1.png",
            alt: "모던 자바스크립트 Deep Dive 시리즈",
            caption: "모던 자바스크립트 Deep Dive 시리즈",
          },
          {
            src: "/assets/images/projects/doldol/troubleshooting/2.png",
            alt: "팀 내 코드 컨벤션 및 PR 리뷰 진행 화면",
            caption: "팀 내 코드 컨벤션 및 PR 리뷰 진행 화면",
          },
        ],
      },
    ],
  },
};
