import { createApp } from 'vue';
import App from './App.vue';

// import Greeting from './components/Greeting.vue';

let vm = createApp(App);

// global components
// vm.component('Greeting', Greeting);

vm.mount('#app');
