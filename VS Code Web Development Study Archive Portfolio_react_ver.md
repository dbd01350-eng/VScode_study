# VS Code Web Development Study Archive Portfolio (React Ver.)

현재 폴더에는 VS Code를 사용하여 학습하고 실습한 HTML, CSS, JavaScript 및 다양한 웹 개발 관련 파일들이 이미 폴더별로 정리되어 있습니다.

이 작업의 목적은 **현재 폴더의 기존 구조와 파일을 그대로 유지하면서**, 그 안에 있는 모든 실습 내용을 한눈에 볼 수 있도록 정리한 **React 기반의 Web Development Study Archive 웹사이트**를 새롭게 제작하는 것입니다.

이 웹사이트 자체를 향후 **포트폴리오에 포함할 예정**이므로 단순한 학습 기록 페이지가 아니라, React 컴포넌트 설계 능력, 상태 관리, 훅(Hooks) 활용, 반응형 UI 및 모던 프론트엔드 구현 능력을 입증할 수 있는 완성도 높은 프로젝트 수준으로 제작해주세요.

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

# 2. Archive는 별도의 React 프로젝트로 제작

기존 파일을 정리하거나 재배치하는 대신, 현재 프로젝트의 최상위에 별도의 React(Vite 추천) 프로젝트 폴더인 `archive`를 추가하세요.

예:

```text
project/
│
├── 기존 폴더 및 파일들
│   ├── 01_HTML/
│   ├── 02_CSS/
│   ├── 03_JavaScript/
│   └── 04_Projects/
│
└── archive/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── components/
        │   ├── layout/
        │   │   ├── Header.jsx
        │   │   └── Footer.jsx
        │   ├── hero/
        │   │   ├── HeroSection.jsx
        │   │   └── StatCard.jsx
        │   ├── project/
        │   │   ├── ProjectGrid.jsx
        │   │   ├── ProjectCard.jsx
        │   │   ├── ProjectDetailModal.jsx
        │   │   ├── ProjectPreview.jsx
        │   │   └── CodeViewer.jsx
        │   ├── filter/
        │   │   ├── SearchBar.jsx
        │   │   └── CategoryFilter.jsx
        │   └── journey/
        │       └── LearningJourney.jsx
        ├── hooks/
        │   ├── useProjects.js
        │   ├── useFilter.js
        │   └── useScrollSpy.js
        ├── data/
        │   └── projectsData.js
        └── styles/
            └── main.css
```

실제 폴더 구조는 현재 프로젝트를 먼저 확인한 후 그 구조에 맞춰 작업하세요.

**기존 파일은 Archive 폴더로 이동하거나 복사하지 않습니다.**

Archive React 앱의 컴포넌트가 기존 파일의 상위 경로를 직접 참조하도록 구성하세요.

예 (React Component):

