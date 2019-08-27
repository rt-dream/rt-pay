<template>
  <!--密码框-->
  <div class="password-content">
    <div class="pass-box">
      <ul class="pass-area"
          @click="openKeyboard">
        <li class="pass-item"
            :class="{on: password.length > index}"
            v-for="(item, index) in digit"
            :key="index"></li>
      </ul>
    </div>
    <slot name="keyboard"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      // 支付密码
      password: {
        type: String,
      },
      // 支付密码框位数
      digit: {
        type: Number,
        default: 6,
      },
    },
    methods: {
      openKeyboard() {
        this.$emit('open-keyboard', true);
      },
    },
  };
</script>

<style scoped>
  /* 密码框 */
  .pass-box {
    padding: 1.875rem 2.5rem;
  }
  .pass-area {
    display: flex;
    border: 1px solid #e7e7e7;
    border-radius: 0.25rem;
    background: #fff;
  }
  .pass-area .pass-item {
    height: 2.938rem;
    flex: 1 1 3.125rem;
    border-right: 1px solid #e7e7e7;
    position: relative;
  }
  @media screen and (max-width: 320px) {
    .pass-area .pass-item {
      height: 2.5rem;
    }
  }
  .pass-area .pass-item:last-child {
    border-right: 0;
  }
  .pass-area .pass-item.on::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background: #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  /* 密码框 */
  .forget-pass {
    padding: 0.625rem 1.25rem 0;
    text-align: right;
  }
  .forget-pass-btn {
    color: #0083e3;
  }
</style>