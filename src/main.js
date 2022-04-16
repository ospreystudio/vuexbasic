import { createApp, h} from 'vue'
import App from './App.vue'
import store from "./store/Index"
const app = createApp({
    render: ()=>h(App)
})

app.use(store).mount('#app')
