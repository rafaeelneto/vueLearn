<template>
  <button @click="onClickAge">Increase age</button>
  <p>The user has a age of {{ age }} years old</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
  methods: {
    onClickAge() {
      this.$emit('increase-age');
    },
  },
};
</script>
