<template>
  <div>
    <h1>{{ username }}</h1>
    <button type="button" class="btn btn-primary">削除</button>
    <button type="button" class="btn btn-secondary">更新</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      username: this.$route.params.id,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
