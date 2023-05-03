<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="1"
    :my-props="dynamicProps"
    @child-to-parent="parentGetEvent"
    @child-input="getDynamicData"
    />

  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data: function () {
    return {
      dynamicProps:'It is a data',
    }
  },
  methods: {
    parentGetEvent(inputData) {
      console.log('자식에서 발생한 이벤트');
      console.log(inputData);
    },
    getDynamicData(input) {
      console.log(`child 에서 입력한 ${input}을 출력`);
    },
  },
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
