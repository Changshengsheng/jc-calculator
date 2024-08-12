/**
 * @name 心法模块-山海心诀
 * 模块写入者：唐宋
 */
import type { 心法配置类型 } from '@/心法模块/interface'

import 背景图 from './资源/背景图'
import 默认数据 from './默认数据'
import 技能系数, { 技能增益 } from './技能系数'
import 奇穴数据 from './奇穴'
import 计算循环 from './计算循环'

const 心法配置: 心法配置类型 = {
  名称: '太玄经',
  数据提供: '数据：考拉 唐宋；测试：风雪入我怀',
  所属门派: '衍天',
  简写: '1456789',
  主属性: '元气',
  功法: '内功',
  基础属性: { 基础攻击: 4222, 会心等级: 2390 },
  主属性额外加成: { 面板攻击: 1843 / 1024, 会心等级: 481 / 1024 },
  奇穴数据: 奇穴数据,
  技能系数: 技能系数,
  技能增益: 技能增益,
  计算循环: 计算循环,
  默认数据: 默认数据,
  系统配置: {
    主题色: 'rgb(119 74 186)',
    // 主题色: '#593391',
    // 主题色: '#9f80e0',
    // 主题色: '#483679',
    心法图标: 'https://img.jx3box.com/image/xf/10615.png',
    背景图: 背景图,
    背景色渐变: `linear-gradient(to right, rgba(0,0,0,0.6) 5%, rgba(79,25,72, 0.25) 70%)`,
    // 背景色: 'rgba(168,88,157, 0.615)',
  },
}

export default 心法配置
