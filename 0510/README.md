# Navigation Guard

### 네비게이션가드
- vue router를 통해 특정 URL에 접글할 때 다른 url로 redirect를 하거나 해당 url로의 접근을 막는 방법
- ex) 사용자 인증 정보가 없으면 특정 페이지에 접근하지 못하게함

### 전역가드
Global Before Guard
- 다른 url 주소로 이동할 때 항상 실행됨
- router/index.js에 router.beforeEach()를 사용하여 설정. url이 변경되어 화면이 전환되기 전 호출됨. 화면이 전환되지 않고 대기상태가 됨.
- 콜백함수의 값으로 다음과 같이 3개의 인자를 받음
  - to: 이동할 url 정보가 담긴 route 객체
  - from: 현재 url 정보가 담긴 route 객체
  - next: 지정한 url로 이동하기 위해 호출하는 함수. 변경된 url로 라우팅 하기 위해서는 호출해줘야함. next가 호출 되기 전까지 화면이 전환되지 않음
    - 콜백함수 내부에서 반드시 한번만 호출되어야함
    - 기본적으로 to에 해당하는 url로 이동
- 로그인 여부에 따라 페이지 이동을 다르게 처리 할 수 있음

### 라우터 가드
- 전체 route가 아닌 특정 route에 대해서만 가드를 설정하고 싶을 때 사용
- beforeEnter()
  - router에 진입 했을 때 실행됨
  - 라우터를 등록한 위치에 추가
  - 콜백함수는 to, from, next를 인자로 받음

### 컴포넌트 가드
- 특정 컴포넌트 내에서 가드를 지정하고 싶을때 사용
- beforeRouteUpdate()
  - 해당 컴포넌트를 렌더링하는 경로가 변경될 떄 실행


### 404 NoT Found

형식은 유효하지만 특정 리소스를 찾을 수 없는 경우
- 전부 404 처리를 해버리면 에러같아서 적절하지않음
- ex)존재하지 않는 가수의 경우 없는 가수라고 명시