```jsx
<iframe 
  src={`../../01_HTML/${project.fileName}`} 
  title={project.title}
  className="w-full h-full border-0"
/>
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

**파일의 실제 내용을 확인한 후 React 데이터 구조(`projectsData.js`)를 구성하세요.**

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

라면 Archive에서도 이 구조를 기본 카테고리 및 필터링 기준으로 활용하세요.

즉,

**파일 시스템의 실제 구조 = React 앱의 데이터 카테고리 구조**

가 되도록 합니다.

파일이 실제로:

```text
03_JavaScript/example.js
```

에 있다면 React 컴포넌트(`ProjectCard`)에서도 해당 파일의 원래 위치를 명확하게 props로 전달받아 보여주세요.

예:

```text
Category: 03_JavaScript
Path: 03_JavaScript/example.js
```

---

# 5. 파일 내용은 분석하되 파일은 이동하지 말 것

각 실습 파일을 분석하여 React 데이터 모듈(`projectsData.js`) 또는 JSON 파일로 다음 정보 객체를 생성하세요.

- `id`: Unique Identifier
- `fileName`: String
- `originalFolder`: String
- `filePath`: String (상대 경로)
- `category`: Category Type
- `technologies`: Array<String>
- `keyConcept`: String
- `learningObjective`: String
- `shortDescription`: String
- `difficulty`: 'Basic' | 'Intermediate' | 'Advanced'
- `previewAvailable`: Boolean

예시 데이터 스키마 (JS Object):

```javascript
export const projectsData = [
  {
    id: "js-dom-event-01",
    fileName: "example.js",
    originalFolder: "03_JavaScript",
    filePath: "../03_JavaScript/example.js",
    title: "DOM Event Practice",
    category: "03_JavaScript",
    technologies: ["JavaScript", "DOM", "Event"],
    keyConcept: "이벤트 리스너 및 DOM 조작",
    learningObjective: "DOM 요소를 선택하고 이벤트를 처리하는 방법 학습",
    shortDescription: "DOM 요소를 선택하고 이벤트를 처리하는 방법을 학습한 실습입니다.",
    difficulty: "Basic",
    previewAvailable: false
  }
];
```

여기서 분류와 설명은 **React state 및 UI 컴포넌트에서만 표현**하고 실제 파일 위치는 변경하지 마세요.

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

전체적으로 충분한 whitespace를 사용하고 정교한 React 컴포넌트 그리드 레이아웃을 적용해주세요.

화이트 또는 밝은 배경을 기본으로 사용하고 검정색 중심의 typography와 제한적인 accent color를 사용하세요.

과도한 gradient, glassmorphism, 3D 효과, 과도한 animation은 피하세요.

**깔끔하지만 밋밋하지 않고, React 모던 포트폴리오로 봤을 때 세련된 디자인**을 목표로 합니다.

---

# 7. Hero Section (`<HeroSection />`)

첫 화면은 강한 타이포그래피 중심의 `<HeroSection />` 컴포넌트로 구성해주세요.

메인 타이틀:

**Web Development Study Archive**

서브 카피:

**A curated collection of web development exercises and experiments built while learning HTML, CSS, and JavaScript.**

또는 실제 사이트의 전체 톤에 맞춰 자연스럽게 수정할 수 있습니다.

Hero에는 현재 폴더를 분석하여 `projectsData`에서 동적으로 계산(useMemo 등)한 통계 정보 컴포넌트(`<StatCard />`)를 보여주세요.

예:

- Total Projects (`projectsData.length`)
- HTML (`countByCategory('HTML')`)
- CSS (`countByCategory('CSS')`)
- JavaScript (`countByCategory('JavaScript')`)
- Responsive
- Interactive

숫자는 React 컴포넌트 내에서 데이터를 분석하여 자동으로 계산하세요.

임의의 숫자를 하드코딩하지 마세요.

---

# 8. Navigation (`<Header />` & Navigation Hooks)

상단에는 sticky navigation 컴포넌트(`Header.jsx`)를 사용해주세요.

메뉴:

- Home
- All Projects
- HTML
- CSS
- JavaScript
- Responsive
- About

현재 폴더 구조에 더 적절한 카테고리가 있다면 실제 폴더 구조에 맞게 조정할 수 있습니다.

Custom Hook(`useScrollSpy` 등) 또는 Intersection Observer API를 활용하여 스크롤 위치에 따라 active navigation 상태가 자연스럽게 변경되도록 구현해주세요.

---

# 9. Project Archive (`<ProjectGrid />` & `<ProjectCard />`)

가장 핵심적인 영역입니다.

현재 폴더 안의 실습 내용을 각각 하나의 `<ProjectCard />` 컴포넌트로 보여주세요.

각 카드 컴포넌트는 다음 Props 데이터를 전달받아 렌더링합니다:

- `projectNumber`
- `fileName`
- `originalFolder`
- `title`
- `category`
- `shortDescription`
- `technologies`
- `keyConcept`
- `difficulty`
- `previewAvailable`
- `onSelectProject` (상세 모달 오픈 핸들러)

예시 컴포넌트 구조:

```jsx
<ProjectCard
  key={project.id}
  project={project}
  onOpenDetail={() => setSelectedProject(project)}
