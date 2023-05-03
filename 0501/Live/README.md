### Basic of syntax

Text Interpolation
- 가장 기본적인 바인딩 방법
- 중괄호 두개로 변수처럼 사용 {{ msg }}
- DTL과 동일한 형태로 작성
- JS표현식(자바스크립트 코드) 작성 가능

RAW HTML
- v-html directive를 사용하여 바인딩 `<span v-html=''`
- 많이 사용하지는 않음

### Directives 
Directive 기본 구성
- v- 접두사가 있는 특수 속성에는 값을 할당 할 수 있음
  - 값에는 JS 표현식을 작성할 수 있음
- directive의 역할은 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는것
- 쉽게 말하면 변수처럼 사용할수 있음
- `v-on:submit.prevent="onSubmit"`
- : 을 통해 전달인자를 받을 수 있음 .으로 표시되는 특수 접미사 -directive를 특별한 방법으로 바인딩

v-text
- {{}} 와 동일한 역할

v-html
- html 코드를 바로 넣을수 있는 방식
- 보안상의 이유로 사용하지 않음

v-show
- 표현식에 작성된 값에 따라 element를 보여줄 것인지 결정
  - boolean 값이 변경 될 때 마다 반응
- 대상 element의 display 속성을 none으로 토글
- 요소 자체는 항상 DOM에 렌더링됨. 보이지만 않음

v-if
- v-show 와 사용방법을 동일
- isActive 값이 변경 될 떄 반응
- false 인 경우 DOM에서 사라짐
- v-if v-else-if v-else 형태로 사용

v-show vs v-if
- v-show는 숨김. 초기 렌더링 비용인 v-if 보다 크지만 렌더링 후 toggle 비용은 적음
- v-if 는 초기 렌더링 비용은 더 적지만 toggle 비용은 큼.

v-for
- for.. in.. 형식으로 작성
- 반복한 데이터 타입에 모두 사용가능
- index를 함께 출력하고자 한다면 (char, index) 형태로 사용 가능
- 배열, 문자열등에 사용 가능. 객체라면 dot notation 으로 접근 가능
- v-for 사용시 반드시 ket 속성을 각 요소에 작성해야함
  - vue 화면 구성 시 이전과 달라진 점을 확인 하는 용도로 활용. 따라서 key가 중복되면 안됨.
  - 각 요소가 고유한 값을 가지고 있다면 생략할 수 있음.

v-on
- addEventListener 를 사용하기 위해 사용
- `:`를 통해 전달받은 인자를 확인
- 값으로 JS 표현식 작성
- 대기하고 있던 이벤트가 발생하면 할당된 표현식 실행
- method를 통한 data 조작도 가능
- 전달된 인자에 따라 특별한 수식어(modifiers)가 있을 수도 있음
- `@` shortcut 제공. `v-on:` 대신 사용 가능

v-bind
- html 기본 속성에 vue data를 연결
- `:` shortcut 제공. `v-bind:` 대신 사용 가능

@input vs v-model
- @input은 단방향, v-model은 양방향
- @input은 input이 있는 경우에만 변수에 할당됨
- v-model은 완전히 연동이 됨. 변수를 완전히 같게 사용하려 할 때 사용
  - vue data 변경 시 v-model로 연결된 입력 element에도 적용

computed
- Vue instance가 가진 option중 하나.
- computed 객체에 정의한 함수를 페이지가 최초로 렌더링 될 때 호출하여 계산
  - 계산 결과가 변하기 전까지 함수를 재호출 하는 것이 아닌 계산된 값을 반환
  - 매번 다시 계산하지않고 많이 쓸 데이터를 사용할때 이용
  - methods 는 호출 될 떄 마다 함수를 실행함
  - computed는 함수의 종속 대상의 변화에 따라 계산 여부가 결정됨
  - 종속 대상이 변하지 않으면 항상 저장(캐싱)된 값을 반환
- getter, setter
  - 

watch
- Vue instance가 가진 option 중 하나
- 특정 데이터의 변화를 감지하는 기능
- 감시할 data를 data option에서 지정, data가 변할 시 실행할 함수를 정의
- 첫번 째 인자는 변동 후 data, 두번째 인자는 변동 전 data
- nested 객체를 감지하려면 deep: true 속성을 줘야함

filters
- Vue instance가 가진 option 중 하나
- `{{a|표현식}}} `

### Vue Style Guide
vue 스타일 가이드는 4가지 단계가 있음
- 필수, 강력히 권장, 권장, 주의 필요

v-if 와 v-for을 사용하면 안됨
- bad :`v-for="user in users" v-if="users.isActive"`
- good : `v-for="user in activeUsers"`