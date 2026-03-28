import { Article } from "@/types/article";

export const ARTICLES_DATA: Article[] = [
  {
    id: "1",
    title: "🚂 달리는 기차의 바퀴를 바꿔라: i18n 다국어 주입기",
    description:
      "라이브 운영 중인 서비스에 SEO 하락 없이 다국어를 도입하며 겪었던 미들웨어와 쿠키 활용기, 그리고 구글 시트 자동화 파이프라인 구축 과정을 공유합니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/59dc025c-067f-47ad-9c5a-d7ad7517d9e2/image.png",
    url: "https://velog.io/@wha1eson/%EB%8B%AC%EB%A6%AC%EB%8A%94-%EA%B8%B0%EC%B0%A8%EC%9D%98-%EB%B0%94%ED%80%B4%EB%A5%BC-%EB%B0%94%EA%BF%94%EB%9D%BC-i18n-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%A3%BC%EC%9E%85%EA%B8%B0",
    date: "2026.03.27",
    topics: ["Next.js"],
    badges: ["⭐ 추천 아티클"],
  },
  {
    id: "2",
    title:
      "🔥 AWS 터진 날, 3시간 동안 배운 것: Vercel과 '남는 컴퓨터'로 생존하기",
    description:
      "AWS 미국 동부-1 (us-east-1) 서버 리전에 문제가 발생해 서비스가 다운된 상황에서, 개인 컴퓨터를 활용하여 백업 서버를 구축하는 개념을 소개합니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/0cedff36-2e1e-4547-b84e-ce507979ef7f/image.png",
    url: "https://velog.io/@wha1eson/AWS-%ED%84%B0%EC%A7%84-%EB%82%A0-3%EC%8B%9C%EA%B0%84-%EB%8F%99%EC%95%88-%EB%B0%B0%EC%9A%B4-%EA%B2%83-Vercel%EA%B3%BC-%EB%82%A8%EB%8A%94-%EC%BB%B4%ED%93%A8%ED%84%B0%EB%A1%9C-%EC%83%9D%EC%A1%B4%ED%95%98%EA%B8%B0",
    date: "2025.10.21",
    topics: ["Infra"],
    badges: ["🔥 일간 트렌드 1위"],
  },
  {
    id: "3",
    title: "React Hook Form INP 3,912ms 97% 성능 개선기 🚀",
    description:
      "React Hook Form의 INP(Interaction to Next Paint) 성능 개선을 위한 최적화 과정을 공유합니다. 3,912ms에서 97% 개선된 경험을 통해 React Hook Form의 내부 동작과 최적화 전략을 살펴봅니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/40871b19-c26c-48a9-88fa-fc74a3d1b689/image.png",
    url: "https://velog.io/@wha1eson/React-Hook-Form-INP-3912ms-97-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%EA%B8%B0",
    date: "2025.10.16",
    topics: ["React"],
  },
  {
    id: "4",
    title: "Nextjs, Turborepo react-toastify 토스트 적용기",
    description:
      "Nextjs와 Turborepo 환경에서 react-toastify 라이브러리를 활용하여 사용자에게 피드백을 제공하는 토스트 알림 시스템을 구현한 경험을 공유합니다.",
    url: "https://wha1estory.notion.site/Nextjs-Turborepo-react-toastify-756ac4fd311a4712a5710d183be6ba31",
    date: "2024.04.17",
    topics: ["Next.js"],
  },
  {
    id: "5",
    title: "Nextjs에 음악 Player 시스템 구축",
    description:
      "Nextjs 프로젝트에 음악 Player 시스템을 구축한 경험을 공유합니다. React Context API를 활용하여 글로벌 상태 관리를 구현하고, 사용자 인터페이스와 상호작용하는 방법을 살펴봅니다.",
    thumbnail:
      "https://wha1estory.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8bf06e17-0bd9-413c-8f8f-5d7c0d2237a7%2Fdc5810e3-7022-48b9-8c5e-27cfb14acd61%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2024-04-17_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.14.33.png?table=block&id=f2c46b64-09b9-44b8-83c1-1184ea35d956&spaceId=8bf06e17-0bd9-413c-8f8f-5d7c0d2237a7&width=1410&userId=&cache=v2",
    url: "https://wha1estory.notion.site/Nextjs-Player-51d90b0d825c468d87376b9f7aa96961?pvs=74",
    date: "2025.10.16",
    topics: ["Next.js"],
  },
  {
    id: "6",
    title:
      "tanstack mutationKey 값으로 인한 Maximum call stack size exceeded 이슈",
    description:
      "Vue 환경에서 tanstack query의 mutationKey 값이 객체로 전달될 때 발생하는 'Maximum call stack size exceeded' 이슈에 대한 원인 분석과 해결 방법을 공유합니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/45be3414-146f-4c81-9b92-3da70fb03395/image.png",
    url: "https://velog.io/@wha1eson/tanstack-mutationKey-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%95%9C-Maximum-call-stack-size-exceeded-%EC%9D%B4%EC%8A%88",
    date: "2025.08.05",
    topics: ["Vue.js"],
  },
  {
    id: "7",
    title: "프론트엔드 스켈레톤 프로젝트 ($nap)",
    description:
      "소비 습관을 주식 차트 형식으로 시각화하는 프론트엔드 스켈레톤 프로젝트를 소개합니다. Vue.js와 JavaScript를 활용하여 기본적인 UI 컴포넌트와 상태 관리를 구현한 경험을 공유합니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/02804ce3-a63f-425c-9246-da59f80e7636/image.png",
    url: "https://velog.io/@wha1eson/KB-ITs-Your-Life-6%EA%B8%B0-6%EC%A3%BC%EC%B0%A8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%8A%A4%EC%BC%88%EB%A0%88%ED%86%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-nap",
    date: "2025.04.15",
    topics: ["Vue.js", "Project"],
    badges: ["⭐ 추천 아티클"],
  },
  {
    id: "8",
    title: "[React] useState Hook을 const로 쓰는 이유",
    description:
      "React의 useState Hook을 const로 선언하는 이유에 대한 설명과 함께, 상태 관리에서의 불변성 유지와 코드 가독성 향상에 어떻게 기여하는지 살펴봅니다.",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/b1a7140b-cc62-4dec-95ec-aae8602f1f40/image.png",
    url: "https://velog.io/@wha1eson/React-useState-Hook%EC%9D%84-const%EB%A1%9C-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0",
    date: "2024.04.17",
    topics: ["React", "JavaScript"],
    badges: ["⭐ 추천 아티클"],
  },
  {
    id: "10",
    title: "모던 자바스크립트 시리즈",
    description:
      "모던 자바스크립트 도서를 기반으로 JavaScript의 핵심 개념과 최신 기능들을 설명하는 시리즈입니다.",
    date: "2025.02.20",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/ea4581b4-5c46-4205-905a-67c14acf2d62/image.png",
    url: "https://velog.io/@wha1eson/series/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Deep-Dive",
    topics: ["JavaScript"],
  },
  {
    id: "11",
    title: "KB IT's Your Life 6기 시리즈",
    description: "KB IT's Your Life 6기에서 다룬 주제들을 정리한 시리즈입니다.",
    date: "2025.02.19",
    thumbnail:
      "https://velog.velcdn.com/images/wha1eson/post/5c0a60d0-0439-43ca-b31c-25e56aaefbef/image.png",
    url: "https://velog.io/@wha1eson/series/KB-ITs-Your-Life-6%EA%B8%B0",
    topics: ["Java", "Vue.js", "Database"],
  },
];
