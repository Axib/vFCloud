
export default {
  name: 'homeView',
  data () {
    return {
      menu_open: false,
      menu_index: -1,
      menu_list: [
        {name: '设置'},
        {name: '财务'},
        {name: '人事'},
        {name: '收银'},
        {name: '会员'},
        {name: '库存'},
        {name: '盘点'},
        {name: '关于'}
      ]
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
    }
  }
}
