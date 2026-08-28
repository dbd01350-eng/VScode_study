# VS Code Web Development Study Archive Portfolio

현재 폴더에는 VS Code를 사용하여 학습하고 실습한 HTML, CSS, JavaScript 및 다양한 웹 개발 관련 파일들이 이미 폴더별로 정리되어 있습니다.

이 작업의 목적은 **현재 폴더의 기존 구조와 파일을 그대로 유지하면서**, 그 안에 있는 모든 실습 내용을 한눈에 볼 수 있도록 정리한 **Web Development Study Archive 웹사이트​**를 새롭게 제작하는 것입니다.

이 웹사이트 자체를 향후 **포트폴리오에 포함할 예정**이므로 단순한 학습 기록 페이지가 아니라, 디자인과 프론트엔드 구현 능력을 보여줄 수 있는 완성도 높은 개인 프로젝트 수준으로 제작해주세요.

---

# 1. 가장 중요한 원칙 — 기존 파일과 폴더를 절대 변경하지 말 것

이 프로젝트에서 가장 중요한 조건입니다.

현재 폴더에 존재하는 모든 파일과 폴더는 **원래 위치와 구조를 그대로 유지해야 합니다.**

다음 작업은 절대 하지 마세요.

- 기존 파일 이동 금지
- 기존 파일 복사 금지
- 기존 파일 이름 변경 금지
- 기존 폴더 이름 변경 금지
- 기존 폴더 구조 변경 금지
- 기존 실습 파일을 새로운 폴더로 재분류하여 이동 금지
- HTML/CSS/JavaScript 파일을 하나의 폴더로 합치지 말 것
- 기존 실습 코드 임의 수정 금지
- 기존 파일을 Archive 폴더 안으로 복사하지 말 것

**현재 폴더 구조 자체가 나의 학습 과정과 기록이므로 그대로 보존해야 합니다.**

---

# 2. Archive는 별도의 웹사이트로 제작

기존 파일을 정리하거나 재배치하는 대신, 현재 프로젝트의 최상위에 별도의 Archive 폴더를 추가하세요.

예:

```text
project/
│
├── 기존 폴더 및 파일들
│
├── 01_HTML/
├── 02_CSS/
├── 03_JavaScript/
├── 04_Projects/
│
└── archive/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
```

실제 폴더 구조는 현재 프로젝트를 먼저 확인한 후 그 구조에 맞춰 작업하세요.

**기존 파일은 Archive 폴더로 이동하거나 복사하지 않습니다.**

Archive 웹사이트가 기존 파일의 경로를 직접 참조하도록 구성하세요.

예:

```html
<iframe src="../01_HTML/example.html"></iframe>
```

---

# 3. 작업 시작 전 현재 폴더 전체 분석

코드를 작성하기 전에 현재 폴더를 먼저 전체적으로 분석하세요.

확인할 내용:

- 전체 폴더 구조
- 각 폴더의 역할
- HTML 파일
- CSS 파일
- JavaScript 파일
- 이미지 및 assets
- 프로젝트 파일
- 파일 간 연결 관계
- HTML과 CSS/JS의 연결 관계
- 실행 가능한 프로젝트
- 독립적으로 실행할 수 없는 코드

**파일의 실제 내용을 확인한 후 Archive의 정보를 구성하세요.**

존재하지 않는 프로젝트나 기술을 임의로 만들어내지 마세요.

---

# 4. 기존 폴더 구조를 Archive의 기본 구조로 사용

기존 폴더를 임의로 새로운 구조로 재분류하지 마세요.

예를 들어 현재 폴더가:

```text
01_HTML/
02_CSS/
03_JavaScript/
04_Projects/
```

라면 Archive에서도 이 구조를 기본 카테고리로 활용하세요.

즉,

**파일 시스템의 실제 구조 = Archive의 기본 정보 구조**

가 되도록 합니다.

파일이 실제로:

```text
03_JavaScript/example.js
```

에 있다면 Archive에서도 해당 파일의 원래 위치를 명확하게 보여주세요.

예:

```text
03_JavaScript
example.js
```

