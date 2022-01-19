var S=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(t,a,e)=>a in t?S(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,b=(t,a)=>{for(var e in a||(a={}))B.call(a,e)&&F(t,e,a[e]);if(w)for(var e of w(a))I.call(a,e)&&F(t,e,a[e]);return t},x=(t,a)=>T(t,C(a));import{$ as _,d as f,r as l,o as u,c as d,w as j,v as N,u as p,a as v,i as L,b as A,t as i,n as q,e as E,f as k,p as M,g as O,h as g,j as V}from"./vendor.378b18a3.js";const z=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}};z();const P="T2DBZ-JTO3F-2G7JB-NXUR7-SNY3O-7TBAM",$="ed95368f5ed4427f9ad8594d5b1a6850",G=async()=>await _.ajax({type:"get",url:`https://apis.map.qq.com/ws/location/v1/ip?key=${P}&output=jsonp`,dataType:"jsonp",jsonpCallback:"callback"}),J=async({lat:t,lng:a})=>{var c;const e=new Date,r=e.getFullYear(),s=e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1,o=e.getDate()<10?`0${e.getDate()}`:e.getDate(),n=await _.ajax({type:"get",url:"https://devapi.qweather.com/v7/astronomy/sun",data:{key:$,location:`${a},${t}`,date:`${r}${s}${o}`}});return n.refer.sources&&n.refer.sources.length>0&&console.log(`\u65E5\u51FA\u65E5\u843D\u4FE1\u606F\u6765\u6E90\uFF1A${n.refer.sources.join(",")}\uFF0C\u8BB8\u53EF\u6216\u7248\u6743\u58F0\u660E\uFF1A${(((c=n.refer)==null?void 0:c.license)||[]).join(",")}`),n},R=async({lat:t,lng:a})=>{var r;const e=await _.ajax({type:"get",url:"https://devapi.qweather.com/v7/weather/now",data:{key:$,location:`${a},${t}`}});return e.refer.sources&&e.refer.sources.length>0&&console.log(`\u65E5\u51FA\u65E5\u843D\u4FE1\u606F\u6765\u6E90\uFF1A${e.refer.sources.join(",")}\uFF0C\u8BB8\u53EF\u6216\u7248\u6743\u58F0\u660E\uFF1A${(((r=e.refer)==null?void 0:r.license)||[]).join(",")}`),e};var h=(t,a)=>{const e=t.__vccOpts||t;for(const[r,s]of a)e[r]=s;return e};const Y={class:"the-container"},K=A('<label for="toggle" data-v-ed1dfa18></label><div class="day-night-cont" data-v-ed1dfa18><span class="the-sun" data-v-ed1dfa18></span><div class="the-moon" data-v-ed1dfa18><span class="moon-inside" data-v-ed1dfa18></span></div></div><div class="switch" data-v-ed1dfa18><div class="button" data-v-ed1dfa18><div class="b-inside" data-v-ed1dfa18></div></div></div><div class="c-window" data-v-ed1dfa18><span class="the-sun" data-v-ed1dfa18></span><span class="the-moon" data-v-ed1dfa18></span><div class="the-fox" data-v-ed1dfa18><div class="fox-face" data-v-ed1dfa18><section class="eyes left" data-v-ed1dfa18></section><section class="eyes right" data-v-ed1dfa18></section><span class="nose" data-v-ed1dfa18></span><div class="white-part" data-v-ed1dfa18><span class="mouth" data-v-ed1dfa18></span></div></div></div></div><p class="copyright" data-v-ed1dfa18>This cute fox is forked from <a href="https://codepen.io/AngelaVelasquez/pen/cihEG" target="_blank" rel="noopener noreferrer" data-v-ed1dfa18>https://codepen.io/AngelaVelasquez/pen/cihEG</a></p>',5),H=f({props:{isDaytime:{type:Boolean,default:!0}},setup(t){let e=l(t.isDaytime);return(r,s)=>(u(),d("div",Y,[j(v("input",{type:"checkbox",id:"toggle","onUpdate:modelValue":s[0]||(s[0]=o=>L(e)?e.value=o:e=o)},null,512),[[N,p(e)]]),K]))}});var U=h(H,[["__scopeId","data-v-ed1dfa18"]]);const W=t=>(M("data-v-0d5f1dc3"),t=t(),O(),t),Q={id:"clock"},X={class:"time"},Z={key:0,class:"text"},ee={key:1,class:"text"},te=W(()=>v("i",{class:"fas fa-sun",style:{"margin-right":".5em"}},null,-1)),ae={beforeDestroy(){clearInterval(timerID)}},se=f(x(b({},ae),{props:{weather:null,sun:null},setup(t){let a=l("");const e=(s,o)=>{let n="";for(let c=0;c<o;c++)n+="0";return(n+s).slice(-o)},r=()=>{let s=new Date;a.value=`${e(s.getHours(),2)}:${e(s.getMinutes(),2)}:${e(s.getSeconds(),2)}`};return r(),setInterval(r,1e3),(s,o)=>{var n;return u(),d("div",Q,[v("p",X,i(p(a)),1),t.weather?(u(),d("p",Z,[v("i",{class:q({["qi-"+((n=t.weather)==null?void 0:n.now.icon)]:!0}),style:{"margin-right":".5em"}},null,2),E(i(t.weather.now.text)+", "+i(t.weather.now.temp)+"\u2103\uFF08\u4F53\u611F\u6E29\u5EA6"+i(t.weather.now.feelsLike)+"\u2103\uFF09,"+i(t.weather.now.windDir)+i(t.weather.now.windScale)+"\u7EA7\uFF0C\u76F8\u5BF9\u6E7F\u5EA6"+i(t.weather.now.humidity)+"% ",1)])):k("",!0),t.sun?(u(),d("p",ee,[te,E("\u65E5\u51FA\uFF1A"+i(new Date(t.sun.sunrise).toLocaleTimeString())+" - \u65E5\u843D\uFF1A"+i(new Date(t.sun.sunset).toLocaleTimeString()),1)])):k("",!0)])}}}));var oe=h(se,[["__scopeId","data-v-0d5f1dc3"]]);const ne={class:"footer"},re=A('<a href="https://orangii.cn" target="_blank" rel="noopener" style="color:#e4a240;" data-v-7211be04>\xA9 Orangii</a><a href="https://myssl.com/huli.li" target="_blank" rel="noopener noreferrer" style="color:#66c18c;" data-v-7211be04><i class="fas fa-lock" data-v-7211be04>\xA0Safe</i></a><a href="https://orangii.cn/friends/" target="_blank" style="color:#e4a240;" data-v-7211be04><i class="fas fa-link" data-v-7211be04></i>\xA0\u53CB\u60C5\u8FDE\u63A5</a><a href="https://icp.gov.moe/?keyword=20225511" target="_blank" rel="noopener" style="color:#ee4866;" data-v-7211be04><i class="moe-icp" data-v-7211be04></i>\xA0\u840CICP\u590720225511\u53F7</a><a href="https://github.com/Jiaocz/huli.li" target="_blank" rel="noopener noreferrer" data-v-7211be04><img src="https://img.shields.io/github/stars/Jiaocz/huli.li?style=social" alt="Github Star" data-v-7211be04></a>',5),ie=[re],ce=f({setup(t){return(a,e)=>(u(),d("footer",ne,ie))}});var le=h(ce,[["__scopeId","data-v-7211be04"]]);const ue={class:"container"},de=f({setup(t){let a=l(),e=l(),r=l(!0),s=l();return(async()=>{var m,y;const o=await G();e.value=o.result.location;const n=await J(o.result.location);a.value=n;const c=new Date;r.value=!!((m=a.value)==null?void 0:m.sunrise)&&!!((y=a.value)==null?void 0:y.sunset)&&new Date(a.value.sunrise).getTime()<c.getTime()&&new Date(a.value.sunset).getTime()>c.getTime();const D=await R(e.value);s.value=D})(),(o,n)=>(u(),d("div",ue,[g(oe,{weather:p(s),sun:p(a)},null,8,["weather","sun"]),g(U,{"is-daytime":p(r)},null,8,["is-daytime"]),g(le)]))}});var pe=h(de,[["__scopeId","data-v-f2300356"]]);V(pe).mount("#app");
