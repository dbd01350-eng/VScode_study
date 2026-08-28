## 요청
[역할 설정]
너는 디자인 완성도를 극한으로 끌어올리는 프론트엔드 전문 개발자야. 제공하는 피그마 디자인 링크의 특정 노드를 정밀하게 분석하여, 외부의 임의의 브랜딩 스타일을 섞지 말고 해당 피그마 화면에 정의된 컬러, 타이포그래피, 컴포넌트 형태 그대로 HTML, CSS, Vanilla JS 기반의 MPA(Multi-Page Application) 웹사이트를 구현해 줘.

[참고 디자인 링크]

디자인 URL: https://www.figma.com/design/aeGokPUiIfg83aYK0sehTK/%EC%98%81%EC%83%81%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C-%EB%8B%B9%EA%B7%BC-%EC%98%81%EC%83%81%EC%83%9D%EC%84%B1--%EB%B3%B5%EC%82%AC-?node-id=4311-482&t=uO8F8gi0iIePbnen-4

핵심 타겟 노드: node-id=4311-482 (해당 화면의 영상 스토리보드 및 영상 생성 UI)

[요구 사항 및 아키텍처 가이드라인]

피그마 디자인 100% 충실도 (Pixel Perfect):

개발자 임의로 색상이나 스타일을 정의하지 마. 타겟 노드(4311-482)에 사용된 정확한 HEX 컬러 코드, 배경색, 테두리 두께(border-radius/width), 그림자 효과(box-shadow), 폰트 크기 및 두께(font-weight), 요소 간의 여백(Padding/Margin)을 그대로 CSS에 반영해 줘.

텍스트 입력창, 버튼, 카드 레이아웃 등의 형태와 위치 관계를 피그마 내 영역 배치와 동일하게 구현해야 해.

MPA(Multi-Page Application) 및 레거시 웹 구조:

최신 SPA 프레임워크나 빌드 도구(Vite, Webpack 등) 없이, 오직 순수 바닐라 HTML, CSS, JavaScript 파일로만 구성해 줘.

각 화면은 독립된 HTML 파일로 분리하고, <a> 태그 이동 또는 form의 submit을 통해 실제로 페이지가 전환되는 MPA 방식으로 연결해 줘.

예시 구조:

index.html (스토리보드 기획 및 입력 화면)

loading.html (영상 생성 중 대기 화면 - 필요 시)

result.html (최종 생성된 영상 및 결과 확인 화면)

연결 및 데이터 흐름:

첫 번째 페이지에서 사용자가 입력하거나 선택한 데이터가 다음 페이지(결과 페이지)로 전환되었을 때도 유지되어 화면에 렌더링되도록, 브라우저의 localStorage 또는 URL Query String을 활용한 레거시 방식의 데이터 전달 코드를 작성해 줘.

파일 분리 및 외부 자산:

HTML 내부에 스타일을 인라인으로 넣지 말고, css/style.css와 js/main.js 형태로 명확하게 분리해 줘.

화면에 포함된 아이콘이나 이미지 요소는 피그마에 표현된 아이콘 형태와 가장 유사한 SVG 코드를 HTML에 직접 내장(inline SVG)하거나 FontAwesome 등 표준 CDN을 사용해 정갈하게 표현해 줘.