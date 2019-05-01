export default {
  name: 'loginView',
  methods: {
    goBack: function () {
      this.$router.push(-1)
    },
    login () {
      this.$http.get('http://47.100.170.235:8088/member/comp/001/get')
        .then(res => {
          console.log(res, 123)
        })
        .catch(res => {
          console.log(res, 321)
        })
    }
  },
  created () {
    this.$cookie.clear()
    this.$cookie.set('userName', 'admin')
    this.$cookie.set('access_token', '123')
  }
}
