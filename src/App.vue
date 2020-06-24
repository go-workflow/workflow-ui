<template>
  <div id="app">
    <Main
      :data.sync="data"
      @ok="ok"
    />
  </div>
</template>

<script>
import Main from './components/Generator/Main'
export default {
  name: 'App',
  components: {
    Main
  },
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ok (data) {
      this.$emit('update:data', data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
