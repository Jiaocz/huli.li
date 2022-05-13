import { createApp } from 'vue'
import { author, name, version } from '../package.json'
import App from './App.vue'

console.log(`%c${name}%chttps://huli.li/%chttps://github.com/Jiaocz/huli.li`, 'color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .5em; font-weight: bold;', 'color: #e4a240; border: 1px #e4a240 solid; border-radius: 0; padding: .5em;','color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .5em;');
console.log(`%cAuthor%c${author.name}%c${author.url}`, 'color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .2em .4em; font-weight: bold; font-size: 12px;', 'color: #e4a240; border: 1px #e4a240 solid; border-radius: 0; margin: 0; padding: .2em .4em; font-size: 12px;','color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .2em .4em; margin: 0; font-size: 12px;');
console.log(`%cVersion: %c${version}`, 'color: rgba(255,255,255,.8); background: #e4a240; border-radius: 5px 0 0 5px; margin: 0; border: #e4a240 1px solid; padding: .2em .4em; font-weight: bold; font-size: 12px;', 'color: #e4a240; border: 1px #e4a240 solid; border-radius: 0 5px 5px 0; padding: .2em .4em; font-size: 12px;');
createApp(App).mount('#app')

// @ts-ignore 
window._mfq = window._mfq || [];
(function() { var mf = document.createElement("script"); mf.type = "text/javascript"; mf.defer = true; mf.src = "https://orangii.cn/mouseflow/6589d873-01ff-44a5-b883-bee2ad228e24.js"; document.getElementsByTagName("head")[0].appendChild(mf); })();