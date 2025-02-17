import { 技能增益列表类型 } from '@/@types/技能'
import { 属性类型 } from '@/@types/属性'
import 通用增益 from './通用增益/通用增益'

const 三柴剑法增益: 技能增益列表类型[] = [
  ...通用增益,
  {
    增益名称: '太虚剑意普通攻击增伤',
    增益所在位置: '职业',
    增益类型: '全局启用',
    增益启用: true,
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 205 / 1024 }],
  },
]

export default 三柴剑法增益
