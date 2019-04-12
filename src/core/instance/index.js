import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options) //最先执行的初始化函数
}

initMixin(Vue)     //初始化混入
stateMixin(Vue)    //状态混入
eventsMixin(Vue)   //事件混入
lifecycleMixin(Vue)//生命周期混入
renderMixin(Vue)   //渲染混入

export default Vue
