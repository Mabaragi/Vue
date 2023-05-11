### Local Storage 
window.localStorage
- 브라우저의 내장 객체 중 하나
- key-value 형태로 데이터를 저장할 수 있음. 브라우저를 종료해도 계속해서 유지됨(다크모드 등)
 다른 탭에서도 동일한 데이터를 공유하지만 다른 도메인에는 접근 할 수 없음
- 보안과 관련된 정보는 사용하기 적합하지 않음
- winow.


### Vuex Binding Helper
- vuex store의 state, mutations, actions등을 간단하게 사용할 수 있도록 만들어진 헬퍼함수
- mapState, mapActions 와 같은 형식으로 사용
- 사용하기 위해서는 import 받아와야함
```
import {mapState, mapActions} from 'vuex'
```

mapState
- vuex store의 state를 쉽고 간결하게 사용
- 객체(추가기능)혹은 배열(그대로) 형태로 상태를 매핑하여 사용 할 수 있음


### Modules
Modules
- vuex store를 여러 파일로 나눠서 관리 할 수 있게 해주는 기능
- vuex store와 동일한 구성을 가진 별도의 객체를 정의하여 modules 옵션에 작성한 객체를 추가하여 사용
- store의 가독성 향상, 편리