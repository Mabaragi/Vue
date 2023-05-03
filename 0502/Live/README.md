### Vue CLI 프로젝트 구조

node_modules
- node.js 환경의 여러 의존성 모듈
- Vue 프로젝트를 생성하면 자동으로 추가됨
- python의 venv와 비슷한 역할을 함
  - 따라서 .gitignore에 넣어야 함

node_modules-Babel
- JavaScript compiler
- 자바스크립트의 ES6+코드를 구버전으로 번역, 변환해주는도구
- 자바스크립트의 파편화, 표준화의 영향으로 작성된 코드의 스펙트럼이 매우 당양
  - 최신 문법을 사용해도 브라우저별로 동작하지 않을수 있음
  - 버전에 따른 같은 의미의 다른 코드를 작성하는 등의 대응이 필요해졌고 이러한 문제를 해결해주는 코드
  - 원시코드를 목적코드를 옮기는 번역기
- 화살표 함수를 일반적인 익명함수로 바꾸는 등의 작업

node_modules-Webpack
- static module bundler
- 모듈간의 의존성 문제를 해결하기 위한 도구
- 프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드함

Module
- 특정한 기능을 하는 파일들의 묶음
- 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성됨

Module 의존성 문제
- 모듈의 수가 많아지고 라이브러리 혹은 모듈간의 의존성(연결성)이 깊어지면서 특정한 곳에서 발생한 문제가 어떤 모듈간의 문제인지 파악하기 어려움
- Webpack은 이 모듈 간의 의존성 문제를 해결하기 위해 등장

Bundler
- 모듈 의존성 문제를 해결해주는 도구 (Bundling) Webpack등이 있음.
- 모듈을 하나로 묶어주고 묶인 파일은 하나로 만들어짐
- 번들링된 결과물은 개별 모듈의 실행 순서에 영향을 받지 않고 동작하게 됨
  


### Component

component
- UI를 독립적이고 재사용 가능한 조각들로 나눈것
  - 기능별로 분화한 코드 조각
- CS에서는 다시 사용할 수 있는 범용성을 위해 개발된 소프트웨어 구성 요소를 의미
- 하나의 app을 구성할 때 중첩된 컴포넌트들의 tree로 구성
  - App.vue를 root node로 하는 트리구조를 이룸
- 강략한 재사용, 유지보수성
- 우리가 사용하는 웹 서비스에서 하나의 컴포넌트로 반복되는 UI를 처리함
  
### SFC

SFC(Single File Component)
- 하나의 .vue 파일이 하나의 Vue instance이고, 하나의 컴포넌트이다
- Vue instance 에서는 HTML, CSS, JavaScript 코드를 한번에 관리
  - 이 Vue instance를 기능 단위로작성
- .vue 파일을 쌓아서 개발함

### Vue Component 구조
- 템플릿(HTML)
  - HTML의 바디 부분
  - 눈으로 보여지는 요소 작성
  - 다른 컴포넌트를 HTML요소처럼 추가가능 (트리구조)
- 스크립트(JavaScript)
  - JS 코드가 작성되는곳
  - 컴포넌트 정보, 데이터, 메서드등 Vue 인스턴스를 구성하는 대부분이 작성
- CSS

Vue Component 구조 정리
- 컴포넌트들이 tree 구조를 이루어 하나의 페이지를 만듦
- root에  해당하는 최상단의 component가 App.vue
- 이 App.vue.를 index.html과 연결

기본 구조
- Vue Cli를 실행하면 HelloWord.vue 라는 컴포넌트가 App.vue에 등록되어 사용되고 있음




# vue-cli 사용법
1. vue create `프로젝트이름`
2. npm run serve