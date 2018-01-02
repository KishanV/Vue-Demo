<template>
  <div id="login">
    <div class='title'>Sign In</div>
    <div class="body">
      <input v-model="username" type="text" placeholder="Username" class="user textbox"></input>
      <input v-model="email" type="text" placeholder="Email" class="user textbox"></input>
    </div>
    <div class="btn" v-on:click="submit">Go</div>
    <div class="new" v-on:click="openSingup">Create new account</div>
  </div>
</template>

<script>
  module.exports = {
   name: 'Login',
   data:function(){
      return {
        isOpen: false,
        username:'',
        email:''
      };
    },
    methods:{
      openSingup: function(){
        this.getMain().isOpen = 'off';
      },
      submit: function(){
        var msg = [];
        if(this.username == ''){
          msg.push('Username');
        }
        if(this.email == ''){
          msg.push('Email');
        }
        if(msg.length != 0){
          alert('Please enter ' + msg.join(',') +  '.');
        }
      }
    }
  }
</script>

<style>
  #login > .new:hover {
    background: #fff;
    color: #000;
  }
  #login > .new {
    width: calc(100% - 100px);
    height: 36px;
    position: absolute;
    bottom: -62px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(0,0,0,0.1);
    line-height: 36px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 10px;
    left: 50px;
    -webkit-transition: 200ms all;
    transition: 200ms all;
    background: rgba(0,0,0,0.05);
  }

  #login > .btn:hover {
    background: #eb528a;
    color: #fff;
  }
  #login > .btn {
    transition: 200ms all;
    background: #faab75;
    width: 100px;
    height: 36px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 50px);
    border-radius: 10px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    line-height: 36px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
  }
  #login {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition: 200ms all;
  }
  #login > .title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: absolute;
    text-align: center;
    text-indent: 0px;
    font-weight: bold;
    font-size: 18px;
  }
  #login > .body{
    width: 100%;
    height: calc(100% - 120px);
    line-height: 60px;
    position: absolute;
    text-align: center;
    text-indent: 0px;
    top: 60px;
  }
  #login > .body > .textbox{
    width: calc(100% - 30px);
    height: 40px;
    line-height: 40px;
    position: relative;
    text-align: center;
    text-indent: 0px;
    background: #eee;
    margin-left: 0px;
    margin-bottom: 0px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
  }
</style>
