# 🧑‍💻 Frontend Developer Portfolio

프론트엔드 개발자 포트폴리오 웹사이트입니다.
그동안 진행해 온 프로젝트의 상세한 트러블 슈팅 과정과 기술 블로그에 작성한 아티클들을 모아 보기 쉽게 구성했습니다.

## 🚀 Features

- **메인 및 프로필 (`/`, `/profile`)**
  - 개발자로서의 가치관과 핵심 역량을 소개하는 랜딩 및 프로필 페이지입니다.
- **프로젝트 쇼케이스 (`/projects`, `/projects/[id]`)**
  - 각 프로젝트별 기여도, 성과, 트러블 슈팅 경험을 체계적으로 제공합니다.
  - `TableOfContents (TOC)`를 통해 긴 상세 페이지에서도 원하는 섹션으로 빠르게 이동할 수 있습니다.
- **기술 아티클 (`/articles`)**
  - 기술 블로그에 작성한 글들을 태그(주제) 및 칭호(Badge)별로 분류하여 제공합니다.
  - `Debounce`가 적용된 검색 기능과 부드러운 필터링 애니메이션(`Framer Motion`)을 지원합니다.
- **사용자 경험(UX) 및 리소스 최적화**
  - 커스텀 404 페이지(`not-found.tsx`)를 통해 잘못된 접근 시에도 유저 이탈을 방지합니다.

## 🛠 Tech Stack

- **Framework:** Next.js 14/15 (App Router), React
- **Language:** TypeScript
- **Styling & UI:** TailwindCSS, `lucide-react` (Icons), `shadcn/ui`
- **Animation:** Framer Motion
- **Deployment:** Vercel

## 📂 Project Structure

```bash
📦app
 ┣ 📂articles
 ┃ ┗ 📜page.tsx        # 아티클 리스트 및 검색/필터 페이지
 ┣ 📂profile
 ┃ ┗ 📜page.tsx        # 개발자 소개 및 이력 페이지
 ┣ 📂projects
 ┃ ┣ 📂[id]
 ┃ ┃ ┗ 📜page.tsx      # 개별 프로젝트 상세 및 트러블 슈팅 페이지
 ┃ ┣ 📜layout.tsx      # 프로젝트 섹션 전용 레이아웃
 ┃ ┗ 📜page.tsx        # 프로젝트 리스트 페이지
 ┣ 📜favicon.ico
 ┣ 📜globals.css       # 전역 스타일 및 Tailwind CSS 설정
 ┣ 📜layout.tsx        # Root Layout (GNB, Footer 등)
 ┣ 📜not-found.tsx     # 커스텀 404 에러 페이지
 ┗ 📜page.tsx          # 홈(메인) 랜딩 페이지
```

## 💻 Getting Started

1. 레포지토리를 클론합니다.

```bash
git clone https://github.com/wherewhale/portfolio.git
```

2. 패키지를 설치합니다.

```bash
npm install
```

3. 개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인합니다.

---

## ⚠️ Notice / License

본 저장소의 코드와 UI/UX 디자인은 개인의 노력과 경험이 담긴 포트폴리오 결과물입니다.

템플릿이나 코드를 참고하거나 활용하고자 하시는 경우, **반드시 Repository를 Fork**하여 사용해 주시고 사전에 **원작자(Github Issue)에게 허락**을 구해주시기 바랍니다.

사전 동의 없는 무단 복제, 배포 및 상업적 이용을 엄격히 금지합니다.
