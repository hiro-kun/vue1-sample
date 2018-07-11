<template>
  <div>
    <button @click="sample">API Kick</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      root: 'test-hot',
    }
  },
  methods: {
    sample() {
      console.log('sample');

      //axios.get('http://uedayou.net/loa/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E6%B0%B8%E7%94%B0%E7%94%BA%E4%B8%80%E4%B8%81%E7%9B%AE7.json')
      //axios.get('http://127.0.0.1/test.php')
      axios.get('http://192.168.33.88/test.php')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
 

    },
  },
};
</script>

<style scoped>
</style>
