(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{68042:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(2265),s=r.t(i,2),o=r(44809),n=r(59118);let a="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,l=s.useSyncExternalStore;function c(e,t={}){let r=(0,o.Z)(),s="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:c=!1,matchMedia:d=s?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:m=!1}=(0,n.Z)({name:"MuiUseMediaQuery",props:t,theme:r}),f="function"==typeof e?e(r):e;f=f.replace(/^@media( ?)/m,"");let x=(void 0!==l?function(e,t,r,s,o){let n=i.useCallback(()=>t,[t]),a=i.useMemo(()=>{if(o&&r)return()=>r(e).matches;if(null!==s){let{matches:t}=s(e);return()=>t}return n},[n,e,s,o,r]),[c,d]=i.useMemo(()=>{if(null===r)return[n,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]},[n,r,e]),u=l(d,c,a);return u}:function(e,t,r,s,o){let[n,l]=i.useState(()=>o&&r?r(e).matches:s?s(e).matches:t);return a(()=>{let t=!0;if(!r)return;let i=r(e),s=()=>{t&&l(i.matches)};return s(),i.addListener(s),()=>{t=!1,i.removeListener(s)}},[e,r]),n})(f,c,d,u,m);return x}},34482:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var i={},s=e.split(";"),o=(t||{}).decode||r,n=0;n<s.length;n++){var a=s[n],l=a.indexOf("=");if(!(l<0)){var c=a.substring(0,l).trim();if(void 0==i[c]){var d=a.substring(l+1,a.length).trim();'"'===d[0]&&(d=d.slice(1,-1)),i[c]=function(e,t){try{return t(e)}catch(t){return e}}(d,o)}}}return i},t.serialize=function(e,t,r){var o=r||{},n=o.encode||i;if("function"!=typeof n)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var a=n(t);if(a&&!s.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=o.maxAge){var c=o.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(c)}if(o.domain){if(!s.test(o.domain))throw TypeError("option domain is invalid");l+="; Domain="+o.domain}if(o.path){if(!s.test(o.path))throw TypeError("option path is invalid");l+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(l+="; HttpOnly"),o.secure&&(l+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,i=encodeURIComponent,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},47713:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)0>t.indexOf(i[s])&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var o=r(34482),n=function(){return"undefined"!=typeof window},a=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.getCookies=function(e){if(e&&(t=e.req),!n())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,o.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],s=0,a=i.length;s<a;s++){var l=i[s].split("="),c=l.slice(1).join("=");r[l[0]]=c}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(r){var l,c,d,u=r.req,m=r.res,f=s(r,["req","res"]);c=u,d=m,l=f}var x=(0,o.serialize)(e,a(t),i({path:"/"},l));if(n())document.cookie=x;else if(d&&c){var h=d.getHeader("Set-Cookie");if(Array.isArray(h)||(h=h?[String(h)]:[]),d.setHeader("Set-Cookie",h.concat(x)),c&&c.cookies){var p=c.cookies;""===t?delete p[e]:p[e]=a(t)}if(c&&c.headers&&c.headers.cookie){var p=(0,o.parse)(c.headers.cookie);""===t?delete p[e]:p[e]=a(t),c.headers.cookie=Object.entries(p).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},22004:function(e,t,r){Promise.resolve().then(r.bind(r,96797))},16694:function(e,t,r){"use strict";var i=r(57437);r(2265),t.Z=e=>{let{className:t,icon:r}=e;return(0,i.jsx)("i",{className:"w-fit flex items-center  ".concat(t," ").concat(r)})}},96797:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var i=r(57437),s=r(28285),o=r(2265),n=r(68042),a=r(16691),l=r.n(a),c={src:"/_next/static/media/Ellipse 77.2d2734ab.svg",height:106,width:106,blurWidth:0,blurHeight:0},d=r(16694);r(69584);var u=r(24086),m=r(70165),f=r(68450),x=r(53687),h=r(61396),p=r.n(h),v=e=>{let{cookie:t}=e,[r,n]=(0,o.useState)([1e3,1e4]),[a,u]=(0,o.useState)(!1);(0,m.useQueryClient)();let{data:x}=(0,s.useQuery)({queryKey:["userData"],queryFn:()=>(0,f.is)(t),refetchInterval:2e3,keepPreviousData:!0});return console.log(null==x?void 0:x.dP,"from oprtion ---->"),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" flex-[0.25] filter-border  h-fit ",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center mt-5 mb-7",children:[(0,i.jsx)("div",{className:"border border-[#EEEEEE] rounded-full p-2 mb-2",children:(0,i.jsx)("div",{className:" rounded-full  relative",children:(0,i.jsx)(l(),{src:c,alt:"",width:1e3,height:1e3,style:{aspectRatio:"auto",width:"110px",height:"110px"},className:"rounded-full"})})}),(0,i.jsx)("h5",{className:"text-secondary font-semibold text-sm mb-1",children:"Arjun Rawat"}),(0,i.jsx)("h6",{className:"text-[#555555] font-medium text-sm",children:"rajun.rawat@gmail.com"})]}),(0,i.jsxs)("div",{className:"flex gap-3 items-center border-t border-t-[#EEF0F5] border-b border-b-[#EEF0F5] py-4 px-6",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-user-fill  font-normal text-2xl cursor-pointer text-primary"})}),(0,i.jsx)("h4",{className:"text-primary font-semibold text-sm",children:"Profile Info"})]}),(0,i.jsx)(p(),{href:"/wishlist",children:(0,i.jsxs)("div",{className:"flex gap-3 items-center  border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-heart  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"My Wishlist"})]})}),(0,i.jsxs)("div",{className:"flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-bag  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"My Order"})]}),(0,i.jsxs)("div",{className:"flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-location  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"Addresses"})]}),(0,i.jsxs)("div",{className:"flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-card  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"Payment Method"})]}),(0,i.jsx)(p(),{href:"/contact",children:(0,i.jsxs)("div",{className:"flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-chat  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"Help and Support"})]})}),(0,i.jsx)(p(),{href:"/referandearn",children:(0,i.jsxs)("div",{className:"flex gap-3 items-center border-b border-b-[#EEF0F5]  py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-chat  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"Refer and Earn"})]})}),(0,i.jsxs)("div",{className:"flex gap-3 items-center   py-4 px-6 cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{icon:"flaticon-logout  font-normal text-2xl"})}),(0,i.jsx)("h4",{className:"text-secondary font-semibold text-sm",children:"Logout"})]})]})})},b=e=>{let{cookie:t}=e;(0,n.Z)("(min-width:1024px)");let{data:r}=(0,s.useQuery)({queryKey:["userData"],queryFn:()=>(0,f.is)(t),refetchInterval:2e3}),[a,l]=(0,o.useState)({firstName:null==r?void 0:r.name,lastName:(null==r?void 0:r.lastName)?null==r?void 0:r.lastName:"",email:null==r?void 0:r.email,phone:null==r?void 0:r.phoneNo,about:(null==r?void 0:r.aboutMe)?null==r?void 0:r.aboutMe:""}),c=async()=>{console.log("start"),a.firstName,a.lastName,a.email,a.phone,a.about;let e=await r.id;e&&(console.log("inside if start"),await (0,u.pl)((0,u.JU)(x.db,"users",e),{name:a.firstName,lastName:a.lastName,email:a.email,phoneNo:a.phone,aboutMe:a.about},{merge:!0}),console.log("inside if end"))};return(0,i.jsx)("div",{className:"flex flex-col px-body gap-2 mt-2  h-full ",children:(0,i.jsxs)("div",{className:"w-full flex flex-col lg:flex-row gap-4 mt-5 sm:mb-20 mb-10",children:[(0,i.jsx)(v,{cookie:t}),(0,i.jsx)("hr",{}),(0,i.jsx)("div",{className:"w-full flex-[0.60]",children:(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"flex md:flex-row flex-col gap-4 w-full mb-5",children:[(0,i.jsxs)("div",{className:"md:w-[50%] w-full flex flex-col gap-3 ",children:[(0,i.jsx)("label",{className:"text-[#555555] font-medium text-sm",children:"First Name*"}),(0,i.jsx)("input",{className:"py-3 border-[1px] border-[#838383] outline-0 px-3 ",value:a.firstName,onChange:e=>l({...a,firstName:e.target.value})})]}),(0,i.jsxs)("div",{className:"md:w-[50%] w-full flex flex-col gap-3 ",children:[(0,i.jsx)("label",{className:"text-[#555555] font-medium text-sm",children:"Last Name*"}),(0,i.jsx)("input",{className:"py-3 border-[1px] border-[#838383] outline-0 px-3",value:a.lastName,onChange:e=>l({...a,lastName:e.target.value})})]})]}),(0,i.jsxs)("div",{className:"flex md:flex-row flex-col gap-4 w-full mb-5",children:[(0,i.jsxs)("div",{className:"md:w-[50%] w-full flex flex-col gap-3 ",children:[(0,i.jsx)("label",{className:"text-[#555555] font-medium text-sm",children:"Email Address*"}),(0,i.jsx)("input",{className:"py-3 border-[1px] border-[#838383] outline-0 px-3",value:null==a?void 0:a.email,onChange:e=>l({...a,email:e.target.value})})]}),(0,i.jsxs)("div",{className:"md:w-[50%] w-full flex flex-col gap-3 ",children:[(0,i.jsx)("label",{className:"text-[#555555] font-medium text-sm",children:"Phone No."}),(0,i.jsx)("input",{className:"py-3 border-[1px] border-[#838383] outline-0 px-3",value:null==a?void 0:a.phone,onChange:e=>l({...a,phone:e.target.value})})]})]}),(0,i.jsxs)("div",{className:"w-full  flex flex-col gap-3 mb-5",children:[(0,i.jsx)("label",{htmlFor:"",className:"text-[#555555] font-medium",children:"About Me"}),(0,i.jsx)("textarea",{value:a.about,onChange:e=>l({...a,about:e.target.value}),name:"",id:"",className:" border-[1px] border-[#838383] w-full outline-0 px-3 py-2",rows:4})]}),(0,i.jsx)("div",{className:"bg-secondary text-white text-center  py-3  text-sm font-medium cursor-pointer",onClick:()=>c(),children:(0,i.jsx)("button",{children:"Save Changes"})})]})})]})})}}},function(e){e.O(0,[358,51,370,222,396,927,393,264,450,971,596,744],function(){return e(e.s=22004)}),_N_E=e.O()}]);