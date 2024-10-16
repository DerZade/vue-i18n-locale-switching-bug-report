import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'


const i18n = createI18n({
    locale: 'ja',
    messages: {
        en: {
            hello: 'hello world'
        },
        ja: {
            hello: 'こんにちは、世界'
        }
    }
})

createApp(App).use(i18n).mount('#app')
