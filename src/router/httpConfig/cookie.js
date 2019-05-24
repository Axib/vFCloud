import Vue from 'vue'

/* 自定义cookie相关方法 */
Vue.prototype.set = function (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + d.toUTCString()
  console.info(cname + '=' + cvalue + '; ' + expires)
  document.cookie = cname + '=' + cvalue + '; ' + expires
  console.info(document.cookie)
}

// 获取cookie
Vue.prototype.get = function (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}

// 清除cookie
Vue.prototype.clear = function () {
  this.set('userName', '', -1)
  this.set('access_token', '', -1)
}

Vue.prototype.check = function () {
  var user = this.get('userName')
  if (user !== '') {
    alert('Welcome again ' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user != null) {
      this.set('userName', user, 365)
    }
  }
}

export default{
  get: Vue.prototype.get,
  set: Vue.prototype.set,
  clear: Vue.prototype.clear
}