/>
```

프로젝트 제목과 설명은 파일의 실제 코드와 내용을 분석하여 작성하세요.

---

# 10. 실제 Preview 제공 (`<ProjectPreview />`)

가능한 HTML 프로젝트는 실제 결과물을 Preview할 수 있도록 React 컴포넌트(`<ProjectPreview />`)로 구현하세요.

가능하면 `iframe`을 사용하여 **원본 HTML 파일을 직접 참조**하세요.

예 (React Component):

```jsx
function ProjectPreview({ filePath, title }) {
  return (
    <div className="preview-container">
      <iframe
        src={filePath}
        title={`Preview - ${title}`}
        className="preview-iframe"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
```

절대로 HTML 파일을 Archive 폴더 안으로 복사하지 마세요.

Preview는 실제 원본 파일을 그대로 보여줘야 합니다.

CSS와 JavaScript가 연결되어 있는 경우 실제 실행 결과가 정상적으로 나타나도록 기존 프로젝트의 상대경로와 의존관계를 분석하세요.

---

# 11. 실행할 수 없는 파일 처리 (`<CodeViewer />`)

모든 파일이 독립적인 웹페이지는 아닐 수 있습니다.

실행할 수 없는 JavaScript, CSS 또는 코드 실습은 억지로 Preview를 만들지 마세요.

이 경우:

- Code Only 모드 노출
- `fetch()`를 통한 실시간 소스 코드 비동기 로딩 및 Syntax Highlighter(`prismjs`, `react-syntax-highlighter` 등)를 이용한 코드 뷰어 컴포넌트(`<CodeViewer />`) 제공

예시 컴포넌트 로직:

```jsx
function CodeViewer({ filePath }) {
  const [code, setCode] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(res => res.text())
      .then(text => setCode(text))
      .catch(err => setCode('// 코드를 불러올 수 없습니다.'));
  }, [filePath]);

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
}
```

실행 가능 여부를 실제 파일 구조를 기준으로 판단하세요.

---

# 12. Project Detail (`<ProjectDetailModal />`)

`<ProjectCard />`를 클릭하면 상세 정보를 볼 수 있도록 React State로 조작되는 Modal 또는 별도의 Router Detail View를 구현하세요.

상세 화면 컴포넌트에는:

- Project Title
- Original File Path
- Learning Objective
- Technologies (Tag List)
- Key Concepts
- Implementation Details
- Interactive Preview 또는 CodeViewer
- What I Learned

를 포함하세요.

단순히 코드만 보여주지 말고,

**“무엇을 배우기 위해 어떤 것을 구현했는가?”**

가 명확하게 보이도록 컴포넌트 레이아웃을 구성하세요.

---

# 13. 검색 및 필터 (`useFilter` Custom Hook & `<SearchBar />`)

실습 파일이 많아져도 쉽게 찾을 수 있도록 React State와 `useMemo` 기반의 검색 및 필터링을 구현해주세요.

기능 및 상태:

- `searchTerm` (검색어 상태)
- `selectedCategory` (카테고리 선택 상태: All, HTML, CSS, JavaScript, Responsive 등)
- `selectedTech` (기술 스택별 필터)

커스텀 훅 예시:

```javascript
function useFilter(projects, searchTerm, selectedCategory) {
  return useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, selectedCategory]);
}
```

단, 필터를 위해 실제 파일이나 폴더를 이동시키면 안 됩니다.

**필터링은 오직 React State 및 UI 컴포넌트 렌더링 단계에서만 처리하세요.**

검색 결과는 즉시 반영되도록 구현하세요.

---

# 14. Learning Journey (`<LearningJourney />`)

가능하다면 기존 폴더 구조와 실습 내용을 기반으로 학습 흐름을 시각적으로 보여주는 타임라인 컴포넌트를 추가해주세요.

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

# 15. Interaction & Animation (React Best Practices)

사이트 자체에서도 프론트엔드 역량이 드러나도록 적절한 interaction 및 애니메이션을 구현해주세요 (e.g., `framer-motion` 또는 Tailwind CSS transitions).

예:

- Card hover (`whileHover={{ y: -4 }}`)
- Smooth transition
- Scroll reveal (Intersection Observer / Framer Motion `whileInView`)
- Active navigation transition
- Filter transition (`AnimatePresence`)
- Modal transition
- Button hover
- Preview interaction

하지만 animation은 과도하게 사용하지 마세요.

**세련되고 절제된 인터랙션**을 목표로 합니다.

---

# 16. Responsive Design (React Responsive Layout)

Desktop, Tablet, Mobile 모두에서 완벽하게 작동하도록 반응형으로 제작하세요.

특히:

- `<Header />` (Mobile Navigation Drawer / Toggle)
- `<HeroSection />`
- Statistics Grid
- `<ProjectGrid />` (CSS Grid / Flexbox)
- Search & Filter Bar
- `<ProjectDetailModal />`
- Dynamic Spacing & Typography
- Preview iframe

를 반응형으로 구성하세요.

모바일에서:

- 가로 스크롤이 발생하지 않아야 함
- 카드가 깨지지 않아야 함
- 텍스트가 잘리지 않아야 함
- 버튼이 겹치지 않아야 함
- iframe Preview가 화면 밖으로 나가지 않아야 함

을 확인하세요.

---

# 17. 데이터 구조 (React Data Architecture)

프로젝트 정보를 JSX에 하드코딩하지 말고 `src/data/projectsData.js` 모듈로 분리하여 관리하세요.

예 (`projectsData.js`):

```javascript
export const projects = [
  {
    id: 1,
    title: "...",
    fileName: "...",
    filePath: "...",
    category: "...",
    technologies: [],
    description: "...",
    difficulty: "...",
    previewAvailable: true
  }
];
```

이 구조를 사용하면 앞으로 새로운 실습 파일을 추가했을 때 React 데이터 배열에 객체를 추가하는 것만으로 Archive에 쉽게 등록할 수 있도록 설계할 수 있습니다.

단, 자동화가 가능한 범위에서는 실제 파일 구조를 기반으로 데이터를 구성하세요.

---

# 18. Accessibility (React JSX Accessibility)

포트폴리오 수준의 웹사이트이므로 React JSX 작성 시 accessibility(a11y) 표준을 준수하세요.

- Semantic HTML Elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (`<h1>` ~ `<h3>`)
- Image `alt` attributes
- Keyboard navigation (Tab index & Keyboard Event Listeners in Modal)
- Focus management (Modal 열릴 때 포커스 이동 처리)
- 버튼과 링크의 명확한 구분 (`<button>` vs `<a>`)
- 충분한 contrast
- Appropriate `aria-label`, `aria-expanded`, `aria-hidden` attributes

를 적용하세요.

---

# 19. 코드 품질 (React Code Guidelines & Component Folder Structure)

코드는 모듈화되고 유지보수하기 쉽게 작성해주세요.

권장 파일 구조 (Vite + React):

```text
archive/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── layout/
    │   ├── hero/
    │   ├── project/
    │   ├── filter/
    │   └── common/
    ├── hooks/
    ├── data/
    └── styles/