---

# 5. 파일 내용은 분석하되 파일은 이동하지 말 것

각 실습 파일을 분석하여 다음 정보를 생성하세요.

- File Name
- Original Folder
- File Path
- Category
- Technologies
- Key Concept
- Learning Objective
- Short Description
- Difficulty
- Preview Availability

예를 들어:

```text
03_JavaScript
example.js

DOM Event Practice

JavaScript · DOM · Event

DOM 요소를 선택하고 이벤트를 처리하는 방법을 학습한 실습입니다.

[View Project]
[View Code]
```

여기서 분류와 설명은 **Archive 웹사이트에서만 표현**하고 실제 파일 위치는 변경하지 마세요.

---

# 6. 프로젝트의 전체 디자인 방향

전체적인 디자인은 **개발자 포트폴리오 + 디자인 포트폴리오**의 중간 지점으로 제작해주세요.

단순한 학습 노트나 파일 관리자처럼 보이지 않아야 합니다.

Design Keywords:

- Minimal
- Modern
- Editorial
- Developer Portfolio
- Clean
- Structured
- Premium
- Typography-focused
- Subtle Interaction

전체적으로 충분한 whitespace를 사용하고 정교한 grid system을 적용해주세요.

화이트 또는 밝은 배경을 기본으로 사용하고 검정색 중심의 typography와 제한적인 accent color를 사용하세요.

과도한 gradient, glassmorphism, 3D 효과, 과도한 animation은 피하세요.

**깔끔하지만 밋밋하지 않고, 개발자 포트폴리오로 봤을 때 세련된 디자인​**을 목표로 합니다.

---

# 7. Hero Section

첫 화면은 강한 타이포그래피 중심의 Hero Section으로 구성해주세요.

메인 타이틀:

**Web Development Study Archive**

서브 카피:

**A curated collection of web development exercises and experiments built while learning HTML, CSS, and JavaScript.**

또는 실제 사이트의 전체 톤에 맞춰 자연스럽게 수정할 수 있습니다.

Hero에는 현재 폴더를 분석하여 실제 데이터를 기반으로 한 통계 정보를 보여주세요.

예:

- Total Projects
- HTML
- CSS
- JavaScript
- Responsive
- Interactive

숫자는 실제 파일을 분석하여 가능한 경우 자동으로 계산하세요.

임의의 숫자를 사용하지 마세요.

---

# 8. Navigation

상단에는 sticky navigation을 사용해주세요.

메뉴:

- Home
- All Projects
- HTML
- CSS
- JavaScript
- Responsive
- About

현재 폴더 구조에 더 적절한 카테고리가 있다면 실제 폴더 구조에 맞게 조정할 수 있습니다.

스크롤에 따라 active navigation 상태가 자연스럽게 변경되도록 구현해주세요.

---

# 9. Project Archive

가장 핵심적인 영역입니다.

현재 폴더 안의 실습 내용을 각각 하나의 Project Card로 보여주세요.

각 카드에는:

- Project Number
- File Name
- Original Folder
- Project Title
- Category
- Short Description
- Technologies
- Key Concept
- Difficulty
- Preview
- View Code

를 포함하세요.

예:

```text
01

Responsive Navigation

01_CSS

CSS · Responsive · Media Query

A responsive navigation exercise focused on media queries
and flexible layout behavior.

[Preview]
[View Code]
```

프로젝트 제목과 설명은 파일의 실제 코드와 내용을 분석하여 작성하세요.

---

# 10. 실제 Preview 제공

가능한 HTML 프로젝트는 실제 결과물을 Preview할 수 있도록 구현하세요.

가능하면 iframe을 사용하여 **원본 HTML 파일을 직접 참조**하세요.

예:

```html
<iframe src="../01_HTML/example.html"></iframe>
```

절대로 HTML 파일을 Archive 폴더에 복사하지 마세요.

Preview는 실제 원본 파일을 그대로 보여줘야 합니다.

CSS와 JavaScript가 연결되어 있는 경우 실제 실행 결과가 정상적으로 나타나도록 기존 프로젝트의 상대경로와 의존관계를 분석하세요.

