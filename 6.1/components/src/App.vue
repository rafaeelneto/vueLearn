<template>
  <p>Text outside greeing component</p>
  <Greeting :age="age"></Greeting>
  <User
    :age="age"
    @increase-age="onChangeAge"
    :onAgeChange="onChangeAgeCB"
  ></User>
</template>
<script>
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    onChangeAge() {
      this.age++;
    },
    onChangeAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
