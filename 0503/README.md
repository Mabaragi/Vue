# VUE
## INDEX
1. Vue Data Management
  - Pass Props
  - Emit Events
2. Lifecycle Hooks

### Data in components
- 동적 웹페이지에서는 웹페이지에서 다뤄야할 데이터가 등장
  - user data, 게시글 data 등등
- 한 페이지 내에서 같은 데이터를 공유해야하지만 페이지들은 component로 구분이 되어있음
- 서로 다른 Component에 정의된 data를 완전히 동일하게 사용하려면 어떻게 해야 할까?
- 컴포넌트는 부모-자식 관계를 가지므로 부모-자식 관계만 데이터를 주고 받게 하면 데이터의 흐름을 파악하기 용이하고 유지보수하기 쉬워짐

pass props & emit event
- 부모 => 자식으로의 데이터 흐름 : pass props
- 자식 => 부모로의 데이터 흐름 : emit event

Pass Props
- 요소의 property를 사용하여 데이터 전달
-  자식 컴포넌트틑 props 옵션을 사용하여 수신하는 props를 명시적으로 선언해야함
- html에선 케밥케이스로 작성, vue 에서는 카멜 케이스로

Dynamic Props
- 변수를 props로 전달, v-bind 디렉티브를 사용해 데이터를 동적으로 바인딩
- 부모 컴포넌트의 데이터가 업데이트되면 자식컴포넌트로 전달되는 데이터 또한 업데이트

props validation

### Emit Event
Emit Event
- 자식이 부모에게 데이터를 보낼때는 emit event를 통해 이벤트를 방생시켜서 보냄
- `$emit('event-name')` 형식으로 사용

### Lifecycle Hooks

Lifecycle Hooks
- 각 vue 인스턴스는 생성과 소멸의 과정중 단계별 초기화 과정을 거침
  - vue 인스턴스가 생성된 경우
  - 인스턴스를 DOM에 마운트 하는 경우
  - 데이터가 변경되어 DOM을 업데이트 하는 경우
- 각 단계가 트리거가 되어 특정 로직을 실행 할 수 있음
- 이를 Lifecycle Hooks 라고 함

- Create: 데이터를 만들음. 데이터만 준비함
- Mount: html 요소들, 화면들과 연결함
- update
- destroy 삭제함
- created 와 mounted 를 트리거로 많이 씀

created
- vue 인스턴스가 생성된 후 호출됨
- data, computed 등의 설정이 완료된 상태
- 서버에서 받은 데이터를 vue instance의 data에 할당하는 로직을 구현 할 수 있음
- 단 mount 되지 않아 요소에 접근 할 수 없음(html 없음, 화면에 안보임)
- JS 에서 Dog API 활용 실습때 기본적으로 출력이 되게 할 수 있음

mounted
- vue 인스턴스가 요소에 mount 된 후 호출됨
- mount 된 요소를 조작 할 수 있음
- html과 연결된 상태