"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?o.createElement(d,r(r({ref:t},h),{},{components:n})):o.createElement(d,r({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Light Clients",slug:"/light-clients"},r=void 0,l={unversionedId:"consensus/light-clients",id:"consensus/light-clients",title:"Light Clients",description:"Light client support is another benefit of Proof of Space and Time (PoST) when compared with Proof of Stake (PoS). In PoST, all proofs can be verified objectively and cryptographically, while maintaining the requirement to control an actual resource at a certain point in time. With Chia's consensus, a candidate chain can be compared to an alternate chain objectively for weight, even after being offline for a long time, without relying on a central authority.",source:"@site/docs/consensus/light-clients.md",sourceDirName:"consensus",slug:"/light-clients",permalink:"/light-clients",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/light-clients.md",tags:[],version:"current",frontMatter:{title:"Light Clients",slug:"/light-clients"},sidebar:"tutorialSidebar",previous:{title:"Block Validation",permalink:"/block-validation"},next:{title:"Block Format",permalink:"/block-format"}},s={},c=[{value:"Obtaining Transactions",id:"obtaining-transactions",level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Light client support is another benefit of Proof of Space and Time (PoST) when compared with Proof of Stake (PoS). In PoST, all proofs can be verified objectively and cryptographically, while maintaining the requirement to control an actual resource at a certain point in time. With Chia's consensus, a candidate chain can be compared to an alternate chain objectively for weight, even after being offline for a long time, without relying on a central authority."),(0,a.kt)("p",null,"For light clients that want to sync up quickly to the chain (for example, mobile wallets), a full node can create a small-sized proof that can convince the light client that the weight of a chain is close to some value. This is called a proof of weight."),(0,a.kt)("p",null,"Naively, the light client could download every single block and all the required proofs and verify them. But, with a large number of blocks, this would require a lot of bandwidth and CPU."),(0,a.kt)("p",null,"A more efficient method relies on a protocol similar to ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2019/226.pdf"},"Flyclient"),". The node (Prover) sends all the sub-epoch summaries from the fork point, including difficulty resets, to the light client."),(0,a.kt)("p",null,"There is only one sub-epoch every 384 blocks, so the summaries will only reach a few MB of data."),(0,a.kt)("p",null,"The node also deterministically samples several sub-epochs based on the challenge of the last block. Sub-epochs have a chance to be chosen proportional to the difficulty during that sub-epoch. For the chosen sub-epoch, the light client downloads one of the challenge chain blocks (which are approximately 1/32 of all blocks), and computes the average infusion iterations of all challenge blocks in that sub-epoch. Based on this time, the light client can extrapolate how many blocks the reward chain contains."),(0,a.kt)("p",null,"For example, if the challenge blocks all occur with very small iterations (close to the beginning of the sub-slot), there are likely many blocks in that sub-slot. Conversely, if the iterations are close to the middle of the sub-slot, there is likely only one block per sub-slot. This allows the light client to only download 1/32 of the blocks in each sub-slot, but still get a good estimate of the total weight."),(0,a.kt)("p",null,"Furthermore, the last few sub-epochs should be downloaded in full for the light client.\nThis adds a small amount of data, but prevents attackers from creating small forks at the end of the chain."),(0,a.kt)("p",null,"The main difference between this protocol and Flyclient is that blocks are not committed to using a Merkle mountain range, but instead the light client downloads the entire list of sub-epoch hashes from genesis, guaranteeing that the queried sub-epochs are included in the chain. Another difference is that entire sections are downloaded, as opposed to individual blocks."),(0,a.kt)("p",null,"As of December 2021, more analysis needs to be done on how many sub-epochs should be downloaded and what the bounds are for what the proof of weight implies."),(0,a.kt)("h2",{id:"obtaining-transactions"},"Obtaining Transactions"),(0,a.kt)("p",null,"Light clients can fetch the transactions that they are interested in, without having to download every single block or block header. Two wallet protocols are available for this, a less efficient one that maintains better privacy, and a super efficient one that has a privacy tradeoff, namely that the wallet must ask a node for payments made to certain addresses. Both of these protocols are currently supported in the Wallet API."))}u.isMDXComponent=!0}}]);