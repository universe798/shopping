//提供显示xtx-message组件的函数
//可导入使用也可挂载在vue实例上
import { render } from 'vue'
import { createVNode } from 'vue'
import XtxMessage from './xtx-message.vue'

const div = document.createElement('div')
div.setAttribute('class','xtx-message-container')
document.body.appendChild(div)
let timer = null

export default ({type,text}) => {
     const vnode = createVNode(XtxMessage,{type,text})
     render(vnode,div)
     clearTimeout(timer)
     timer = setTimeout(()=> {
        render(null,div)
     },2000)
}