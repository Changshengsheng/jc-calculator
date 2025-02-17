import { Buff枚举, 循环基础技能数据类型, 日志类型 } from '../simulator/type'
import { 基础GCD帧, 每秒郭氏帧 } from '.'

const 循环模拟技能基础数据: 循环基础技能数据类型[] = [
  {
    技能名称: '行云势·一',
    技能释放后添加GCD: 基础GCD帧,
    回复锐意: 10,
    造成伤害次数: 1,
    技能CD: 0,
    技能GCD组: '公共',
    技能类型: '傍身',
    图标: 'https://icon.jx3box.com/icon/17567.png',
  },
  {
    技能名称: '行云势·二',
    技能释放后添加GCD: 基础GCD帧,
    回复锐意: 10,
    造成伤害次数: 1,
    技能CD: 0,
    技能GCD组: '公共',
    技能类型: '傍身',
    图标: 'https://icon.jx3box.com/icon/17733.png',
  },
  {
    技能名称: '行云势·三',
    技能释放后添加GCD: 基础GCD帧,
    回复锐意: 10,
    造成伤害次数: 1,
    技能CD: 0,
    技能GCD组: '公共',
    技能类型: '傍身',
    图标: 'https://icon.jx3box.com/icon/17744.png',
  },
  {
    技能名称: '决云势·一',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能CD: 每秒郭氏帧 * 15,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17569.png',
  },
  {
    技能名称: '决云势·二',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17741.png',
  },
  {
    技能名称: '横云势·一',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能CD: 每秒郭氏帧 * 15,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17574.png',
  },
  {
    技能名称: '横云势·二',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17572.png',
  },
  {
    技能名称: '停云势',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能CD: 每秒郭氏帧 * 15,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17568.png',
  },
  {
    技能名称: '留客雨',
    技能释放后添加GCD: 基础GCD帧,
    回复锐意: 30,
    造成伤害次数: 1,
    技能GCD组: '自身',
    技能类型: '对阵',
    技能CD: 每秒郭氏帧 * 8,
    图标: 'https://icon.jx3box.com/icon/17580.png',
  },
  {
    技能名称: '灭影追风',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 0,
    技能CD: 每秒郭氏帧 * 20,
    技能GCD组: '公共',
    技能类型: '对阵',
    图标: 'https://icon.jx3box.com/icon/17576.png',
  },
  {
    技能名称: '孤风破浪',
    技能释放后添加GCD: 基础GCD帧,
    造成伤害次数: 1,
    技能CD: 每秒郭氏帧 * 60,
    技能GCD组: '公共',
    技能类型: '绝技',
    图标: 'https://icon.jx3box.com/icon/17575.png',
  },
]

export default 循环模拟技能基础数据

export const 日志类型数组: 日志类型[] = [
  '释放技能',
  '自身buff变动',
  '目标buff变动',
  '造成伤害',
  '技能释放结果',
  '等CD',
]

// Map预备数据
export const 原始Buff数据: Buff枚举 = {
  // Buff
  '灭影追风·悟': {
    名称: '灭影追风·悟',
    最大层数: 1,
    最大持续时间: 每秒郭氏帧 * 10,
    图标: 'https://icon.jx3box.com/icon/17576.png',
  },
  '披靡·悟': {
    名称: '披靡·悟',
    最大层数: 5,
    最大持续时间: 每秒郭氏帧 * 8,
    图标: 'https://icon.jx3box.com/icon/17742.png',
  },
  行链: {
    名称: '行链',
    最大层数: 2,
    最大持续时间: 每秒郭氏帧 * 4,
    图标: 'https://icon.jx3box.com/icon/17733.png',
  },
  决链: {
    名称: '决链',
    最大层数: 1,
    最大持续时间: 每秒郭氏帧 * 10,
    图标: 'https://icon.jx3box.com/icon/17569.png',
  },
  横链: {
    名称: '横链',
    最大层数: 1,
    最大持续时间: 每秒郭氏帧 * 10,
    图标: 'https://icon.jx3box.com/icon/17572.png',
  },
  横云一式: {
    名称: '横云一式',
    最大层数: 1,
    最大持续时间: 每秒郭氏帧 * 10,
    图标: 'https://icon.jx3box.com/icon/17574.png',
  },
  // 停云势: {
  //   名称: '停云势',
  //   最大层数: 1,
  //   最大持续时间: 每秒郭氏帧 * 5,
  //   图标: 'https://icon.jx3box.com/icon/17568.png',
  // },
  大橙武增伤: {
    名称: '大橙武增伤',
    最大层数: 1,
    最大持续时间: 每秒郭氏帧 * 30,
    图标: 'https://icon.jx3box.com/icon/17801.png',
  },
  // DOT
  流血: {
    名称: '流血',
    最大层数: 3,
    最大作用次数: 9,
    最大持续时间: 每秒郭氏帧 * 18,
    伤害频率: 32,
    图标: 'https://icon.jx3box.com/icon/17574.png',
  },
  截辕: {
    名称: '截辕',
    最大层数: 1,
    最大作用次数: 6,
    最大持续时间: 每秒郭氏帧 * 12,
    伤害频率: 32,
    图标: 'https://icon.jx3box.com/icon/17759.png',
  },
}
