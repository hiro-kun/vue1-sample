<template>
<div>





<h1>メンバー一覧</h1>

  <b-table :fields="fields" :items="items">
    <template slot="name" slot-scope="data">
      <!-- <a :href="`${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`"> -->
      <a :href="`${data.value}`">
        {{data.value}}
      </a>
    </template>
  </b-table>


<h1>詳細/編集ページ ※編集ページはこれと同じようにする。更新ページは、更新ボタンを押したら更新されてalert表示される。</h1>
<!-- https://bootstrap-vue.js.org/docs/components/form -->
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email" disabled>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name" disabled>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3" disabled>
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food" disabled>
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>





  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'name',
          label: 'Full Name',
          //formatter: 'fullName'
          formatter: (value) => { return value.first }
        },
        // A regular column
        'age',
        {
          // A regular column with custom formatter
          key: 'sex',
          formatter: (value) => { return value.charAt(0).toUpperCase() }
        },
        {
          // A virtual column with custom formatter
          key: 'birthYear',
          label: 'Calculated Birth Year',
          formatter: (value, key, item) => {
            return (new Date()).getFullYear() - item.age
          }
        }
      ],
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true,
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 }
      ],
      items_second: [
        { 名前: true, 年齢: 40, 性別: 'Dickerson', ステータス: 'Macdonald' },
        { 名前: false, 年齢: 21, 性別: 'Larsen', ステータス: 'Shaw' },
        { 名前: false, 年齢: 89, 性別: 'Geneva', ステータス: 'Wilson' },
        { 名前: true, 年齢: 38, 性別: 'Jami', ステータス: 'Carney' }
      ]
    }
  },
  methods: {
    fullName (value) {
      return `${value.first} ${value.last}`
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>