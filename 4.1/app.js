let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  template: `{{message}}`,
  beforeCreate() {
    console.log(`beforeCreate function called ${this.message}`);
  },
  created() {
    console.log(`creted() function called. message ${this.message}`);
  },
  beforeMount() {
    console.log(`beforeMount() function called: ${this.$el}`);
    // $el is the element that vue is assinged to
  },
  mounted() {
    console.log(`mounted() function called.`, this.$el);
  },
  beforeUpdate() {
    console.log(`beforeUpdate() function called.`);
  },
  updated() {
    console.log(`updated() function called.`);
  },
  beforeUnmount() {
    console.log(`beforeUnmount() function called.`);
  },
  unmounted() {
    console.log(`unmounted() function called.`);
  },
});

vm.mount('#app');

let vm2 = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  render() {
    return Vue.h('h1', this.message);
  },
}).mount('#app2');

// ===============================
// You can mount the vue application any time in the runtime
// ===============================
// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);
