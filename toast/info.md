参考：https://blog.csdn.net/weixin_42207975/article/details/107313106

在项目main.js中引入注册:
import toast from './components/common/toast'
Vue.use(toast)

使用：
var message = "123456";
this.$toast.show(message, 1500);






