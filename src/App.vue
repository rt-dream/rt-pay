<template>
  <div id="app">
    <h3 class="index-title">支付密码框的vue插件</h3>
    <h3 class="index-title">这里的模拟密码为：123456</h3>

    <div class="submit-btn"
         @click="onShowPay">点击显示支付弹窗</div>

    <!--支付密码弹窗-->
    <rt-pay ref="pays"
            v-model="show"
            :characterShow="false"
            @close="close"
            @forget="forget"
            @input-end="inputEnd" />
    <div class="num-title">弹出数字键盘</div>
    <rt-pwd @open-keyboard="openKeyboard"
            :password="password">
      <template v-slot:keyboard>
        <rt-keyboard ref="vpays"
                     v-model="keyboardShow"
                     :characterShow="false"
                     @close="close"
                     @forget="forget"
                     @emit-pwd="emitPwd"
                     @input-end="inputEnd1" />
      </template>
    </rt-pwd>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data() {
      return {
        password: '',
        keyboardShow: false,
        show: false,
      };
    },

    methods: {
      openKeyboard(v) {
        this.keyboardShow = v;
      },
      onShowPay() {
        this.show = true;
      },

      emitPwd(v) {
        this.password = v;
      },

      // 密码输入完成回调
      inputEnd(val) {
        setTimeout(() => {
          // 模拟支付成功的结果
          if (val == 123456) {
            // 调用插件的$success方法告知插件支付成功
            // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
            this.$refs.pays.$success().then(res => {
              console.log('支付成功');
            //   this.$router.push('/success');
            });
            // 模拟支付失败的结果
          } else {
            this.$refs.pays.$fail();
          }
        }, 1000);
      },

      // 密码输入完成回调
      inputEnd1(val) {
        setTimeout(() => {
          // 模拟支付成功的结果
          if (val == 123456) {
            // 调用插件的$success方法告知插件支付成功
            // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
            this.$refs.vpays.$success().then(res => {
              console.log('支付成功');
            //   this.$router.push('/success');
            });
            // 模拟支付失败的结果
          } else {
            this.$refs.vpays.$fail();
          }
        }, 1000);
      },

      // 取消支付弹窗关闭的回调
      close() {
        console.log('关闭');
      },

      // 忘记密码跳转
      forget() {
        console.log('触发forge事件');
      },
    },
  };
</script>

<style>
  html {
    font-size: 16px;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }
  body {
    max-width: 750px;
    margin: 0 auto;
    font-family: 'Roboto', '-apple-system', 'Helvetica Neue', 'Helvetica', 'Arial',
      sans-serif;
  }
  ul,
  li {
    list-style: none;
  }
  #app {
    min-height: 100vh;
    background: #f1f1f1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
  .index-title {
    padding-top: 3.125rem;
    font-weight: normal;
    text-align: center;
  }
  .submit-btn {
    width: 50%;
    height: 3.125rem;
    margin: 6.25rem auto 0;
    line-height: 3.125rem;
    text-align: center;
    border-radius: 0.625rem;
    background: #2196f3;
    color: #fff;
    cursor: pointer;
  }
  .num-title {
      text-align: center;
      margin: 3rem auto 0;
  }
</style>