```

- 불필요하게 복잡한 대형 상태 관리 라이브러리는 삼가고, React built-in Hooks(`useState`, `useMemo`, `useCallback`, `useContext`) 중심의 깔끔한 아키텍처 사용.
- 컴포넌트의 단일 책임 원칙(SRP) 준수.
- 기존 실습 파일의 코드를 수정해서 Archive를 구현하지 마세요.

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

# 21. 최종 결과의 개념 (React Component Architecture)

최종 구조 및 데이터 흐름은 다음과 같아야 합니다.

```text
┌────────────────────────────────────────────────────────┐
│                                                        │
│                 EXISTING PROJECT FILES                 │
│                                                        │
│            기존 폴더와 파일은 그대로 유지               │
│                                                        │
└───────────────────────────┬────────────────────────────┘
                            │
                            │ iframe / fetch 직접 참조
                            ▼
┌────────────────────────────────────────────────────────┐
│             REACT STUDY ARCHIVE PORTFOLIO              │
│                                                        │
│  [ App.jsx ]                                           │
│    ├── <Header /> (ScrollSpy, Category Nav)            │
│    ├── <HeroSection /> (<StatCard />)                   │
│    ├── <FilterSection /> (<SearchBar />, <Filter />)   │
│    ├── <ProjectGrid />                                 │
│    │     └── <ProjectCard /> (x N)                     │
│    ├── <ProjectDetailModal />                          │
│    │     ├── <ProjectPreview /> (iframe)               │
│    │     └── <CodeViewer /> (fetch + SyntaxHighlight)  │
│    ├── <LearningJourney />                             │
│    └── <Footer />                                      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

