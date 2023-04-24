<template>
  <button @click="onClickAge">Increase age</button>
  <button @click="onAgeChange(3)">Increase age CB</button>
  <p>The user has a age of {{ age }} years old</p>
  <p>The doubled age of the user is {{ ageDoubled }} years</p>
</template>

<script>
export default {
  name: 'User',
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 20,
      //* if the type is a object or array, the default property should be a function that
      //* returns the default value

      // * the validator funcion run befores the instance of the component is created
      validator(value) {
        // * should return true or false
        return value < 120;
      },
    },
    onAgeChange: {
      type: Function,
    },
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit('increase-age');
    },
  },
};
</script>
