let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!',
        },
        {
          name: 'Rick',
          message: 'I like pie.',
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!',
        },
      ],
    };
  },
  methods: {
    move() {
      this.people.push(this.people.shift());
    },
  },
}).mount('#app');
