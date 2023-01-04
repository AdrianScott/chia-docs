"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,f=h["".concat(l,".").concat(m)]||h[m]||u[m]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={title:"Harvesters",slug:"/harvester-architecture"},i=void 0,s={unversionedId:"architecture/harvesters",id:"architecture/harvesters",title:"Harvesters",description:"Harvesters are individual machines controlled by a farmer. In a large farming operation, a farmer may be connected to many harvesters.",source:"@site/docs/architecture/harvesters.md",sourceDirName:"architecture",slug:"/harvester-architecture",permalink:"/zh/harvester-architecture",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/architecture/harvesters.md",tags:[],version:"current",frontMatter:{title:"Harvesters",slug:"/harvester-architecture"},sidebar:"tutorialSidebar",previous:{title:"Farmers",permalink:"/zh/farmer-architecture"},next:{title:"Timelords",permalink:"/zh/timelord-architecture"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvesters are individual machines controlled by a farmer. In a large farming operation, a farmer may be connected to many harvesters."),(0,a.kt)("p",null,"Harvesters control the actual plot files by retrieving qualities or proofs from disk. The minimum plot size (and by far the most common) is k32, which corresponds to around 100 GiB. With each increment of a k-value, the plot size roughly doubles, so a k33 plot is around 200 GiB, k34 is around 400 GiB, etc."),(0,a.kt)("p",null,"The difficulty level automatically adjusts every 4608 blocks to target one proof of space -- across the entire network -- for every two signage points. This is the targeted average value -- there can also be zero or multiple proofs per signage point. This leads to a difficulty adjustment approximately every 24 hours."),(0,a.kt)("p",null,"Given a plot, the harvester must perform two tasks to find a valid proof:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fetch the initial quality -- this requires around seven random disk seeks, or 70 milliseconds on a slow HDD."),(0,a.kt)("li",{parentName:"ol"},"(Only performed if the initial quality is sufficiently high) Fetch the full proof -- this requires around 64 disk seeks, or 640 milliseconds on a slow HDD.")),(0,a.kt)("p",null,"For most challenges, the quality (step 1) will be very low, so fetching the entire proof (step 2) will not be necessary. A node has 28 seconds to return a proof, so disk I/O will not be a limiting factor, even when proofs are stored on slow HDDs."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tape drives are too slow for farming. The protocol was designed to support hard disks, but nothing slower. It is possible to use tape for long-term plot storage, only transferring the plots to disks for occasional farming, but this is likely a very rare use case.")),(0,a.kt)("p",null,"Finally, harvesters also maintain a private key for each plot. The blocks are signed with these keys, which is an important concept in Chia. It means that even when a farmer is a member of a pool, the farmer still controls the contents of a block. This is quite different from other blockchains' pooling protocols, where the pool operators are the ones signing the blocks."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The harvester algorithm is discussed in greater detail in the ",(0,a.kt)("a",{parentName:"p",href:"/harvester-algorithm"},"Harvester Algorithm page"),".")))}u.isMDXComponent=!0}}]);