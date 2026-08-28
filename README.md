# Web Development Study Archive

VS Code를 사용하여 학습하고 직접 구현한 HTML, CSS, JavaScript 및 웹 개발 실습 과제를 한곳에 모아 시각화한 **Web Development Study Archive** 포트폴리오 웹사이트입니다.

기존에 작성된 실습 파일과 폴더 구조를 복사하거나 수정하지 않고, 상대경로 참조 방식을 통해 원본 소스 코드를 그대로 유지하면서 대시보드 인터페이스로 큐레이션하였습니다.

---

## 🌐 Live Demo

- **Archive 웹사이트**: [https://dbd01350-eng.github.io/VScode_study/archive/](https://dbd01350-eng.github.io/VScode_study/archive/)
- **GitHub Repository**: [https://github.com/dbd01350-eng/VScode_study](https://github.com/dbd01350-eng/VScode_study)

---

## ✨ Features (주요 기능)

- **Study Archive**: 전체 48개 실습 프로젝트 큐레이션 (HTML, CSS, JS, GSAP, Swiper, Tailwind 등)
- **Live Preview**: 원본 HTML 실습 파일을 대시보드 내 모달 iframe으로 즉시 미리보기
- **Real-time Search**: 프로젝트 제목, 설명, 사용 기술, 핵심 개념 실시간 검색
- **Category Filter**: 기술 스택별(All, HTML, CSS, JavaScript, GSAP, Swiper, Tailwind, Projects) 필터링
- **Project Detail Modal**: 각 실습의 학습 목표, 핵심 개념, 사용 기술, 원본 소스 보기 링크 제공
- **Learning Journey**: 기초부터 프로젝트까지 5단계 실제 학습 여정 시각화
- **Responsive Design & Pretendard Typography**: 데스크톱·태블릿·모바일 반응형 레이아웃 및 가독성 높은 Pretendard 폰트 적용

---

## 🛠️ Technologies (사용 기술)

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Pretendard Font
- **Libraries & Frameworks**: GSAP (ScrollTrigger), Swiper.js, Tailwind CSS, React, Vue
- **Backend / Utilities**: Python (FastAPI/Flask 백엔드 및 모듈 실습)
- **Deployment**: Git, GitHub, GitHub Pages

---

## 📁 Repository Structure (프로젝트 구조)

`	ext
VScode_study/
├── archive/                # 포트폴리오 아카이브 대시보드 웹사이트
│   ├── index.html          # 메인 아카이브 페이지
│   ├── css/
│   │   └── style.css       # 아카이브 웹사이트 전용 스타일시트
│   └── js/
│       ├── data.js         # 프로젝트 48개 메타데이터 데이터셋
│       └── script.js       # 필터링, 검색, 모달 및 애니메이션 로직
│
├── chatbot/                # 챗봇 UI 및 Python 백엔드 실습
├── gsap/                   # GSAP 애니메이션 & ScrollTrigger 실습 (01~10.html)
├── html/                   # HTML/CSS/JS 기초 실습 및 과제
│   ├── 01/                 # HTML 기초 태그, 표, 폼 요소 실습
│   ├── 02/                 # CSS 레이아웃, Flexbox, Grid, 애니메이션, 카페 포스터
│   ├── 03/                 # JavaScript DOM 조작, 이벤트, 반복문, 갤러리
│   ├── 04/                 # JavaScript ES6 모듈, this 키워드 실습
│   ├── docs/               # HTML/CSS 구조 및 네이밍 규칙 참고 가이드
│   ├── mbc-lesson-main/    # MBC 아카데미 수업 요약 인덱스 및 종합 실습
│   ├── request/            # 방문자 요청 폼
│   └── vibe/               # Figma-to-Code Action Sheet 컴포넌트
├── python/                 # Python 기초 프로젝트 및 이미지 처리
├── spa/                    # React & Vue SPA 실험 프로젝트
├── swiper/                 # Swiper.js 이미지 슬라이더 실습
├── tailwind/               # Tailwind CSS 유틸리티 퍼스트 디자인 실습
├── .gitignore              # GitHub 업로드 제외 설정
└── README.md               # 프로젝트 안내 문서
`

---

## 🚀 How to Run Locally (로컬 실행 방법)

1. 리포지토리 클론:
   `ash
   git clone https://github.com/dbd01350-eng/VScode_study.git
   cd VScode_study
   `
2. VS Code에서 rchive/index.html 파일을 열고 **Live Server** 확장으로 실행하거나, 웹 브라우저에서 직접 rchive/index.html을 클릭하여 실행합니다.

---

## 👤 Author

- **심다은 (Sim Da-eun)**
- **교육기관**: MBC 아카데미 종로 캠퍼스 (웹 개발 과정)
- **학습 기간**: 2025 – 2026
