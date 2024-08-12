import 循环模拟技能基础数据 from '../../../constant/skill'
import 有CD技能通用类 from '../../通用类/有CD技能通用类'
import { 箭形态枚举 } from '../../../constant/enum'

class 金乌见坠 extends 有CD技能通用类 {
  static 技能数据 = 循环模拟技能基础数据?.find((item) => item.技能名称 === '金乌见坠')

  constructor(模拟循环) {
    super(模拟循环)

    // 因为横断技能充能信息受奇穴影响，这里做覆盖
    金乌见坠.技能数据 = 模拟循环?.技能基础数据?.find((item) => item.技能名称 === '金乌见坠')

    this.初始化技能运行数据(金乌见坠.技能数据)
  }

  释放() {
    // 将箭袋中所有箭变为红箭，如果已经为蓝箭则变为紫箭
    const 新箭袋信息 = (this.模拟循环?.角色状态信息?.箭袋信息 || []).map((item) => {
      return item.箭形态 !== 箭形态枚举.紫箭
        ? {
            箭形态: item.箭形态 === 箭形态枚举.蓝箭 ? 箭形态枚举.紫箭 : 箭形态枚举.红箭,
          }
        : item
    })
    this.模拟循环.角色状态信息.箭袋信息 = 新箭袋信息

    if (this.模拟循环.校验奇穴是否存在('佩弦')) {
      this.模拟循环.添加buff({ 名称: '佩弦', 对象: '自身' })
    }
  }

  // 主动触发金乌充能/减冷却
  金乌充能(充能帧) {
    const 最大充能层数 = 金乌见坠?.技能数据?.最大充能层数 || 1
    const 当前层数 = this.技能运行数据?.当前层数
    const 计划下次充能时间点 = this.技能运行数据?.计划下次充能时间点 || 0
    const 新充能时间点 = 计划下次充能时间点 - 充能帧
    if (当前层数 < 最大充能层数) {
      if (新充能时间点 < this.模拟循环.当前时间) {
        // 最多只会充能一层
        if (充能帧 < (金乌见坠?.技能数据?.技能CD || 0)) {
          const 新层数 = 当前层数 + 1
          // 还没充满
          if (新层数 < 最大充能层数) {
            this.更新技能运行数据({
              当前层数: 新层数,
              计划下次充能时间点: 新充能时间点 + (金乌见坠?.技能数据?.技能CD || 0),
            })
          } else {
            this.更新技能运行数据({
              当前层数: 新层数,
              计划下次充能时间点: undefined,
              充能满第一次释放时间点: undefined,
            })
          }
        }
      } else {
        this.更新技能运行数据({
          当前层数: 当前层数,
          计划下次充能时间点: 新充能时间点,
        })
      }
    }
  }
}

export default 金乌见坠

export const 金乌见坠类型 = typeof 金乌见坠
