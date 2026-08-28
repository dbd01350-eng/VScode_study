# GitHub Repository 준비 및 Archive 연결

현재 프로젝트 폴더에는 VS Code로 학습하고 실습한 HTML, CSS, JavaScript 및 웹 개발 관련 파일들과, 이를 정리해서 보여주는 `archive` 웹사이트가 있습니다.

이 프로젝트를 **GitHub Repository에 업로드하고 GitHub Pages로 배포**할 예정입니다.

최종적으로 다음과 같은 URL에서 Archive 웹사이트가 열리도록 구성합니다.

```text
https://[GitHub ID].github.io/[Repository Name]/archive/
```

따라서 GitHub에 올릴 파일들을 정리하고 점검해주세요.

---

# 1. 가장 중요한 원칙

**기존 학습 파일과 폴더의 구조를 변경하지 마세요.**

다음 작업은 하지 마세요.

- 기존 파일 이동 금지
- 기존 파일 복사 금지
- 기존 파일 이름 변경 금지
- 기존 폴더 이름 변경 금지
- 기존 폴더 구조 변경 금지
- 기존 실습 코드 수정 금지
- HTML/CSS/JavaScript 파일 재분류 금지
- 파일을 Archive 폴더로 이동 금지

현재 프로젝트의 폴더 구조는 그대로 유지해야 합니다.

이번 작업의 목적은 **파일을 재정리하는 것이 아니라 GitHub에 올릴 프로젝트를 점검하고 준비하는 것**입니다.

---

# 2. GitHub Repository의 기본 구조

최종적으로 Repository는 다음과 같은 형태가 되도록 합니다.

```text
Repository/
│
├── 기존 학습 폴더/
│   ├── ...
│   └── ...
│
├── archive/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── assets/
│
└── README.md
```

실제 폴더와 파일명은 현재 프로젝트 구조를 기준으로 사용하세요.

예를 들어 현재 구조가:

```text
01_HTML/
02_CSS/
03_JavaScript/
04_Projects/
archive/
```

라면 이 구조를 그대로 GitHub Repository에 올릴 수 있도록 준비합니다.

---

# 3. Archive에서 실제로 사용하는 파일 확인

현재 `archive/index.html` 및 관련 CSS/JS 파일을 분석하세요.

Archive가 참조하고 있는 모든 파일과 폴더를 찾아주세요.

특히 다음을 확인하세요.

- iframe으로 불러오는 HTML
- Preview에 사용하는 HTML
- CSS 파일
- JavaScript 파일
- 이미지
- 폰트
- 아이콘
- 기타 assets
- 프로젝트별 상대경로
- HTML 내부의 CSS/JS 경로
- 이미지 경로

Archive가 정상적으로 작동하기 위해 필요한 파일은 반드시 Repository에 포함되어야 합니다.

---

# 4. Archive가 참조하는 원본 파일은 반드시 유지

예를 들어 Archive에 다음 코드가 있다면:

```html
<iframe src="../01_HTML/example.html"></iframe>
```

GitHub Repository에도 반드시:

```text
01_HTML/example.html
```

이 실제 위치에 존재해야 합니다.

파일을 다음과 같이 이동시키면 안 됩니다.

```text
archive/examples/example.html
```

또는

```text
archive/assets/example.html
```

즉,

**Archive는 기존 파일을 복사해서 사용하는 것이 아니라 기존 원본 파일을 직접 참조해야 합니다.**

---

# 5. GitHub Pages 경로를 기준으로 전체 링크 점검

최종 배포 주소는 다음과 같습니다.

```text
https://[GitHub ID].github.io/[Repository Name]/archive/
```

따라서 모든 상대경로가 GitHub Pages 환경에서도 정상적으로 작동하는지 확인하세요.

특히 다음을 점검하세요.

```text
archive/index.html
archive/css/style.css
archive/js/script.js
archive/assets/...
../01_HTML/...
../02_CSS/...
../03_JavaScript/...
```

로컬 VS Code에서는 작동하지만 GitHub Pages에서는 깨질 가능성이 있는 경로가 있다면 수정이 필요한 부분을 찾아주세요.

