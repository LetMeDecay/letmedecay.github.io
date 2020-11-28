"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("DOMContentLoaded",function(){var e,r=!1,n=!0,t=CONFIG.path;0===t.length?t="search.xml":t.endsWith("json")&&(n=!1);var o=document.querySelector(".search-input"),a=document.getElementById("search-result"),T=function(t,e,r){if(CONFIG.localsearch.unescape){var n=document.createElement("div");n.innerText=t,t=n.innerHTML}var o=t.length;if(0===o)return[];var a=0,i=[],c=[];for(r||(e=e.toLowerCase(),t=t.toLowerCase());-1<(i=e.indexOf(t,a));)c.push({position:i,word:t}),a=i+o;return c},S=function(t,e,r,n){for(var o=r[r.length-1],a=o,i=a.position,c=a.word,s=[],l=0;i+c.length<=e&&0!==r.length;){c===n&&l++,s.push({position:i,length:c.length});var u=i+c.length;for(r.pop();0!==r.length&&(i=(o=r[r.length-1]).position,c=o.word,i<u);)r.pop()}return{hits:s,start:t,end:e,searchTextCount:l}},E=function(r,t){var n="",o=t.start;return t.hits.forEach(function(t){n+=r.substring(o,t.position);var e=t.position+t.length;n+='<b class="search-keyword">'.concat(r.substring(t.position,e),"</b>"),o=e}),n+=r.substring(o,t.end)},i=function(){if(r){var w=o.value.trim().toLowerCase(),x=w.split(/[-\s]+/);1<x.length&&x.push(w);var L=[];0<w.length&&e.forEach(function(t){var e=t.title,r=t.content,n=t.url,o=e.toLowerCase(),a=r.toLowerCase(),i=[],c=[],s=0;if(x.forEach(function(t){i=i.concat(T(t,o,!1)),c=c.concat(T(t,a,!1))}),0<i.length||0<c.length){var l=i.length+c.length;[i,c].forEach(function(t){t.sort(function(t,e){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length})});var u=[];if(0!==i.length){var h=S(0,e.length,i,w);s+=h.searchTextCountInSlice,u.push(h)}for(var d=[];0!==c.length;){var f=c[c.length-1],p=f.position,y=f.word,g=p-20,v=p+80;g<0&&(g=0),v<p+y.length&&(v=p+y.length),v>r.length&&(v=r.length);var m=S(g,v,c,w);s+=m.searchTextCountInSlice,d.push(m)}d.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start});var C=parseInt(CONFIG.localsearch.top_n_per_article,10);0<=C&&(d=d.slice(0,C));var b="";0!==u.length?b+='<li><a href="'.concat(n,'" class="search-result-title">').concat(E(e,u[0]),"</a>"):b+='<li><a href="'.concat(n,'" class="search-result-title">').concat(e,"</a>"),d.forEach(function(t){b+='<a href="'.concat(n,'"><p class="search-result">').concat(E(r,t),"...</p></a>")}),b+="</li>",L.push({item:b,id:L.length,hitCount:l,searchTextCount:s})}}),1===x.length&&""===x[0]?a.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>':0===L.length?a.innerHTML='<div id="no-result"><i class="far fa-frown fa-5x"></i></div>':(L.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id}),a.innerHTML='<ul class="search-result-list">'.concat(L.map(function(t){return t.item}).join(""),"</ul>"),window.pjax&&window.pjax.refresh(a))}},c=function(){fetch("https://cdn.jsdelivr.net/gh/LetMeDecay/letmedecay.github.io@master/"+t).then(function(t){return t.text()}).then(function(t){r=!0,e=(e=n?_toConsumableArray((new DOMParser).parseFromString(t,"text/xml").querySelectorAll("entry")).map(function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content").textContent,url:t.querySelector("url").textContent}}):JSON.parse(t)).filter(function(t){return t.title}).map(function(t){return t.title=t.title.trim(),t.content=t.content?t.content.trim().replace(/<[^>]+>/g,""):"",t.url=decodeURIComponent(t.url).replace(/\/{2,}/g,"/"),t}),document.getElementById("no-result").innerHTML='<i class="fa fa-search fa-5x"></i>',i()})};CONFIG.localsearch.preload&&c(),"auto"===CONFIG.localsearch.trigger?o.addEventListener("input",i):(document.querySelector(".search-icon").addEventListener("click",i),o.addEventListener("keypress",function(t){"Enter"===t.key&&i()})),document.querySelectorAll(".popup-trigger").forEach(function(t){t.addEventListener("click",function(){document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").classList.add("search-active"),o.focus(),r||c()})});var s=function(){document.body.style.overflow="",document.querySelector(".search-pop-overlay").classList.remove("search-active")};document.querySelector(".search-pop-overlay").addEventListener("click",function(t){t.target===document.querySelector(".search-pop-overlay")&&s()}),document.querySelector(".popup-btn-close").addEventListener("click",s),window.addEventListener("pjax:success",s),window.addEventListener("keyup",function(t){"Escape"===t.key&&s()})});