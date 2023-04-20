<template>
  <p>The user has a age of {{ age }} years old</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
};
</script>
