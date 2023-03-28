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
  computed: {
    fullname() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newV, oldV) {
      setTimeout(() => {
        console.log('chamado');
        this.age = 19;
      }, 5000);
    },
  },
}).mount('#app');
