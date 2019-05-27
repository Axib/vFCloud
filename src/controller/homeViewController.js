// 收银
import settlement from '../components/cashier/settlementView'
import applyCard from '../components/cashier/applyCardView'
import recharge from '../components/cashier/rechargeView'
// 财务
import performanceStatistics from '../components/finance/performanceStatisticsView'
// 人事
import memberInventory from '../components/inventory/memberInventoryView'
// 会员
import memberCard from '../components/member/memberCardView'
import memberInfo from '../components/member/memberInfoView'
// 人事
import employeeTurnover from '../components/personnel/employeeTurnoverView'
// 设置
import commonDataSet from '../components/setting/commonDataSetView'
import systemParamSet from '../components/setting/systemParamSetView'
// 库存
import productInStock from '../components/warehouse/productInStockView'
import productOutStock from '../components/warehouse/productOutStockView'
// 关于
import about from '../components/aboutView'

export default {
  components: { // 注册
    settlement,
    recharge,
    applyCard,
    performanceStatistics,
    memberInventory,
    memberCard,
    memberInfo,
    employeeTurnover,
    commonDataSet,
    systemParamSet,
    productInStock,
    productOutStock,
    about
  },
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
            id: 'e38c5e7e7f6311e981b4w2163e0c7f33',
            name: '系统参数设置',
            key: 'systemParamSet',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f62131e981ba00163e0c7f3',
            name: '常用资料设置',
            key: 'commonDataSet',
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
            id: 'e38c5e7e7f6311esd1b4D0163e0c7f33',
            name: '业绩统计',
            key: 'performanceStatistics',
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
            id: 'e38c5e7emd9311e981b4H0163e0c7f33',
            name: '员工异动',
            key: 'employeeTurnover',
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
            id: 'e38c5e7e7f63102981b4k0163e0c7f33',
            name: '买单',
            key: 'settlement',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7elck311e981b4l0163e0c7f33',
            name: '充值',
            key: 'recharge',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7weck311e981b4l0163e0c7f33',
            name: '办卡',
            key: 'applyCard',
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
            id: 'e38c5e7e7f6311e981lom0163e0c7f33',
            name: '会员卡资料',
            key: 'memberCard',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7e7f6311e978g40N163e0c7f33',
            name: '会员资料',
            key: 'memberInfo',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f6311e9lxm400163e0c7f33',
          name: '库存',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_warehouse_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_warehouse_select.png',
          children: [{
            id: 'e38c5e7lo06311e981b40w163e0c7f33',
            name: '产品入库',
            key: 'productInStock',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }, {
            id: 'e38c5e7ekcm311e981br00163e0c7f33',
            name: '产品出库',
            key: 'productOutStock',
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
            id: 'e38c5e7e7f63ke9981by00163e0c7f33',
            name: '会员盘点',
            key: 'memberInventory',
            normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_normal.png',
            selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_setting_select.png',
            children: []
          }]
        },
        {
          id: 'e38c5e7e7f631lox81b400163e0c7f33',
          name: '关于',
          key: 'about',
          normalUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_about_normal.png',
          selectUrl: '//przpvntfi.bkt.clouddn.com/image/menu/menu_about_select.png'
        }
      ],
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
            key: menuItem.key
          })
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
          key: childItem.key
        })
      }
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
