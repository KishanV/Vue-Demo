<template>
  <div id="main">
    <div class="holder">
      <div v-bind:class="'box '+isOpen">
        <div id="login"></div>
        <div id="singUp"></div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'app',
    data: function(){
      return {
        isOpen: 'on'
      }
    },
    props: ['todo'],
    methods:{
      toggle: function(){
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style>
  body{
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: sans-serif;
    user-select: none;
  }

  .box.on > #login{
    opacity: 1;
    pointer-events: auto;
  }

  .box.off > #singup{
    opacity: 1;
    pointer-events: auto;
  }

  .box.off{
    height: 374px;
  }
  .box{
    background: #fff;
    width: 300px;
    height: 252px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-box-shadow: 0 20px 50px 0px rgba(0,0,0,0.1);
    box-shadow: 0 20px 50px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
    transition: all 200ms;
  }
  .holder{
    background: #ddd;
    width: calc(100% - 0px);
    height: calc(100% - 0px);
    left: 0px;
    position: absolute;
    top: 0px;
    background: -webkit-linear-gradient(-45deg, #F1508E 0% ,#FFB176 100%);
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.2) inset;
  }
  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
