import type {循环数据} from '@/@types/循环'

/**
 * @name 用于计算的循环数据
 * 该数据可以通过JCL分析器进行获取，也可以自己根据实际情况编写
 */

// 循环
// import 测试循环 from './测试循环.json'

import 云中剑_橙武 from './云中剑CW.json'
import 多3_紫武 from './多3紫武.json'
import 多5_紫武 from './多5紫武.json'
import 混排_紫武 from './混排紫武.json'
import 高5_紫武 from './高5紫武.json'
const 计算循环: 循环数据[] = [
    //测试循环
    多3_紫武,
    多5_紫武,
    高5_紫武,
    混排_紫武,
    云中剑_橙武
] as 循环数据[]

export default 计算循环
