"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),g=o,d=h["".concat(l,".").concat(g)]||h[g]||p[g]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"Using the GUI",slug:"/using-the-gui"},r=void 0,s={unversionedId:"getting-started/using-the-gui",id:"getting-started/using-the-gui",title:"Using the GUI",description:"Getting Things Set Up",source:"@site/docs/getting-started/using-the-gui.md",sourceDirName:"getting-started",slug:"/using-the-gui",permalink:"/zh/using-the-gui",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/using-the-gui.md",tags:[],version:"current",frontMatter:{title:"Using the GUI",slug:"/using-the-gui"},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide",permalink:"/zh/quick-start-guide"},next:{title:"Chia Concepts",permalink:"/zh/chia-concepts"}},l={},c=[{value:"Getting Things Set Up",id:"getting-things-set-up",level:2},{value:"Settings",id:"settings",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Tokens",id:"tokens",level:2},{value:"Plotting and Farming",id:"plotting-and-farming",level:2},{value:"Your First Plot",id:"your-first-plot",level:3},{value:"Creating a Plot NFT",id:"creating-a-plot-nft",level:3},{value:"NFTs",id:"nfts",level:2},{value:"Offers",id:"offers",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-things-set-up"},"Getting Things Set Up"),(0,o.kt)("p",null,"Getting started with Chia is easy with the use of the graphical user interface (GUI). Upon opening and selecting wallet or farming mode, you'll be given the ability to create a key. Each key is a 24 ordered word seed phrase used to control your wallet. ",(0,o.kt)("strong",{parentName:"p"},"Do not share your 24 words with anyone"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"select key",src:"/img/select-key.png",width:"500",align:"center"})),(0,o.kt)("p",null,"You will also be given the option to use the Chia GUI in ",(0,o.kt)("strong",{parentName:"p"},"farming mode")," or ",(0,o.kt)("strong",{parentName:"p"},"wallet mode"),". We'll start with farming mode. Don't worry if you've already chosen wallet mode as this can be easily changed within settings (as well as dark mode and language choice)."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Before we get to the fun stuff, let's take a look at the settings you'll want to know about to use Chia properly."),(0,o.kt)("p",null,"First, here is how you switch between farming and wallet mode."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"settings",src:"/img/settings.png",width:"300"})),(0,o.kt)("p",null,"At the bottom of the settings you'll see the option for setting a passphrase. This is an additional layer of security that requires a password to access the Chia client."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Enabling a passphrase is a recommended step for protecting your funds, but it only protects your local Chia client. This may stop someone from steeling your funds while you're away from your desk, but does not protect your funds if someone gains access to your 24 words.")),(0,o.kt)("h2",{id:"syncing"},"Syncing"),(0,o.kt)("p",null,"Upon opening Chia, your client will need to sync. You'll need to see a ",(0,o.kt)("strong",{parentName:"p"},"sycned")," status in the top corner before seeing any tokens you have."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"synced",src:"/img/synced.png",width:"300"})),(0,o.kt)("p",null,"All transactions on the Chia blockchain are added to blocks. Theese blocks are downloaded sequentially as your client syncs. If someone has sent you Chia (or any other tokens on the Chia blockchain), your node doesn't know the transaction exists until you've synced past that block."),(0,o.kt)("h2",{id:"tokens"},"Tokens"),(0,o.kt)("p",null,"The main cryptocurrency of the Chia network is Chia (XCH). This is used for sending value between wallets and also for fees to ensure transactions go through. In addition to Chia, we have tokens, which are cryptocurrencies built on top of the Chia blockchain. These tokens are known as CATs (Chia asset tokens)."),(0,o.kt)("p",null,"When you open the Tokens tab for the first time, it will look this:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"tokens tab",src:"/img/tokens-tab.png",width:"700"})),(0,o.kt)("p",null,"We have no Chia and no tokens. You can see a list of other tokens that can be aquired within the ",(0,o.kt)("strong",{parentName:"p"},"manage token list")," section."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"tokens",src:"/img/tokens.png",width:"300"})),(0,o.kt)("p",null,"These are all tokens that can be received the same way as Chia, but will have a unique quantity, utility, and value. Both Chia and any CATs can be sent to your ",(0,o.kt)("strong",{parentName:"p"},"receive address"),". Your wallet will have multiple receive addresses, so this value may change."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"receive address",src:"/img/receive-address.png",width:"600"})),(0,o.kt)("p",null,"Additionally, you can send tokens to any other address."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"sending XCH",src:"/img/send-xch.png",width:"600"})),(0,o.kt)("p",null,"Upon sending the transaction, it will be broadcasted to full nodes in the network. The fee will help push your transaction through to the blockchain after it reaches the mempool of a full node. Farmers get not only block rewards but also transaction fees, so transactions with fees are prioritized. We recommend a fee of atleast .000005 XCH."),(0,o.kt)("h2",{id:"plotting-and-farming"},"Plotting and Farming"),(0,o.kt)("p",null,"When you launch the GUI in farming mode you're given a ",(0,o.kt)("strong",{parentName:"p"},"full node")," tab. This will summarize your sync status, recent blocks, and the overall stats for the Chia blockchain."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"full node",src:"/img/full-node.png",width:"800"})),(0,o.kt)("p",null,"You can create plots from the ",(0,o.kt)("strong",{parentName:"p"},"plots")," tab. By default you will have one harvester (computer) farming and no plots."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"plots",src:"/img/plots.png",width:"800"})),(0,o.kt)("p",null,"You can add a plot from this tab or from the farming tab."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"farming",src:"/img/farming.png",width:"800"})),(0,o.kt)("h3",{id:"your-first-plot"},"Your First Plot"),(0,o.kt)("p",null,"Let's go ahead and add a plot!"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"add a plot",src:"/img/add-a-plot.png",width:"1000"})),(0,o.kt)("p",null,"I recommend ",(0,o.kt)("strong",{parentName:"p"},"madMAx Plotter")," as the plotting software of choice. This allows you to easily create plots in serial without much setup.\nStart off by just creating a single plot. Once you understand how it works, you can create many more. If you wish to create many plots It is important to understand ",(0,o.kt)("a",{parentName:"p",href:"/ssd-endurance"},"SSD endurance"),"."),(0,o.kt)("p",null,"When creating a plot, you're given the option to join a pool. This is the recommend approach (even if you choose to ",(0,o.kt)("em",{parentName:"p"},"self-pool"),"). With Chia's unique approach to pooling, farming rewards are consistent without a sacrifice in decentralization of the network. To make pooling work you create your plots to be associated with a Plot NFT. This is a unique token controlling your membership to any pool."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"pooling",src:"/img/pooling.png",width:"500"})),(0,o.kt)("h3",{id:"creating-a-plot-nft"},"Creating a Plot NFT"),(0,o.kt)("p",null,"Creating the Plot NFT is a transaction on the blockchain and requires a small amount of (free) Chia which can be retrieved from a ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.chia.net"},"faucet"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"join a pool faucet",src:"/img/join-a-pool-faucet.png",width:"500"})),(0,o.kt)("p",null,"This will take you to the official faucet which allows you to paste your address and get sent some Chia."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"faucet",src:"/img/faucet.png",width:"500"})),(0,o.kt)("p",null,"If everything is done correctly, you should get a confirmation."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"faucet accepted",src:"/img/faucet-accepted.png",width:"500"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You'll need your wallet to be synced to see the free XCH or to create the plot NFT."),(0,o.kt)("p",{parentName:"admonition"},"Plot NFTs are distinctly different than standard NFTs discussed in the next section.")),(0,o.kt)("h2",{id:"nfts"},"NFTs"),(0,o.kt)("p",null,"NFTs are non-fungible tokens (each is unique) and are supported natively in Chia."),(0,o.kt)("p",null,"Upon opening your NFTs for the first time, you'll only be met with a message to start collecting NFTs."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"go collect some gems",src:"/img/nfts.png",width:"800"})),(0,o.kt)("p",null,"One way to get NFTs is to find them in a marketplace such as ",(0,o.kt)("a",{parentName:"p",href:"https://dexie.space/nft"},"Dexie"),"."),(0,o.kt)("p",null,"In the next section we will learn about offers which can be used to aquire NFTs in a decentralized way."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/nfts"},"Read more about NFTs"),"."),(0,o.kt)("h2",{id:"offers"},"Offers"),(0,o.kt)("p",null,"When aquiring NFTs or tokens, you may need to make an offer for them. Offers are a form of decentralized exchange. Using offers you can trade one asset for another with no middleman."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"offers",src:"/img/offers.png",width:"800"})),(0,o.kt)("p",null,"By using offers you are embracing the decentralized nature of the Chia blockchain."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/offers"},"Read more about offers"),"."))}p.isMDXComponent=!0}}]);