
参考：https://blog.csdn.net/qq_42991509/article/details/103927293

在项目main.js中引入注册:
import Message from "./components/Message";
Vue.use(Message); // 因为我们的对象上定义了 install 方法, 所以可以直接调用 Vue 的 use 方法

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

使用：
this.$message({
    type: “error”,
    message: “消息内容”，
    duration： 6000
})

问题：
[Vue warn]: Error in render: "TypeError: Cannot read property 'bar' of undefined"

found in

---> <VSnackbar>
       <Root>

解决：
参考https://gist.github.com/eolant/ba0f8a5c9135d1a146e1db575276177d
见：'./question.jpg'
效果：未解决

