<template>
  <div class="keyboard-content"
       v-show="keyboardShow">
    <div class="layer"
         @click="close"
         @touchmove.prevent></div>
    <!--键盘区-->
    <ul class="keyboard">
      <li v-for="(val, i) in keyboardList"
          :key="i"
          :class="{'none': val.type === null, 'zero': val.num === 0, 'delete': val.type === 'delete'}"
          @click="onKeyboard(val)">
        <p class="num"
           v-if="typeof val.num === 'number'">{{ val.num }}</p>
        <p class="character"
           v-if="val.character && characterShow">{{ val.character }}</p>
      </li>
    </ul>

    <!--加载中状态-->
    <div class="loading-wrap"
         v-if="payStatus !== 0">
      <div class="loading">
        <!--加载图标-->
        <img src="./images/loading.png"
             class="loading-ico"
             alt=""
             v-if="payStatus === 1">
        <img src="./images/success.png"
             class="success-ico"
             alt=""
             v-if="payStatus === 2">
        <!--加载文字-->
        <p v-if="payStatus === 1">{{loadingText}}</p>
        <p v-if="payStatus === 2">{{finishedText}}</p>
      </div>
    </div>

    <!--支付失败提示框-->
    <div class="pay-fail"
         v-if="isShowFail">
      <div class="pay-fail-lay">
        <h3 class="title">{{failTip}}</h3>
        <div class="btns">
          <div @click="reInput">重新输入</div>
          <div @click="forget">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Base from './mixins';
  export default {
    mixins: [Base],

    model: {
      prop: 'keyboardShow',
      event: 'change',
    },

    props: {
      // 组件的显示隐藏
      keyboardShow: {
        type: Boolean,
        required: true,
        default: false,
      },
    },

    methods: {
      // 关闭自定义键盘
      close() {
        // 支付过程中，不允许关闭自定义键盘
        if (this.payStatus === 1) return;
        // 关闭组件，并触发父子组件数据同步
        this.$emit('change', false);
        // 触发父组件close自定义事件
        this.$emit('close');
      },
    },
  };
</script>
<style scoped>
  /* 键盘区 */
  .keyboard-content {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
  }
  .layer {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 9;
    background: transparent;
  }
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    padding: 0.375rem 0.375rem 0;
    background: #d2d5db;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
  .keyboard li {
    width: 32%;
    height: 2.875rem;
    margin: 0 0.375rem 0.5rem 0;
    text-align: center;
    background: #ffffff;
    border-bottom: 1px solid #b2b2b2;
    border-right: 1px solid #b2b2b2;
    border-radius: 0.313rem;
    box-sizing: content-box;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    .keyboard li {
      width: 31%;
    }
  }
  .keyboard li .num {
    font-size: 1.563rem;
    font-family: Helvetica;
    font-weight: 500;
    line-height: 1.2;
    color: #000;
  }
  .keyboard li .character {
    line-height: 1.2;
    font-size: 0.75rem;
  }
  .keyboard li:nth-child(3n) {
    border-right: 0;
    margin-right: 0;
  }
  .keyboard li:active {
    background-color: #d1d5db;
  }
  .keyboard .zero {
    border-bottom: 0;
    line-height: 2.75rem;
    font-size: 1.125rem;
    padding: 0;
  }
  .keyboard .none {
    border: 0;
    background: #d1d5db;
  }
  .keyboard .delete {
    border-bottom: 0;
    background: url(./images/delete.png) no-repeat center #d1d5db;
  }
  .keyboard .delete:active {
    border-bottom: 0;
    background-color: #fff;
  }
  /* 加载中 */
  .loading-wrap {
    position: absolute;
    left: 0;
    top: 2.5rem;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  .loading-wrap .loading {
    text-align: center;
  }
  .loading-wrap .loading .loading-ico {
    animation: rotate 0.6s linear infinite;
  }
  .loading-wrap .loading p {
    margin-top: 0.375rem;
  }
  @-webkit-keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* 支付失败弹窗 */
  .pay-fail {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }
  .pay-fail-lay {
    width: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 0.625rem;
    overflow: hidden;
  }
  .pay-fail-lay .title {
    line-height: 1.875rem;
    text-align: center;
    font-size: 1rem;
    padding: 0.625rem;
  }
  .pay-fail-lay .btns {
    display: flex;
    border-top: 1px solid #f1f1f1;
  }
  .pay-fail-lay .btns div {
    flex: 1;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
  .pay-fail-lay .btns div:active {
    background: #f3f3f3;
  }
  .pay-fail-lay .btns div:last-child {
    border-left: 1px solid #f1f1f1;
  }
</style>