---

# 11. 실행할 수 없는 파일 처리

모든 파일이 독립적인 웹페이지는 아닐 수 있습니다.

실행할 수 없는 JavaScript, CSS 또는 코드 실습은 억지로 Preview를 만들지 마세요.

이 경우:

- Code Only
- Source File
- View Code

형태로 보여주세요.

실행 가능 여부를 실제 파일 구조를 기준으로 판단하세요.

---

# 12. Project Detail

Project Card를 클릭하면 상세 정보를 볼 수 있도록 구현하세요.

Modal 또는 별도의 Detail View를 사용할 수 있습니다.

상세 화면에는:

- Project Title
- Original File Path
- Learning Objective
- Technologies
- Key Concepts
- Implementation
- Preview
- Important Code
- What I Learned

를 포함하세요.

단순히 코드만 보여주지 말고,

**“무엇을 배우기 위해 어떤 것을 구현했는가?”**

가 명확하게 보이도록 구성하세요.

---

# 13. 검색 및 필터

실습 파일이 많아져도 쉽게 찾을 수 있도록 검색 및 필터 기능을 구현해주세요.

기능:

- Search
- All
- HTML
- CSS
- JavaScript
- Responsive
- Animation
- DOM
- 기타 실제 분석된 기술

단, 필터를 위해 실제 파일이나 폴더를 이동시키면 안 됩니다.

**필터링은 오직 Archive UI에서만 처리하세요.**

검색 결과는 즉시 반영되도록 구현하세요.

---

# 14. Learning Journey

가능하다면 기존 폴더 구조와 실습 내용을 기반으로 학습 흐름을 시각적으로 보여주는 섹션을 추가해주세요.

예:

```text
01 — Fundamentals
HTML / CSS Basics

↓

02 — Layout
Flexbox / Grid / Position

↓

03 — Interaction
JavaScript / DOM / Events

↓

04 — Responsive
Media Query / Responsive UI

↓

05 — Projects
Web Page Implementation
```

단, 이 단계는 실제 폴더와 파일 내용을 분석한 후 존재하는 학습 흐름을 바탕으로 구성해야 합니다.

**실제로 학습하지 않은 내용을 임의로 추가하지 마세요.**

---

# 15. Interaction

사이트 자체에서도 프론트엔드 역량이 드러나도록 적절한 interaction을 구현해주세요.

예:

- Card hover
- Smooth transition
- Scroll reveal
- Active navigation
- Filter transition
- Modal transition
- Button hover
- Preview interaction

하지만 animation은 과도하게 사용하지 마세요.

**세련되고 절제된 인터랙션**을 목표로 합니다.

---

# 16. Responsive Design

Desktop, Tablet, Mobile 모두에서 완벽하게 작동하도록 제작하세요.

특히:

- Navigation
- Hero
- Statistics
- Project Grid
- Search
- Filters
- Project Detail
- Typography
- Spacing
- Preview

를 반응형으로 구성하세요.

모바일에서:

- 가로 스크롤이 발생하지 않아야 함
- 카드가 깨지지 않아야 함
- 텍스트가 잘리지 않아야 함
- 버튼이 겹치지 않아야 함
- iframe Preview가 화면 밖으로 나가지 않아야 함

을 확인하세요.

---

# 17. 데이터 구조

프로젝트 정보를 HTML에 하드코딩하여 반복해서 작성하지 말고 가능하면 JavaScript 객체 또는 JSON 형태로 관리하세요.

예:

```javascript
const projects = [
  {
    title: "...",
    file: "...",
    path: "...",
    category: "...",
    technologies: [],
    description: "...",
    difficulty: "...",
    preview: "..."
  }
];
```

이 구조를 사용하면 앞으로 새로운 실습 파일을 추가했을 때 Archive에 쉽게 등록할 수 있도록 설계할 수 있습니다.

단, 자동화가 가능한 범위에서는 실제 파일 구조를 기반으로 데이터를 구성하세요.

---

# 18. Accessibility

포트폴리오 수준의 웹사이트이므로 기본적인 accessibility도 고려하세요.

