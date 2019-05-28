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
  }
}
