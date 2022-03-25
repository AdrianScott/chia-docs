"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),s=n(3366),r=(n(7294),n(3905)),a=["components"],i={sidebar_position:4},l="3.4 Challenges",c={unversionedId:"03consensus/challenges",id:"03consensus/challenges",isDocsHomePage:!1,title:"3.4 Challenges",description:"The Chia consensus algorithm relies on timelords running VDFs for periods of time called sub-slots, which are adjusted periodically (and automatically) to take around 10 minutes. During every sub-slot, challenges are released by timelords, and a sort of mini lottery starts, where farmers check their plots for proofs of space. When farmers find a proof of space that qualifies, they broadcast it to the network.",source:"@site/docs/03consensus/challenges.md",sourceDirName:"03consensus",slug:"/03consensus/challenges",permalink:"/docs/03consensus/challenges",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/challenges.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3.3 VDFs",permalink:"/docs/03consensus/vdfs"},next:{title:"3.5 Signage Points and Infusion Points",permalink:"/docs/03consensus/signage_points_and_infusion_points"}},u=[],h={toc:u};function p(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"34-challenges"},"3.4 Challenges"),(0,r.kt)("p",null,"The Chia consensus algorithm relies on timelords running VDFs for periods of time called ",(0,r.kt)("em",{parentName:"p"},"sub-slots"),", which are adjusted periodically (and automatically) to take around 10 minutes. During every sub-slot, challenges are released by timelords, and a sort of mini lottery starts, where farmers check their plots for proofs of space. When farmers find a proof of space that qualifies, they broadcast it to the network."),(0,r.kt)("p",null,"The difficulty adjusts automatically to target 32 winning proofs for the entire network in each sub-slot, or about one winner every 18.75 seconds on average (32 winners per 600 seconds). The winning proofs are infused into the VDF at different times within the sub-slot."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: A sub-slot is always targeted to last 10 minutes. There is also a period of time called a ",(0,r.kt)("em",{parentName:"p"},"slot"),". Typically, a slot and a sub-slot are exactly the same thing. However, in order to prevent long-range attacks, slots are required to have at least 16 blocks (and sub-slots are not). If a sub-slot ends with fewer than 16 blocks having been created, the same slot must continue for another sub-slot. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/overflow_blocks#minimum-block-requirement",title:"Section 3.9: Overflow Blocks"},"Section 3.9")," (minimum block requirement) for more info.")),(0,r.kt)("p",null,"The consensus requires farmers to follow the heaviest chain, which is the chain that has the highest accumulated difficulty (usually the chain with the most blocks). "),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/challenges.png",alt:"drawing"}),(0,r.kt)("figcaption",null,"Figure 4: Three sub-slots. The x axis represents time. Dotted lines represent VDF execution, advancing in time from left to right. Arrows represent hash dependencies (an object which points to another object includes the hash of the second object).")),(0,r.kt)("p",null,"In figure 4, we can see three challenge points, c1, c2, and c3. At the these points timelords create challenges (256-bit hashes) which are provided as input to VDFs. Timelords take these hashes, and start computing a VDF on this challenge, for the specified number of iterations. In this example, each slot is 100,000,000 iterations. When the VDF is finished, the timelord publishes the new challenge and the proof of the VDF. An infusion of end-of-slot information happens at the end of each sub-slot."),(0,r.kt)("p",null,"A challenge is always a 256-bit hash. The base info that is always included in this hash is the challenge chain VDF. However, the infused challenge chain, SubEpochSummary, difficulty, and sub slot iters might also be included, depending on where we are in the epoch cycle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class ChallengeChainSubSlot(Streamable):\n    challenge_chain_end_of_slot_vdf: VDFInfo\n    infused_challenge_chain_sub_slot_hash: Optional[bytes32]  # Only at the end of a slot\n    subepoch_summary_hash: Optional[bytes32]  # Only once per sub-epoch, and one sub-epoch delayed\n    new_sub_slot_iters: Optional[uint64]  # Only at the end of epoch, sub-epoch, and slot\n    new_difficulty: Optional[uint64]  # Only at the end of epoch, sub-epoch, and slot\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sub-slot"),": a segment of a fixed number of VDF iterations, subject to periodic work difficulty adjustments, which automatically target a time of 10 minutes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sub-slot iterations"),": determines how many VDF iterations each sub-slot must have. This number is periodically adjusted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Challenge"),": a sha256 output string. It is used as a proof-of-space challenge for farmers\u2019 plots. It is also used for the challenge chain VDF, and is sometimes referred to as a ",(0,r.kt)("em",{parentName:"p"},"challenge hash"),"."),(0,r.kt)("p",null,"As you can see in Figure 4, there are three VDFs being executed concurrently, each of which serves a different purpose. They are explained in detail in ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/three_vdf_chains",title:"Section 3.8: Three VDF Chains"},"Section 3.8"),"."),(0,r.kt)("p",null,"In the networking protocol, the three VDF proofs are usually passed around together, in what is called an ",(0,r.kt)("em",{parentName:"p"},"end of sub-slot bundle"),"."))}p.isMDXComponent=!0}}]);