- Semantic HTML
- Proper heading hierarchy
- Alt text
- Keyboard navigation
- Focus state
- 버튼과 링크의 명확한 구분
- 충분한 contrast
- 적절한 aria-label

을 적용하세요.

---

# 19. 코드 품질

코드는 깔끔하고 유지보수하기 쉽게 작성해주세요.

가능하면:

```text
archive/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
```

형태로 구성하세요.

불필요한 라이브러리나 프레임워크를 추가하지 말고 현재 프로젝트 환경에서 가장 자연스러운 방법을 사용하세요.

기존 실습 파일의 코드를 수정해서 Archive를 구현하지 마세요.

---

# 20. 절대 하지 말아야 할 것

다음 행동은 금지합니다.

❌ 기존 파일 이동  
❌ 기존 파일 복사  
❌ 기존 파일 이름 변경  
❌ 기존 폴더 이름 변경  
❌ 기존 폴더 구조 변경  
❌ 기존 실습 코드 수정  
❌ 파일을 새로운 카테고리별 폴더로 재배치  
❌ HTML/CSS/JS 파일 통합  
❌ 존재하지 않는 프로젝트 생성  
❌ 존재하지 않는 학습 내용 생성  
❌ 실제 파일과 다른 경로 표시

---

# 21. 최종 결과의 개념

최종 구조는 다음과 같아야 합니다.

```text
┌──────────────────────────────────────┐
│                                      │
│        EXISTING PROJECT FILES        │
│                                      │
│   기존 폴더와 파일은 그대로 유지      │
│                                      │
└──────────────────┬───────────────────┘
                   │
                   │ 직접 참조
                   ▼
┌──────────────────────────────────────┐
│          STUDY ARCHIVE               │
│                                      │
│  Hero                                │
│  Statistics                          │
│  Navigation                          │
│  Search / Filter                     │
│  Project Archive                     │
│  Project Preview                     │
│  Project Detail                      │
│  Learning Journey                    │
│                                      │
└──────────────────────────────────────┘
```

즉,

**기존 파일을 정리하는 것이 아니라 기존 파일을 아름답게 보여주는 웹사이트를 만드는 것**이 최종 목표입니다.

---

# 22. 작업 순서

다음 순서로 작업하세요.

### STEP 1
현재 폴더의 전체 구조와 파일을 분석합니다.

### STEP 2
기존 파일과 폴더의 위치를 변경하지 않고 그대로 유지합니다.

### STEP 3
기존 파일들의 내용을 분석합니다.

### STEP 4
각 파일의 프로젝트 정보와 카테고리를 결정합니다.

### STEP 5
최상위에 `archive` 폴더만 새롭게 생성합니다.

### STEP 6
Archive 웹사이트를 제작합니다.

### STEP 7
기존 파일을 실제 경로로 연결합니다.

### STEP 8
가능한 프로젝트는 실제 Preview를 제공합니다.

### STEP 9
검색 / 필터 / 상세보기 / 반응형 / 인터랙션을 구현합니다.

### STEP 10
최종적으로 기존 파일과 폴더가 작업 전과 동일한 위치에 있는지 확인합니다.

---

# 최종 목표

이 웹사이트를 방문한 사람이 단순히

“HTML, CSS, JavaScript를 공부했구나.”

라고 생각하는 것이 아니라,

**“이 사람은 학습한 내용을 직접 구현하고, 구조화하고, 디자인하고, 실제 웹사이트로 완성할 수 있구나.”**

라는 인상을 받을 수 있도록 제작해주세요.

따라서 결과물은 단순한 **Study Notes**가 아니라,

**Web Development Study Archive + Interactive Portfolio**

수준의 완성도를 목표로 합니다.

그리고 가장 중요한 원칙은 다시 한 번 강조합니다.

> **기존 파일과 폴더는 절대 이동하거나 복사하거나 재구성하지 않습니다.**
>
> **기존 프로젝트는 그대로 보존하고, 새롭게 추가되는 `archive` 웹사이트에서 기존 파일을 직접 참조하여 보여주세요.**