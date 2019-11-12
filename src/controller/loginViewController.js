import Swiper from 'swiper'

export default {
  name: 'loginView',
  data () {
    return {
      loadLogin: false,
      conheight: {
        height: ''
      },
      chainId: '',
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.chainId == null || this.chainId.length === 0) {
        alert('请输入连锁编码')
        document.getElementById('chainId').focus()
        return
      }
      if (this.userName == null || this.userName.length === 0) {
        alert('请输入用户名')
        document.getElementById('userName').focus()
        return
      }
      var params = {
        chainId: this.chainId,
        userName: this.userName,
        password: this.password
      }
      this.$store.commit('showLoading')
      this.$http.post(this.NET.BASE_URL + '/user/login', params)
        .then(res => {
          this.$store.commit('hideLoading')
          console.log(res, 123)
          if (res.data && res.data.success) {
            this.$router.push('home')
          } else {
            if (res.data && res.data.msg) {
              alert(res.data.msg)
            } else {
              alert('登录失败')
            }
          }
        })
        .catch(res => {
          this.$store.commit('hideLoading')
          if (res.data && res.data.message) {
            alert(res.data.message)
          } else {
            alert('登录失败')
          }
        })
    },
    register: function () {
      alert('功能暂未开放！')
    },
    loadShow: function () {
      this.loadLogin = false
      let _this = this
      setTimeout(function () {
        _this.loadLogin = true
      }, 400)
    },
    initFrame: function () {
      this.conheight.height = window.innerHeight + 'px'
    },
    keyup: function (event) {
      if (event.keyCode === 13) {
        if (event.target.id === 'chainId') {
          document.getElementById('userName').focus()
        } else if (event.target.id === 'userName') {
          document.getElementById('password').focus()
        } else if (event.target.id === 'password') {
          this.login()
        }
        event.target.blur()
      }
    }
  },
  mounted () {
    new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination', // pagination分页器
      nextButton: '.swiper-button-next', // 前进后退按钮
      prevButton: '.swiper-button-prev',
      paginationClickable: true, // 参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
      spaceBetween: 30, // slide之间的距离（单位px）。
      centeredSlides: true, // 设定为true时，活动块会居中，而不是默认状态下的居左。
      loop : true, // 复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
      autoplay: 1000, // 自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
      autoplayDisableOnInteraction: false // 点击后打断auto-play
    })
    const that = this
    window.onresize = () => {
      return (() => {
        that.initFrame()
      })()
    }
  },
  created () {
    this.$cookie.clear()
    this.$cookie.set('userName', 'admin')
    this.$cookie.set('access_token', '123')
    this.loadShow()
    this.initFrame()
  }
}