즉,

**기존 파일을 정리하는 것이 아니라 기존 파일을 아름답게 보여주는 React SPA 웹사이트를 만드는 것**이 최종 목표입니다.

---

# 22. 작업 순서 (React 기반 개발 단계)

다음 순서로 작업하세요.

### STEP 1
현재 폴더의 전체 구조와 파일을 분석합니다.

### STEP 2
기존 파일과 폴더의 위치를 변경하지 않고 그대로 유지합니다.

### STEP 3
기존 파일들의 내용을 분석합니다.

### STEP 4
각 파일의 프로젝트 정보와 카테고리를 결정하여 React 데이터 모듈(`projectsData.js`)을 구축합니다.

### STEP 5
최상위에 `archive` (React/Vite 프로젝트) 폴더만 새롭게 생성합니다. (`npm create vite@latest archive -- --template react`)

### STEP 6
React 컴포넌트 분리 설계 및 모던 UI 시스템(Tailwind CSS 또는 CSS Modules)을 구축합니다.

### STEP 7
기존 파일 경로를 `iframe` 및 `fetch`를 통해 상대경로로 연결합니다.

### STEP 8
가능한 프로젝트는 실제 Preview를 제공하고, 실행 불가능한 소스 코드는 `<CodeViewer />`를 통해 제공합니다.

### STEP 9
검색 / 필터 / 상세보기 모달 / 반응형 / React State & Hook 기반 인터랙션을 구현합니다.

### STEP 10
최종적으로 기존 파일과 폴더가 작업 전과 동일한 위치에 있는지 확인하고 React 앱의 렌더링 및 빌드를 검증합니다.

---

# 최종 목표

이 웹사이트를 방문한 사람이 단순히

“HTML, CSS, JavaScript를 공부했구나.”

라고 생각하는 것이 아니라,

**“이 사람은 학습한 내용을 직접 구현하고, React 컴포넌트로 구조화하고, 상태 관리 및 최적화하며, 모던 프론트엔드 포트폴리오 웹사이트로 완벽하게 완성할 수 있구나.”**

라는 인상을 받을 수 있도록 제작해주세요.

따라서 결과물은 단순한 **Study Notes**가 아니라,

**React-based Web Development Study Archive + Interactive Portfolio**

수준의 완성도를 목표로 합니다.

그리고 가장 중요한 원칙은 다시 한 번 강조합니다.

> **기존 파일과 폴더는 절대 이동하거나 복사하거나 재구성하지 않습니다.**
>
> **기존 프로젝트는 그대로 보존하고, 새롭게 추가되는 React `archive` 웹사이트에서 기존 파일을 직접 참조하여 보여주세요.**
