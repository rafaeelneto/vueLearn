Vue.createApp({
  data() {
    return {
      firstName: 'Jonh',
      middleName: '',
      lastName: 'Doe',
      url: 'https://www.google.com',
      raw_url:
        '<a href="https://www.google.com" target="_blank">Google link raw</a>',
      age: 20,
    };
  },
  methods: {
    fullname() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);

      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount('#app');
