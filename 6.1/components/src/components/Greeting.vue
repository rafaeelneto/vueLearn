<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be above 25 years old to see the message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return { msg: 'Hello World' };
  },
};
</script>
<style scoped lang="scss">
p {
  color: red;
}
</style>
