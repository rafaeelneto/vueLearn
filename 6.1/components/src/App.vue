<template>
  <p>Text outside greeing component</p>
  <Greeting></Greeting>
  <User :age="age"></User>
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
};
</script>