단, **기존 실습 파일의 코드를 수정하지 않고 Archive 쪽에서 해결하는 것을 우선**으로 합니다.

---

# 6. GitHub에서 사용할 수 없는 파일 확인

현재 프로젝트 전체를 분석하여 GitHub Repository에 올릴 필요가 없는 파일을 찾아주세요.

예를 들어 다음과 같은 파일이 있다면 구분해서 알려주세요.

- VS Code 개인 설정
- 운영체제에서 자동 생성되는 파일
- 임시 파일
- 캐시
- 빌드 결과물
- 불필요한 로그
- 개인적인 메모
- 비밀번호나 API Key
- 개인정보가 포함된 파일
- 대용량의 불필요한 파일

단, **파일을 자동으로 삭제하지 마세요.**

삭제가 필요하다고 판단되는 파일은:

```text
[제외 권장]
파일명
이유
```

형태로 목록을 만들어주세요.

---

# 7. 절대 GitHub에 올리면 안 되는 민감정보 확인

전체 프로젝트를 검사하여 다음과 같은 정보가 있는지 확인하세요.

- API Key
- Access Token
- Password
- Secret Key
- 개인정보
- 인증정보
- 계정 정보
- private configuration
- `.env` 파일

발견되면 해당 파일의 내용을 출력하지 말고 **파일명과 위험 여부만 알려주세요.**

예:

```text
⚠️ 확인 필요
.env
→ API Key가 포함되어 있을 가능성이 있으므로 GitHub 업로드 제외 권장
```

---

# 8. .gitignore 생성

GitHub에 불필요한 파일이 올라가지 않도록 프로젝트 루트에 `.gitignore`를 생성해주세요.

웹 개발 프로젝트에 일반적으로 불필요한 파일을 적절하게 제외하되, **현재 프로젝트에서 실제로 필요한 파일까지 제외하지 않도록 주의하세요.**

예:

```text
.DS_Store
Thumbs.db
.vscode/
*.log
.env
.env.*
node_modules/
```

단, `.vscode/` 안에 현재 프로젝트에서 반드시 필요한 설정이 있다면 무조건 제외하지 말고 먼저 확인하세요.

---

# 9. README.md 생성

프로젝트 루트에 `README.md`를 생성해주세요.

README는 이 프로젝트가 단순한 파일 저장소가 아니라 **Web Development Study Archive**라는 것을 설명할 수 있도록 작성합니다.

다음 내용을 포함하세요.

### Project Title

Web Development Study Archive

### Description

VS Code를 사용하여 학습하고 직접 구현한 HTML, CSS, JavaScript 및 웹 개발 실습을 정리한 Archive 프로젝트.

### Features

- Study Archive
- Project Preview
- Project Search
- Category Filter
- Project Detail
- Responsive Design
- Interactive UI

실제 구현된 기능만 작성하세요.

### Technologies

실제 프로젝트에서 사용한 기술만 작성하세요.

예:

```text
HTML
CSS
JavaScript
Responsive Web
Git / GitHub
```

### Live Demo

다음 형식으로 작성하세요.

```text
https://[GitHub ID].github.io/[Repository Name]/archive/
```

단, 실제 GitHub ID와 Repository Name을 알 수 없는 경우 임의로 작성하지 말고 placeholder로 남겨주세요.

---

# 10. README에 프로젝트 구조 표시

README에 실제 Repository 구조를 간단하게 보여주세요.

예:

```text
01_HTML/
02_CSS/
03_JavaScript/
04_Projects/
archive/
```

단, 실제 폴더 구조를 확인한 후 작성하세요.

존재하지 않는 폴더를 추가하지 마세요.

---

# 11. GitHub Repository에서 보여줄 파일과 로컬 전용 파일 구분

전체 파일을 다음 세 가지 기준으로 분류해서 최종 점검 결과를 만들어주세요.

### A. 반드시 GitHub에 업로드

Archive가 정상적으로 작동하기 위해 필요한 파일

### B. GitHub에 업로드 권장

포트폴리오 및 학습 기록을 보여주는 데 유용한 원본 실습 파일

