<template>
  <h3>dynamic componets</h3>
  <select v-model="componentName">
    <option default value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <p>
    when a component is tongled out it gets unmounted, so any data will not be
    available anymore and will be reset to its default state
  </p>
  <component :is="componentName"></component>
  <p>
    the tag keep-alive keeps the component removed on memory so the data remains
  </p>
  <KeepAlive>
    <component :is="componentName"></component>
  </KeepAlive>
</template>

<script>
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
  },
  data() {
    return {
      componentName: 'Home',
    };
  },
};
</script>
