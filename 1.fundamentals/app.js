Vue.createApp({
  data() {
    return {
      firstName: 'Jonh',
      lastName: 'Doe',
      url: 'https://www.google.com',
      raw_url:
        '<a href="https://www.google.com" target="_blank">Google link raw</a>',
    };
  },
  methods: {
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount('#app');
