!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function g(e,t,n){var i,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),d?g(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=y();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?g(e):(i=o=void 0,a)}function w(){var e=y(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(T,t),g(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector("form.feedback-form"),O=document.querySelector('input[type="email"]'),T=document.querySelector("textarea"),h="feedback-form-state";function w(e){var t={email:O.value,message:T.value};JSON.stringify(t);localStorage.setItem(h,JSON.stringify(t))}j.addEventListener("submit",(function(e){e.preventDefault();var t=O.value,n=T.value,i={email:t,message:n};console.log(i),e.currentTarget.reset(),localStorage.removeItem(h)})),j.addEventListener("input",e(t)(w,500)),O.addEventListener("input",e(t)(w,500)),T.addEventListener("input",e(t)(w,500)),function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);O.value=t.email,T.value=t.message}}()}();
//# sourceMappingURL=03-feedback.29920c13.js.map