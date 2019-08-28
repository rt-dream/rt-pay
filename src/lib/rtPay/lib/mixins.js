
  export default {
    data() {
      return {
        password: '', // 支付密码
        payStatus: 0, // 支付状态，0无状态， 1正在支付，2支付成功
        failTip: '支付密码错误', //
        isShowFail: false,
        keyboardList: [
          {
            num: 1,
            character: '',
            style: true
          },
          {
            num: 2,
            character: 'ABC',
          },
          {
            num: 3,
            character: 'DEF',
          },
          {
            num: 4,
            character: 'GHI',
          },
          {
            num: 5,
            character: 'JKL',
          },
          {
            num: 6,
            character: 'MNO',
          },
          {
            num: 7,
            character: 'PQRS',
          },
          {
            num: 8,
            character: 'TUV',
          },
          {
            num: 9,
            character: 'WXYZ',
          },
          {
            type: null,
          },
          {
            num: 0,
          },
          {
            type: 'delete',
          },
        ],
      };
    },
    props: {
      // 英文字母显示隐藏
      characterShow: {
        type: Boolean,
        default: true,
      },
      // 支付密码框位数
      digit: {
        type: Number,
        default: 6,
      },
      // 正在支付的文字提示
      loadingText: {
        type: String,
        default: '正在支付',
      },
      // 支付成功的文字提示
      finishedText: {
        type: String,
        default: '支付成功',
      },
      // 支付成功的提示显示时间
      duration: {
        type: Number,
        default: 500,
      },
    },
    watch: {
      // 监听支付密码，支付密码输入完成后触发input-end回调
      password(n, o) {
        this.$emit('emit-pwd', n);
        if (n.length === this.digit) {
          this.payStatus = 1;
          this.$emit('input-end', this.password);
        }
      },
    },
    methods: {
      // 点击密码操作
      onKeyboard(val) {
        if (val.type === null) return;
        if (typeof val.num === 'number') {
          // 截图前六位密码
          this.password = (this.password + val.num).slice(0, this.digit);
        }
        // 密码回删
        if (val.type === 'delete') {
          // 密码已经为空时，不回删
          if (this.password.length === 0) return;
          // 回删一位密码
          this.password = this.password.slice(0, this.password.length - 1);
        }
      },

      // 取消支付
      cancel() {
        // 支付过程中，不允许取消支付
        if (this.payStatus === 1) return;
        // 清空密码
        this.password = '';
        // 恢复支付状态
        this.payStatus = 0;
        // 关闭组件，并触发父子组件数据同步
        this.$emit('change', false);
        // 触发父组件close自定义事件
        this.$emit('close');
      },

      //支付成功
      $success() {
        return new Promise((resolve, reject) => {
          // 支付成功立即显示成功状态
          this.payStatus = 2;
          // 待指定间隔后，隐藏整个支付弹窗，并resolve
          setTimeout(() => {
            this.cancel();
            resolve();
          }, this.duration);
        });
      },

      // 支付失败
      // 隐藏加载提示框，显示支付失败确认框
      $fail(tip) {
        tip && typeof tip === 'string' && (this.failTip = tip);
        this.payStatus = 0;
        this.isShowFail = true;
      },

      // 重新输入
      // 清空之前输入的密码，隐藏支付失败的提示框
      reInput() {
        this.password = '';
        this.isShowFail = false;
      },

      // 忘记密码,触发父组件的forget自定义事件
      forget() {
        this.$emit('forget');
      },
    },
  };