### C. GitHub 업로드 제외 권장

GitHub에 공개할 필요가 없거나 보안상 문제가 있거나 불필요한 파일

이렇게 구분해주세요.

---

# 12. 포트폴리오 목적에 맞게 원본 실습 파일 보존

이 Repository는 단순히 Archive 사이트만 보여주는 용도가 아닙니다.

포트폴리오 방문자가 필요하면 실제 코드까지 확인할 수 있도록 하는 것이 목적입니다.

따라서 Archive가 보여주는 주요 실습 파일은 가능한 한 Repository에 함께 포함하세요.

방문자가:

```text
Archive
   ↓
Project Preview
   ↓
View Code
   ↓
실제 GitHub 파일
```

순서로 확인할 수 있는 구조를 목표로 합니다.

---

# 13. Archive의 View Code 링크 점검

Archive의 각 프로젝트에 있는 `View Code` 또는 코드 확인 버튼이 있다면 실제 Repository 내 파일로 연결되도록 구성하세요.

예를 들어:

```text
View Code
↓
https://github.com/[GitHub ID]/[Repository Name]/blob/main/01_HTML/example.html
```

단, GitHub ID와 Repository Name을 모르는 경우 placeholder를 사용하세요.

실제 파일과 연결되지 않는 가짜 링크를 만들지 마세요.

---

# 14. GitHub Pages에서 Preview가 깨지는지 점검

다음 상황을 기준으로 점검하세요.

```text
Local
VS Code / Live Server
        ↓
Archive 정상 작동

GitHub Repository
        ↓
GitHub Pages
        ↓
/archive/
        ↓
Archive 정상 작동
```

특히 다음 문제를 확인하세요.

- CSS 경로 오류
- JavaScript 경로 오류
- 이미지 경로 오류
- iframe 경로 오류
- 상대경로 오류
- 대소문자 차이
- 파일명 차이
- 공백이 포함된 경로
- 한글 파일명
- 외부 리소스 문제

GitHub Pages는 로컬 Windows 환경과 달리 파일명 대소문자에 민감할 수 있으므로 경로를 정확하게 확인하세요.

---

# 15. 최종 작업 결과

작업이 끝나면 실제 파일을 이동하거나 삭제하지 말고 다음 내용을 보고해주세요.

### Repository에 반드시 포함할 파일

```text
...
```

### Repository에 포함하는 것을 권장하는 파일

```text
...
```

### Repository에서 제외 권장하는 파일

```text
...
```

### Archive가 참조하는 주요 파일

```text
...
```

### GitHub Pages에서 예상되는 URL

```text
https://[GitHub ID].github.io/[Repository Name]/archive/
```

### 확인이 필요한 문제

```text
...
```

---

# 최종 원칙

이번 작업에서 가장 중요한 것은 **기존 학습 파일을 정리하거나 재배치하는 것이 아닙니다.**

현재 폴더 구조를 그대로 보존하면서,

**기존 학습 파일 + Archive 웹사이트**

를 하나의 GitHub Repository에서 함께 관리할 수 있도록 준비하는 것입니다.

다시 한 번 강조합니다.

> **기존 파일과 폴더를 이동하지 마세요.**
>
> **기존 파일을 복사하지 마세요.**
>
> **기존 파일의 이름을 변경하지 마세요.**
>
> **기존 실습 코드를 수정하지 마세요.**
>
> **Archive가 실제 원본 파일을 상대경로로 참조하도록 유지하세요.**
>
> **GitHub에 올릴 파일을 임의로 삭제하지 마세요.**
>
> **삭제 또는 제외가 필요한 파일은 먼저 목록으로 분류해서 알려주세요.**

최종 목표는 다음과 같습니다.

```text
GitHub Repository
│
├── Original Study Files
│
├── archive/
│   └── index.html
│
└── README.md

        ↓

GitHub Pages

https://[GitHub ID].github.io/[Repository Name]/archive/

        ↓

Web Development Study Archive
        ↓
Preview
        ↓
View Code
        ↓
Original GitHub Files
```

이 구조가 정상적으로 작동하도록 현재 프로젝트를 분석하고 준비해주세요.