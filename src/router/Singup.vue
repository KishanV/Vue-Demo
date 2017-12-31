<template>
  <div id="singup">
    <div class='title'>Sing Up</div>
    <div class="body">
      <input v-model="username" type="text" placeholder="Username" class="user textbox"></input>
      <input v-model="email" type="text" placeholder="Email" class="user textbox"></input>
      <input v-model="password" type="password" placeholder="Password" class="pass textbox"></input>
      <input v-model="reenterPassword" type="password" placeholder="Renter Password" class="pass textbox"></input>
    </div>
    <div class="btn" v-on:click="submit">singup</div>
    <div class="new" v-on:click="backSingin">Back to Login</div>
  </div>
</template>

<script>
  module.exports = {
    name: 'Singup',
    data:function(){
      return {
        username:'',
        email:'',
        password:'',
        reenterPassword:'',
      };
    },
    methods:{
      backSingin: function(){
        this.getMain().isOpen = 'on';
      },
      submit: function(){
        var msg = [];
        //this.username,this.email,this.password,this.reenterPassword
        if(this.username == ''){
          msg.push('Username');
        }
        if(this.email == ''){
          msg.push('Email');
        }
        if(this.password == ''){
          msg.push('Username');
        }
        if(this.reenterPassword == ''){
          msg.push('ReenterPassword');
        }

        if(msg.length != 0){
          msg = ('Please Enter values in '+msg.join(', ') +'.');
        }else{
          msg = '';
        }

        if(this.reenterPassword != this.password && this.password != ''){
          if(msg != ''){
            msg += '\nand';
          }
          msg += 'Both password are not match.';
        }

        if(msg){
          alert(msg);
        }else{

        }
      }
    }
  }
</script>

<style>
  #singup > .new:hover {
    background: #fff;
    color: #000;
  }
  #singup > .new {
    width: calc(100% - 100px);
    height: 36px;
    position: absolute;
    bottom: -62px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    line-height: 36px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 10px;
    left: 50px;
    transition: 200ms all;
    background: rgba(0,0,0,0.1);
  }

  #singup > .btn:hover {
    background: #eb528a;
    color: #fff;
  }
  #singup > .btn {
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
  #singup {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition: 200ms all;
  }
  #singup > .title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: absolute;
    text-align: center;
    text-indent: 0px;
    font-weight: bold;
    font-size: 18px;
  }
  #singup > .body{
    width: 100%;
    height: calc(100% - 120px);
    line-height: 60px;
    position: absolute;
    text-align: center;
    text-indent: 0px;
    top: 60px;
  }
  #singup > .body > .textbox{
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
