<template>
  <div>
    <button @click="sample">API Kick</button>
    <button @click="update">更新</button>
    <button @click="repeat">アクションダミー</button>

    <h1>{{msg}}</h1>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      foo: 'bar',
    };
  },
  computed: {
    // 値の参照
    ...mapState({
      msg: state => state.msg,
    }),
    // storeに定義された関数を呼び出し
    ...mapGetters([
      'count',
    ])
  },
  methods: {
    update() {
      this.$store.commit('updateMsg', 'sample');
    },
    repeat() {
      this.$store.dispatch('apicall')
    },
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
