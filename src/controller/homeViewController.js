import configuration from './configurationController'

export default {
  name: 'homeView',
  components: configuration.components,
  data () {
    return {
      menu_open: false,
      menu_index: '',
      menu_child_index: '',
      ops: {
        mode: 'native',
        bar: {background: 'black'}
      },
      opsTab: {
        mode: 'native',
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: true,
          background: 'rgba(0, 0, 0, 0.3)',
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: '6px',
          disable: false,
          bottom: 0
        }
      },
      menu_list: [],
      conheight: {
        height: ''
      },
      componentPages: [
        {
          name: 'loginView',
          key: 'login'
        }
      ],
      labelList: []
    }
  },
  methods: {
    goBack: function () {
      this.$router.push(-1)
    },
    displayControl: function () {
      this.menu_open = !this.menu_open
      if (!this.menu_open) {
        this.menu_list.forEach(function (item) {
          item.open = false
        })
      } else if (this.menu_child_index) {
        var find = 0
        for (var i = 0; i < this.menu_list.length; i++) {
          var item = this.menu_list[i]
          if (item.children) {
            for (var j = 0; j < item.children.length; j++) {
              var child = item.children[j]
              if (child.id == this.menu_child_index) {
                let that = this
                setTimeout(function () {
                  that.expansionMenu(i)
                }, 300)
                find = 1
                break
              }
            }
            if (find) break
          }
        }
      }
    },
    expansionMenu: function (index) {
      var menuItem = this.menu_list[index]
      if (menuItem.children && menuItem.children.length > 0) {
        menuItem.open = !menuItem.open
        this.menu_list.splice(index, 1, menuItem)
      } else {
        this.menu_index = menuItem.id
        this.menu_child_index = ''
        var find = false
        for (var i = 0; i < this.labelList.length; i++) {
          var label = this.labelList[i]
          if (label.id == this.menu_index) {
            find = true
            break
          }
        }
        if (!find) {
          this.labelList.push({
            id: menuItem.id,
            menuKey: menuItem.menuKey,
            menuName: menuItem.menuName,
            parentId: menuItem.parentId,
            child: 0
          })

          if (this.$refs.tabLi && this.$refs.tabUl) {
            let that = this
            setTimeout(function () {
              var w = 0
              that.$refs.tabLi.forEach(function (item) {
                w += parseInt(item.offsetWidth) + 38
              })
              that.$refs.tabUl.style.width = w + 'px'
            }, 50)
          }
        }
      }
    },
    expansionChildMenu: function (childItem) {
      this.menu_child_index = childItem.id
      this.menu_index = ''
      var find = false
      for (var i = 0; i < this.labelList.length; i++) {
        var label = this.labelList[i]
        if (label.id == this.menu_child_index) {
          find = true
          break
        }
      }
      if (!find) {
        this.labelList.push({
          id: childItem.id,
          menuKey: childItem.menuKey,
          menuName: childItem.menuName,
          parentId: childItem.parentId,
          child: 1
        })
        if (this.$refs.tabLi && this.$refs.tabUl) {
          let that = this
          setTimeout(function () {
            var w = 0
            that.$refs.tabLi.forEach(function (item) {
              w += parseInt(item.offsetWidth) + 38
            })
            that.$refs.tabUl.style.width = w + 'px'
          }, 50)
        }
      }
    },
    chooseLabel: function (label) {
      this.menu_child_index = label && label.child ? label.id : ''
      this.menu_index = label && !label.child ? label.id : ''
      // 把关闭的菜单展开
      if (label.parentId) {
        for (var i = 0; i < this.menu_list.length; i++) {
          var item = this.menu_list[i]
          if (!item.open && item.id == label.parentId) {
            this.expansionMenu(i)
            break
          }
        }
      }
      if (this.$refs.tabLi && this.$refs.tabUl) {
        let that = this
        setTimeout(function () {
          var w = 0
          that.$refs.tabLi.forEach(function (item) {
            w += parseInt(item.offsetWidth) + 38
          })
          that.$refs.tabUl.style.width = w + 'px'
        }, 50)
      }
    },
    closeLabel: function (index, label, e) {
      this.labelList.splice(index, 1)
      if (this.menu_child_index == label.id || this.menu_index == label.id) {
        var labelItem = null
        if (this.labelList.length > index) {
          labelItem = this.labelList[index]
        } else {
          labelItem = this.labelList[this.labelList.length - 1]
        }
        let that = this
        setTimeout(function () {
          that.chooseLabel(labelItem)
        }, 1)
      }
      // 终止事件冒泡
      e.stopPropagation()
    },
    initFrame: function () {
      this.conheight.height = window.innerHeight + 'px'
    },
    exitOut: function () {
      this.$router.back()
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        that.initFrame()
      })()
    }
  },
  created () {
    this.initFrame()
    let that = this
    setTimeout(function () {
      that.displayControl()
    }, 1000)
    this.$http.get(this.NET.BASE_URL + '/auth/user/privilege/menu/get')
      .then(res => {
        that.menu_list = res.data.result
      })
      .catch(res => {
        alert(res)
      })
  }
}
