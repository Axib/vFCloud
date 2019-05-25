
export default {
  name: 'homeView',
  data () {
    return {
      menu_open: false,
      menu_index: -1,
      menu_list: [
        {
          name: '设置',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png'
        },
        {
          name: '财务',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_finance_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_finance_select.png'
        },
        {
          name: '人事',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_personnel_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_personnel_select.png'
        },
        {
          name: '收银',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_cashier_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_cashier_select.png'
        },
        {
          name: '会员',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_member_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_member_select.png'
        },
        {
          name: '库存',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png'
        },
        {
          name: '盘点',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_inventory_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_inventory_select.png'
        },
        {
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
    },
    expansionMenu: function (index) {
      this.menu_index = index
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
  }
}
