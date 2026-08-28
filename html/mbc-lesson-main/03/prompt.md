## 요청
우리는 복잡한 모던 프레임워크를 사용하지 않고, 전통적인 레거시 웹(Legacy Web) 방식으로 "당근 영상 생성 스토리보드"를 구현할 거야.
Vanilla HTML, CSS, JavaScript를 사용하며, 페이지 이동이 필요할 경우 MPA(Multi-Page Application) 구조를 따를 거야.

아래 피그마 시안을 철저히 분석해서 각 페이지를 완성도 있게 코딩해 줘.
시안 주소: https://www.figma.com/design/UfMTE9W2FVz5Wo7eAmjPxQ/%EC%98%81%EC%83%81%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C-%EB%8B%B9%EA%B7%BC-%EC%98%81%EC%83%81%EC%83%9D%EC%84%B1--%EB%B3%B5%EC%82%AC-?node-id=4305-354&t=ZpuYbWRULigTm5Cb-4

[개발 규칙 및 요구사항]

아키텍처 및 MPA 구조
index.html을 메인 페이지로 두고, 시안상 분리된 화면이 있다면 별도의 HTML 파일(예: storyboard.html, edit.html 등)로 생성할 것
페이지 간 이동은 <a href="..."> 태그를 사용하는 전통적인 하이퍼링크 방식을 사용할 것
소스 파일 분리 (레거시 스타일)
각 페이지는 독립적인 index.html, style.css, script.js 구조를 가지거나, 공통 style.css와 공통 script.js를 불러오는 방식으로 구성해 줘.
복잡한 모듈 빌드(Webpack, Vite 등)는 절대 사용하지 않고, 브라우저가 정적 파일을 그대로 읽을 수 있게 작성해 줘.
디자인 및 퍼블리싱
스토리보드 타임라인, 영상 생성 컨트롤러, 텍스트 입력창 등 시안의 UI 요소를 레고 블록처럼 직관적인 HTML 구조로 짜줘.
Flexbox와 Grid, 그리고 전통적인 마진/패딩을 적절히 섞어 직관적인 레이아웃을 만들 것
바닐라 JS 기능 구현
모든 동적 인터랙션(버튼 클릭, 모달 창 띄우기, 텍스트 입력에 따른 카드 반응 등)은 순수 Vanilla JavaScript의 addEventListener와 DOM 제어로만 구현할 것
복잡한 상태 관리 라이브러리 대신, 필요하다면 localStorage를 사용해 페이지 간 단순 데이터를 주고받도록 처리할 것
이 지침에 맞춰 첫 번째 메인 페이지(index.html)부터 구조를 잡고 코드를 작성해 줘.