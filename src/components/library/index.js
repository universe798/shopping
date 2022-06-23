// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
// import defaultImg from '@/assets/images/200.png'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'
// 批量注册组件
import Message from "./Message"
const importFn = require.context('./',false,/\.vue$/)

export default {
    install (app) {
    //    app.component(XtxSkeleton.name,XtxSkeleton) 
    //    app.component(XtxCarousel.name, XtxCarousel)
    //    app.component(XtxMore.name, XtxMore)
    //    app.component(XtxBread.name, XtxBread)
    //    app.component(XtxBreadItem.name, XtxBreadItem)
    importFn.keys().forEach(key => {
        // 导入组件
        const component = importFn(key).default
        // 注册组件
        app.component(component.name, component)
      })
   
    
    defineDirective(app)
    //定义原形函数
    app.config.globalProperties.$message = Message

    }
}

const defineDirective = (app) => {
    app.directive('lazy',{
        mounted (el, binding) {
            const observe = new IntersectionObserver(([{ isIntersecting}]) => {
                if (isIntersecting) {
                    //停止观察
                    observe.unobserve(el)
                    el.onerror = () => {
                        el.src = defaultImg
                    }
                    el.src = binding.value
                }
            },{
                threshold: 0
            })
            //开启观察
            observe.observe(el)
        }
    })
}

