import Swiper from 'swiper'

export default {
  name: 'loginView',
  data () {
    return {
      loadLogin: false
    }
  },
  methods: {
    goBack: function () {
      this.$router.push(-1)
    },
    login () {
      this.$http.get('http://47.100.170.235:8088/member/comp/001/get')
        .then(res => {
          console.log(res, 123)
          this.$router.push('homeView')
        })
        .catch(res => {
          console.log(res, 321)
          console.log(this.loadLogin, 12321)
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
  },
  created () {
    this.$cookie.clear()
    this.$cookie.set('userName', 'admin')
    this.$cookie.set('access_token', '123')
    this.loadShow()
  }
}
