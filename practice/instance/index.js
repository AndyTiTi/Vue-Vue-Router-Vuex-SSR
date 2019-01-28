import Vue from 'vue'

// new Vue({
//     el:"#root",
//     template:"<div>this is content</div>"
// })

const app = new Vue({
    // el:"#root",
    data:{
        text:0
    },
    // watch:{
    //   text(newText,oldText){
    //       console.log(`${newText} : ${oldText}`)
    //   }
    // },
    template:"<div ref='div'>{{text}}</div>"
})
app.$mount('#root')

setInterval(function () {
    // app.text+=1
    // app.$forceUpdate()   强制组建渲染，建议在初始化组件时进行默认赋值
    app.$data.text+=1
},1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// app.$options.render=(h)=>{
//     return h('div',{},'new render function')
// }

// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)  //服务端渲染用到


// 方法

//vue实例内部定义的watch属性在vue被销毁时也随之销毁
// app.$watch('text',(newText,oldText)=>{
//     console.log(`${newText}  ${oldText}`)  //需要手动销毁
// })

// const unWatch = app.$watch('text',(newText,oldText)=>{
//     console.log(`${newText}  ${oldText}`)
// })
// setTimeout(function () {
//     unWatch()
// },2000)

app.$on('test',(a,b)=>{
    console.log(`test emited ${a}  ${b}`)
})

app.$emit('test',6,2)