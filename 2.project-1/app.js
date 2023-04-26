const vm = Vue.createApp({
  data() {
    return {
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      perspective: 100,
    };
  },
  methods: {
    resetBtn() {
      this.rotationX = 0;
      this.rotationY = 0;
      this.rotationZ = 0;
      this.perspective = 100;
    },
    copyBtn() {
      console.log('Copy btn pressed');
    },
  },
}).mount('#app');
