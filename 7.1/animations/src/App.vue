<template>
  <button @click="toggleFlag" type="button">Toggle</button>

  <h1>Animation with css transitions 👇</h1>

  <Transition name="fade" mode="out-in" appear>
    <h2 v-if="flag" key="main">Hello world</h2>
    <h2 v-else key="secondary">Alternative hello</h2>
  </Transition>

  <hr />
  <h1>Animation with css animations 👇</h1>

  <Transition name="zoom">
    <h2 v-if="flag">Hello CSS Animations</h2>
  </Transition>
  <hr />
  <h1>Animation with Javascript 👇</h1>
  <Transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
  >
    <h2 v-if="flag">Hello Javascript Animations</h2>
  </Transition>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    toggleFlag() {
      this.flag = !this.flag;
    },
    beforeEnter(el) {
      console.log('before enter', el);
    },
    // done is a callback function that must be called to acknowledge vue that the animation process has finished
    enter(el, done) {
      console.log('enter', el);

      // itsnt need to specify the final state of the element
      // const animation = el.animate([{ transform: 'scale3d(0, 0, 0)' }, {}], {
      //   duration: 2000,
      // });

      // animation.onfinish = () => {
      //   console.log('animation finished');
      //   done();
      // };
    },
    afterEnter(el) {
      console.log('after enter', el);
    },
    beforeLeave(el) {
      console.log('before leave', el);
    },
    // done is a callback function that must be called to acknowledge vue that the animation process has finished
    leave(el, done) {
      // itsnt need to specify the final state of the element
      // const animation = el.animate([{}, { transform: 'scale3d(0, 0, 0)' }], {
      //   duration: 2000,
      // });
      // animation.onfinish = () => {
      //   console.log('animation finished');
      //   done();
      // };
    },
    afterLeave(el) {
      console.log('after leave', el);
    },
  },
};
</script>

<style>
h2 {
  width: 300px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s ease-in-out;
}

.fade-leave-to {
  transition: all 1s ease-in-out;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s ease-in-out forwards;
}

.zoom-leave-active {
  animation: zoom-out 1s ease-in-out forwards;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
