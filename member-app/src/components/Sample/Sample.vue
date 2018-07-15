<template>
  <div>
    <button @click="sample">API Kick</button>

    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      foo: 'bar',
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg;
    },
  },
  methods: {
    sample() {
      axios.get('http://192.168.33.88/test.php')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
