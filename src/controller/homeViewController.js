
export default {
  name: 'homeView',
  data () {
    return {
      menu_open: false,
      menu_index: '',
      menu_child_index: '',
      ops: {
        mode: 'native',
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: false
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, // 是否只有滚动的时候才显示滚动条
          background: 'black'
        }
      },
      menu_list: [
        {
          id: 'e38c5e7e7f6311e981b400163e0c7f33',
          name: '设置',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
          children: [{
            id: 'e38c5e7e7f6311e981b412163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f62131e981b400163e0c7f3',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f0231e981b400163e0c7f33',
          name: '财务',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_finance_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_finance_select.png',
          children: [{
            id: 'e38c5e7e7f6311esd1b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311e9k1b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7qw011e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f2ps1e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f630al981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f6311e981b40kg63e0c7f33',
          name: '人事',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_personnel_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_personnel_select.png',
          children: [{
            id: 'e38c5e7emd9311e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e0f3311e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f631ks981b400163e0c7f33',
          name: '收银',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_cashier_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_cashier_select.png',
          children: [{
            id: 'e38c5e7e7f63102981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7elck311e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7cls11e981b400163e0c7f33',
          name: '会员',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_member_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_member_select.png',
          children: [{
            id: 'e38c5e7e7f6311e981lor0163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311e978g400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311ecn5b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f6311e9lxm400163e0c7f33',
          name: '库存',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
          children: [{
            id: 'e38c5e7lo06311e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7ekcm311e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f6311elskb400163e0c7f33',
          name: '盘点',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_inventory_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_inventory_select.png',
          children: [{
            id: 'e38c5e7e7f63ke9981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311e9xl0b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311elofdd400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6os0e981b400163e0c7f33',
            name: '设置',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f631lox81b400163e0c7f33',
          name: '关于',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_about_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_about_select.png'
        }
      ],
      conheight: {
        height: ''
      }
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
          item.close = true
        })
      }
    },
    expansionMenu: function (index) {
      var menuItem = this.menu_list[index]
      if (menuItem.children && menuItem.children.length > 0) {
        menuItem.open = !menuItem.open
        if (!menuItem.open) {
          menuItem.close = true
        } else {
          menuItem.close = false
        }
        this.menu_list.splice(index, 1, menuItem)
      } else {
        this.menu_index = index
      }
    },
    expansionChildMenu: function (childItem) {
      this.menu_child_index = childItem.id
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
  }
}
