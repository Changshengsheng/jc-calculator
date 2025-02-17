/**
 * 常量文件
 */

import type { 延迟数据类型 } from '@/@types/常量'

export const DEFAULT_PROJECT_NAME = '默认方案'

export const 自身等级 = 120 // 当前角色等级
export const 每等级减伤 = 0.05

export const 等级系数 = 450
export const 等级常数 = 45750

// 120级自身属性系数
// 数据源：https://www.jx3box.com/bps/45088

export const 属性系数 = {
  会心: 9.53,
  会效: 3.335,
  御劲: 9.53,
  化劲: 1.38, // *
  命中: 6.931,
  闪避: 3.703, // *
  招架: 4.345, // *
  无双: 9.189,
  防御: 5.091, // *
  破防: 9.53,
  急速: 11.695, // 96483.75
  御劲减会伤: 2.557,
}

type 属性系数类型 = typeof 属性系数

export const 自身属性系数: 属性系数类型 = {} as any

for (const 属性 in 属性系数) {
  自身属性系数[属性] = 属性系数[属性] * (等级系数 * 自身等级 - 等级常数)
}

// 注意这玩意本质上是小数算的，不是1024
export const 基础系数 = {
  身法转会心: 0.64,
  力道转攻击: 0.15,
  力道转破防: 0.3,
  根骨转会心: 0.64,
  元气转攻击: 0.18,
  元气转破防: 0.3,
}

export const 精炼加成系数 = {
  0: 0,
  1: 0.005,
  2: 0.013,
  3: 0.024,
  4: 0.038,
  5: 0.055,
  6: 0.075,
  7: 0.098,
  8: 0.124,
  9: 0.153,
  10: 0.185,
}

export const 延迟设定: 延迟数据类型[] = [
  {
    label: '59剑入欧皇局',
    value: 0,
  },
  // {
  //   label: '低延迟(30-60)',
  //   value: 1,
  // },
  // {
  //   label: '中延迟(60-90)',
  //   value: 2,
  // },
  // {
  //   label: '高延迟(90以上)',
  //   value: 3,
  // },
]
