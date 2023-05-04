# Vue State Management 상태 관리 패턴

### 상태 관리
State Management
- 상태는 현재에 대한 정보
- 생애 주기에 따라서 컴포넌트의 상태도 다른것
- 여러개의 component를 조합해서 하나의 App을 만들떄, 각 component는 독립적이기 떄문에 각각의 상태를 가짐. 하지만 이런 component로 하나의 앱을 구성하므로 같은 상태를 유지할 필요가있음. => 상태 관리 필요

### Pass Props, Emint Event
- props와 event는 가 컴포넌트의 데이트를 독립적으로 관리, 같은 데이터를 공유하는 각 컴포넌트는 동일한 상태
- component의 중첩이 깊어지면 데이터 전달 구조가 복잡해짐. 이를 해결하기 위해 Centralized Store(중앙 저장소)에 데이터를 모아서 상태를 관리함
- 각 component는 계층에 상관없이 중앙 저장소에 접근해서 데이터를 얻거나 변경 할 수 있음. 중앙 저장소의 데이터가 변경되면 각 component에도 데이터 변경이 반영됨. 규모가 큰 App 관리가 매우 편리

### Vuex
- 'state management pattern + Library' for vue.js
- 중앙 저장소를 통해 상태 관리를 하게 하는 라이브러리

State
- vue 인스턴스의 data에 해당. 중앙에서 관리하는 모든 상태 정보이며 개별 component는 state에서 데이터를 가져와서 사용. 개별 component가 관리하던 data를 중앙 저장소(state)에서 관리하게 됨
- state의 데이터가 변화하면 해당 데이터를 사용하는 component도 자동으로 다시 렌더링 됨
- `$store.state`로 state 데이터에 접근

Mutations & Actions
- vue 의 methods 역할이 vuex에서는 분화됨
  - Mutaions는 state를 변경, Actions는 state 변경을 제외한 나머지 로직
  - dispatch() > actions, commit() > mutations
  - mutation 은 state를 변경하므로 동기식만 작동함. 따라서 분화시킴(sql, orm과 비슷한 역할)
  - Actions 는 비즈니스 로직
- Mutation, Action 에서 호출되는 함수를 handler 함수라고 함

Mutations
- state를 변경 할 수 있는 유일한 방법. 반드시 동기적 이어야함
  - 비동기 로직으로 mutations를 사용하면 state 변화의 시기를 특정 할 수 없기 때문
- 첫번째 인자로 함수인 state를 받으며 commit() 메서드로 호출 됨
- `CREATE_TODO(state, Actions)`

Actions
- mutations와 비슷하지만 비동기 작업을 포함 할 수 있다는 차이가 있음. 
- context 객체를 인자로 받으며 이 객체를 통해 store.js의 모든 요소와 메서드에 접근할 수 있음(state를 변경 할 수 있지만 하지 않아야함)
- dispatch 메서드에 의해 호출됨

Getters
- vue 인스턴스의 computed에 해당. state의 데이터를 활용해 계산된 값을 얻고자 할 때 사용
- computed와 마찬가지로 캐시(저장) 되며 변경된 경우에만 재계산됨.
- getters에서 계산된 값은 state에 영향을 미치지 않음.
- 첫번째 인자로 state, 두번째 인자로 getter를 받음

component 에서 데이터를 조작하기 위한 데이터의 흐름
- component => (actions) => mutations =>state

component 에서 데이터를 사용하기 위한 데이터의 흐름
- state => (getters) => component