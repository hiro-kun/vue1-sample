<template>
  <div>
  <h1>メンバー一覧</h1>

  <b-table :fields="fields" :items="items">
    <template slot="user_id" slot-scope="data">
      <!-- <a :href="`${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`"> -->
      <a :href="`/#/user/${data.value}`">
        {{data.value}}
      </a>
    </template>
  </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'user_id',
          label: 'User Id',
          formatter: value => value,
        },
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'name',
          label: 'Full Name',
          // formatter: 'fullName'
          formatter: value => value.first,
        },
        // A regular column
        'age',
        {
          // A regular column with custom formatter
          key: 'sex',
          formatter: value => value.charAt(0).toUpperCase(),
        },
        {
          // A virtual column with custom formatter
          key: 'birthYear',
          label: 'Calculated Birth Year',
          formatter: (value, key, item) => (new Date()).getFullYear() - item.age,
        },
      ],
      items: [
        { user_id: 1, name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { user_id: 2, name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { user_id: 3, name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { user_id: 4, name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
        { user_id: 5, name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 },
      ],
      methods: {
        fullName(value) {
          return `${value.first} ${value.last}`;
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
