"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5316],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return t?n.createElement(k,p(p({ref:a},m),{},{components:t})):n.createElement(k,p({ref:a},m))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=c;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7294),l=t(6010);const r="tabItem_Ymn6";function p(e){let{children:a,hidden:t,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,p),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),l=t(7294),r=t(6010),p=t(2389),i=t(7392),o=t(7094),s=t(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var a;const{lazy:t,block:p,defaultValue:c,values:d,groupId:k,className:N}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),T=(0,i.l)(b,((e,a)=>e.value===a.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,o.U)(),[C,x]=(0,l.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:f}=(0,s.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&b.some((a=>a.value===e))&&x(e)}const I=e=>{const a=e.currentTarget,t=w.indexOf(a),n=b[t].value;n!==C&&(f(a),x(n),null!=k&&y(k,String(n)))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},N)},b.map((e=>{let{value:a,label:t,attributes:p}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,key:a,ref:e=>w.push(e),onKeyDown:E,onFocus:I,onClick:I},p,{className:(0,r.Z)("tabs__item",u,null==p?void 0:p.className,{"tabs__item--active":C===a})}),t??a)}))),t?(0,l.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function d(e){const a=(0,p.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}},2985:(e,a,t)=>{t.r(a),t.d(a,{Highlight:()=>c,assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),r=t(5488),p=t(5162);const i={title:"CAT1\u5feb\u7167\u751f\u6210",sidebar_label:"2. CAT1\u5feb\u7167\u751f\u6210",slug:"/cat2-snapshot"},o=void 0,s={unversionedId:"cat2/cat2-snapshot",id:"cat2/cat2-snapshot",title:"CAT1\u5feb\u7167\u751f\u6210",description:"\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cat2/cat2-snapshot.mdx",sourceDirName:"cat2",slug:"/cat2-snapshot",permalink:"/zh/cat2-snapshot",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-snapshot.mdx",tags:[],version:"current",frontMatter:{title:"CAT1\u5feb\u7167\u751f\u6210",sidebar_label:"2. CAT1\u5feb\u7167\u751f\u6210",slug:"/cat2-snapshot"},sidebar:"tutorialSidebar",previous:{title:"1. \u7b80\u4ecb",permalink:"/zh/cat2-intro"},next:{title:"3. CAT2\u4ee3\u5e01\u91cd\u65b0\u53d1\u914d",permalink:"/zh/cat2-issuance"}},m={},u=[{value:"\u751f\u6210\u4e00\u4e2a CAT1 \u5feb\u7167",id:"\u751f\u6210\u4e00\u4e2a-cat1-\u5feb\u7167",level:2},{value:"\u4ece\u5feb\u7167\u4e2d\u5bfc\u51fa\u6240\u9700\u7684\u6570\u636e",id:"export",level:2},{value:"\u4fee\u590d EOL \u5b57\u7b26",id:"fix-eol",level:2},{value:"\u6570\u636e\u6e05\u7406",id:"cleanup",level:2},{value:"\u83b7\u53d6\u533a\u5757\u94fe\u4e0a\u6240\u6709 CAT \u7684\u4f59\u989d",id:"export-all",level:2}],c=e=>{let{children:a,color:t}=e;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},d={toc:u,Highlight:c};function k(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4fe1\u606f\nCAT1 \u5c06\u5728 2311760 \u533a\u5757\u9ad8\u5ea6\u7ed3\u675f\u5176\u751f\u547d\u5468\u671f\uff0c\u4e5f\u5c31\u662f UTC \u65f6\u95f4 2022 \u5e74 7 \u6708 26 \u65e5 17:00\u3002\n\u66f4\u591a\u5173\u4e8e\u7ed3\u675f\u751f\u547d\u5468\u671f\u7684\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 CAT2 \u4ecb\u7ecd\u53ca FAQ\n\u672c\u6587\u6863\u5c06\u5411 CAT1 \u53d1\u884c\u4eba\u5c55\u793a\u5982\u4f55\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u751f\u6210\u5176 CAT1 \u72b6\u6001\u7684\u5feb\u7167\u3002 \u8fd9\u5c06\u663e\u793a Puzzle \u54c8\u5e0c\uff08\u5730\u5740\uff09\u548c\u6bcf\u4e2a\u5355\u72ec\u4ee3\u5e01\u5728\u751f\u547d\u5468\u671f\u7ed3\u675f\u9ad8\u5ea6\u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5feb\u7167\u4e2d\u5bfc\u51fa\u4ed6\u4eec\u6240\u9700\u7684\u6570\u636e\n\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0cCAT \u53d1\u884c\u4eba\u5c06\u80fd\u591f\u7ee7\u7eed\u8fdb\u884c",(0,l.kt)("a",{parentName:"li",href:"/cat2-issuance"},"\u4ee3\u5e01\u91cd\u65b0\u53d1\u884c\u6307\u5357"),"\u3002")),(0,l.kt)("h2",{id:"\u751f\u6210\u4e00\u4e2a-cat1-\u5feb\u7167"},"\u751f\u6210\u4e00\u4e2a CAT1 \u5feb\u7167"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\n\u6211\u4eec\u63a8\u8350\u4f60\u8ddf\u7740\u672c\u8282\u5185\u5bb9\u6765\u751f\u6210\u4f60\u7684 CAT1 \u5feb\u7167\u3002\u8bf7\u6ce8\u610f\u8fd9\u4e00\u8fc7\u7a0b\u80af\u80fd\u4f1a\u9700\u8981 40 \u591a\u4e2a\u5c0f\u65f6\u6765\u5b8c\u6210\u3002\u4e3a\u4e86\u65b9\u4fbf\u60a8\uff0c\u6211\u4eec\u4f1a\u53d1\u5e03\u4e00\u4e2a\u5feb\u7167\u4f9b\u60a8\u4f7f\u7528\u3002\u8fd9\u4e2a\u5feb\u7167\u5e94\u8be5\u4e0e\u4f60\u81ea\u5df1\u751f\u6210\u7684\u5b8c\u5168\u76f8\u540c\u3002\n\u672c\u8282\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/CAT-addresses"},"CAT-addresses \u5de5\u5177"),"\u5e76\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u7279\u5b9a CAT1 \u7684\u6bcf\u4e2a\u786c\u5e01\u7684 puzzle \u54c8\u5e0c\u503c\uff08\u5730\u5740\uff09\u548c\u4ef7\u503c\u7684\u5feb\u7167\u3002 \u5b83\u751a\u81f3\u53ef\u4ee5\u83b7\u53d6 Chia \u533a\u5757\u94fe\u4e0a\u6240\u6709 CAT1 \u7684\u4fe1\u606f\u3002"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u8b66\u544a")," ",(0,l.kt)("br",null),"\n\u4e3a\u4e86\u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\uff0c\u4f60\u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u5b8c\u5168\u540c\u6b65\u7684 Chia \u5168\u8282\u70b9\u3002 \u6b64\u8282\u70b9\u5fc5\u987b\u4e3a 1.5 \u6216\u66f4\u9ad8\u7248\u672c\u3002 \u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5728\u7ee7\u7eed\u4e4b\u524d\u60a8\u5df2\u6ee1\u8db3\u8fd9\u4e24\u4e2a\u8981\u6c42\u3002\n\u4ee5\u4e0b\u662f\u4ece\u4e3b\u5206\u652f\u7684\u6e90\u4ee3\u7801\u5b89\u88c5\u7684\u8bf4\u660e\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/MacOS",value:"nix"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/Chia-Network/chia-blockchain.git -b main --recurse-submodules\ncd chia-blockchain\n.\\Install.ps1\n.\\venv\\Scripts\\Activate.ps1\nchia init\n\n(Optional) To install and run the GUI:\n.\\Install-gui.ps1\ncd .\\chia-blockchain-gui\nnpm run electron\n")),"  "),(0,l.kt)(p.Z,{value:"nix",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-blockchain.git -b main --recurse-submodules\ncd chia-blockchain\nsh install.sh\n. ./activate\nchia init\n\n(Optional) To install and run the GUI:\n. ./install-gui.sh\ncd chia-blockchain-gui\nnpm run electron\n")),"  "))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u63d0\u793a",(0,l.kt)("br",null),"\n\u5982\u679c\u60a8\u6536\u5230\u6d88\u606f\u8b66\u544a ",(0,l.kt)("inlineCode",{parentName:"p"},"WARNING: UNPROTECTED SSL FILE!")," \u8bf7\u8fd0\u884c\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia init --fix-ssl-permissions\n"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u4f7f\u7528\u6fc0\u6d3b\u7684\u865a\u62df\u73af\u5883\u6253\u5f00\u7ec8\u7aef\u7a97\u53e3\uff0c\u90a3\u4e48\uff1a",(0,l.kt)("br",null),"\u6253\u5f00\u7ec8\u7aef\u7a97\u53e3\u5e76\u786e\u4fdd\u60a8\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee chia \u547d\u4ee4\uff1a\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," \u76ee\u5f55\u5e76\u6fc0\u6d3b\u60a8\u7684\u865a\u62df\u73af\u5883\uff1a")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},".\\venv\\Scripts\\Activate.ps1\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," \u76ee\u5f55\u5e76\u6fc0\u6d3b\u60a8\u7684\u865a\u62df\u73af\u5883:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," \u76ee\u5f55\u5e76\u6fc0\u6d3b\u60a8\u7684\u865a\u62df\u73af\u5883\uff1a")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n")))),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia version\n")),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u6b65\u9aa4 1 \u6210\u529f\uff0c\u60a8\u5e94\u8be5\u4f1a\u5728\u8f93\u51fa\u4e2d\u770b\u5230\u4e00\u4e2a\u7248\u672c\u53f7\uff0c\u4f8b\u5982 1.4.1.dev364\u3002 \u8fd9\u662f\u5feb\u7167\u5de5\u5177\u5de5\u4f5c\u7684\u5fc5\u8981\u6761\u4ef6\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u540c\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u76ee\u5f55\u6765\u5b89\u88c5 CAT-addresses \u5b58\u50a8\u5e93\uff08\u5b83\u53ef\u4ee5\u5728\u7236\u76ee\u5f55\u4e2d\uff09\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/CAT-addresses.git -b main\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u672c\u5de5\u5177\u9700\u8981\u8bbe\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"FULL_NODE_HOSTNAME")," - \u8981\u8c03\u7528 RPC \u7684\u5168\u8282\u70b9\u7684\u4e3b\u673a\u540d\u3002 \u8fd9\u53ef\u4ee5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"DB_SOURCE_DIR")," - \u5168\u8282\u70b9\u6570\u636e\u5e93\u5728\u4e3b\u673a\u4e0a\u7684\u4f4d\u7f6e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"START_HEIGHT")," - \u5f00\u59cb\u521b\u5efa\u5feb\u7167\u7684\u8d77\u59cb\u9ad8\u5ea6\uff08\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff09\u3002 \u5982\u679c\u60a8\u5c1d\u8bd5\u83b7\u53d6\u60a8\u7684 CAT \u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5efa\u8bae\u7684\u8d77\u59cb\u9ad8\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1146800"),"\uff0c\u5373\u5728 CAT1 \u4e0a\u7ebf\u4e4b\u540e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT")," - \u7ed3\u675f\u5feb\u7167\u7684\u533a\u5757\u94fe\u9ad8\u5ea6\uff08\u65e0\u9ed8\u8ba4\u503c - \u5fc5\u987b\u8bbe\u7f6e\uff09\u3002 \u5efa\u8bae\u9ad8\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"2311760"),"\uff0c\u8fd9\u662f CAT1 \u6709\u6548\u7684\u6700\u540e\u4e00\u4e2a\u533a\u5757\u3002"))),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),(0,l.kt)("br",null),"\n\u6b64\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981 40 \u591a\u4e2a\u5c0f\u65f6\u624d\u80fd\u5b8c\u6210\u3002 \u60a8\u53ef\u80fd\u5e0c\u671b\u5148\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT"),"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1146900"),"\u6765\u8fdb\u884c\u6d4b\u8bd5\u3002\u8fd9\u5c06\u53ea\u4ece 100 \u4e2a\u5757\u4e2d\u63d0\u53d6\u6570\u636e\uff0c\u8fd9\u5e94\u8be5\u53ea\u9700\u8981\u51e0\u79d2\u949f\u3002")),(0,l.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u8bbe\u7f6e\u8fd9\u4e9b\u53d8\u91cf\uff0c\u5efa\u8bae\u60a8\u5c06\u5b83\u4eec\u653e\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"CAT-addresses"),"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u7684\u6587\u4ef6\u4e2d\u3002 \u8be5\u5de5\u5177\u5c06\u81ea\u52a8\u8bfb\u53d6\u6b64\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf\u3002 \u4f8b\u5982\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=C:\\Users\\Username\\.chia\\mainnet\\db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/home/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/Users/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56\u9879\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup.py install\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n")))),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),(0,l.kt)("br",null),"\n\u7ed3\u679c\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u8b66\u544a\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"WARNING: The wheel package is not available."),"\u3002 \u8fd9\u4e9b\u53ef\u4ee5\u5b89\u5168\u5730\u5ffd\u7565.")),(0,l.kt)("p",{parentName:"li"},"\u6b64\u547d\u4ee4\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u5b8c\u6210\u3002 \u5728\u6700\u540e\u7684\u8f93\u51fa\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u7c7b\u4f3c:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Finished processing dependencies for chia-transaction-exporter==0.1.dev55\u201d\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"backoff"),"\u6a21\u5757\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install python-dotenv\npip install backoff\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u5185\u5bb9\u8bbe\u7f6e\u6570\u636e\u5e93\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup_database.py\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n")))),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a"),(0,l.kt)("br",null),"\n\u5982\u679c\u60a8\u6536\u5230\u8bf8\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'chia'"),"\u4e4b\u7c7b\u7684\u9519\u8bef\u6d88\u606f\uff0c\u8bf7\u786e\u4fdd\u60a8\u53ef\u4ee5\u4ece\u8be5\u76ee\u5f55\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"chia"),"\u547d\u4ee4\u5e76\u91cd\u8bd5\u3002")),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u6b64\u547d\u4ee4\u6210\u529f\uff0c\u90a3\u4e48\u5b83\u5c06\u8f93\u51fa\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"INFO:setup_database:Setting up database\nINFO:setup_database:Database setup complete\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5feb\u7167\u751f\u6210\u5668:"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python start.py\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n")))),(0,l.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u5c06\u6839\u636e\u533a\u5757\u9ad8\u5ea6\u663e\u793a\u5176\u8fdb\u5ea6\u3002 \u5982\u679c\u60a8\u5728",(0,l.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\u4e2d\u4f7f\u7528\u4e86\u5efa\u8bae\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"START_HEIGHT"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT"),"\u8303\u56f4\uff0c\u5219\u6b64\u547d\u4ee4\u53ef\u80fd\u9700\u8981 40 \u591a\u4e2a\u5c0f\u65f6\u624d\u80fd\u5b8c\u6210\u3002 \u9700\u8981\u8fd9\u4e48\u957f\u65f6\u95f4\u7684\u539f\u56e0\u662f\u5b83\u9700\u8981\u9010\u4e2a\u5904\u7406\u6bcf\u4e2a\u533a\u5757\u3002 \u5982\u679c\u5e76\u884c\u5904\u7406\u591a\u4e2a\u533a\u5757\uff0c\u90a3\u4e48\u7ed3\u679c\u5c31\u6709\u53ef\u80fd\u4e0d\u51c6\u786e\u3002 \u901a\u8fc7\u4e00\u6b21\u5904\u7406\u4e00\u4e2a\u5757\uff0c\u8be5\u5de5\u5177\u5c06\u7ed9\u4e88\u63d0\u4f9b\u8303\u56f4\u7684\u6b63\u786e\u7ed3\u679c\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),(0,l.kt)("br",null),"\n\u60a8\u53ea\u80fd\u4e3a\u6bcf\u4e2a\u533a\u5757\u751f\u6210\u4e00\u6b21\u5feb\u7167\u3002 \u5982\u679c\u60a8\u5c1d\u8bd5\u5728\u5df2\u9488\u5bf9\u5176\u8fd0\u884c\u7684\u8303\u56f4\u5185\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u60a8\u5c06\u6536\u5230\u5305\u542b\u4ee5\u4e0b\u6d88\u606f\u7684\u9519\u8bef\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"sqlite3.IntegrityError: UNIQUE constraint failed: coin_create.coin_name\n")),(0,l.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u8981\u4e48\u9700\u8981\u4ece\u66f4\u9ad8\u7684\u9ad8\u5ea6\u5f00\u59cb\uff0c\u8981\u4e48\uff08\u63a8\u8350\uff09\u91cd\u65b0\u5f00\u59cb\u3002 \u8ddf\u968f\u53ef\u9009\u90e8\u5206\uff1a\u6570\u636e\u6e05\u7406\u90e8\u5206\uff08\u5982\u4e0b\uff09\u5e76\u91cd\u8bd5\u3002")))),(0,l.kt)("h2",{id:"export"},"\u4ece\u5feb\u7167\u4e2d\u5bfc\u51fa\u6240\u9700\u7684\u6570\u636e"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u5feb\u7167\u586b\u5145\u6570\u636e\u5e93\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u6570\u636e\u5bfc\u51fa\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/"},"taildatabase.com"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u641c\u7d22\u60a8\u7684 CAT\u3002\u6211\u4eec\u5c06\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/tail/1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a"},"CAT King Cole")," . \u8bf7\u8bb0\u5f55\u4e0b\u5b83\u7684 TAIL \u54c8\u5e0c\u503c\uff08Asset ID\uff09, \u5b83\u5217\u5728\u4ee3\u5e01\u6807\u9898\u7684\u4e0a\u65b9\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u662f\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u60a8\u7684 CAT \u751f\u6210\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5185\u5c42 Puzzle \u54c8\u5e0c\u503c\u548c\u91d1\u989d\u7684 CSV \u6587\u4ef6\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u6837\u4f8b\u547d\u4ee4"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir C:\\Users\\Username\\Chia\\CAT-addresses\\results\\CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /home/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /Users/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u4fe1\u606f"),(0,l.kt)("br",null)),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<OUTPUT-DIR>")," - \u662f\u60a8\u9009\u62e9\u7684\u7528\u4e8e\u4fdd\u5b58 CSV \u6587\u4ef6\u7684\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PREFIX>")," - \u4e00\u4e2a\u6dfb\u52a0\u5230\u8f93\u51fa\u6587\u4ef6\u540d\u7684\u5b57\u7b26\u4e32\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<TAIL-HASH>")," - \u662f\u60a8\u4ece ",(0,l.kt)("a",{parentName:"li",href:"https://www.taildatabase.com/"},"taildatabase.com")," \u83b7\u5f97\u7684 TAIL \u54c8\u5e0c\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--coins")," - \u4e00\u4e2a",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u9009"),"\u5f00\u5173\uff0c\u5c06\u6709\u5173\u5355\u4e2a\u786c\u5e01\u7684\u4fe1\u606f\u6dfb\u52a0\u5230\u8f93\u51fa\u4e2d\uff08\u8fd9\u53ef\u80fd\u6709\u52a9\u4e8e\u5ba1\u8ba1\u76ee\u7684\uff09\n:::"))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),(0,l.kt)("br",null),"\n\u6b64\u547d\u4ee4\u4e0d\u4f1a\u521b\u5efa\u4efb\u4f55\u76ee\u5f55\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd",(0,l.kt)("inlineCode",{parentName:"p"},"<OUTPUT DIR>"),"\u5728\u8fd0\u884c\u4e4b\u524d\u5df2\u7ecf\u5b58\u5728\u3002 \u5426\u5219\uff0c\u60a8\u5c06\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"FileNotFoundError"),"\u3002\n:::"))),(0,l.kt)("h2",{id:"fix-eol"},"\u4fee\u590d EOL \u5b57\u7b26"),(0,l.kt)("p",null,"\u6b64\u6b65\u9aa4\u5bf9\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"Windows")," \u7528\u6237\u662f\u5fc5\u9700\u7684\uff0c\u5bf9\u4e8e Linux/MacOS \u7528\u6237\u5219\u4e0d\u9700\u8981\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728 Windows \u4e0a\u8fd0\u884c\uff0cCSV \u6587\u4ef6\u5c06\u5728\u6bcf\u884c\u7684\u672b\u5c3e\u5305\u542b\u4e00\u4e2a\u989d\u5916\u7684 CR\uff08\u56de\u8f66\uff09\u5b57\u7b26\u3002 \u8fd9\u5c06\u5bfc\u81f4",(0,l.kt)("a",{parentName:"p",href:"/cat2-issuance#secure-single"},"\u201c\u4ee3\u5e01\u91cd\u65b0\u53d1\u914d\u201d"),"\uff08\u4e0b\u4e00\u8282\uff09\u5931\u8d25\u3002 \u9996\u5148\uff0c\u60a8\u5fc5\u987b\u5c06 CSV \u6587\u4ef6\u8f6c\u6362\u4e3a\u4f7f\u7528 UNIX \u6837\u5f0f\u7684\u884c\u5c3e\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"dos2unix"),"\u3002 \u8fd9\u4e0d\u5305\u542b\u5728 Windows \u4e2d\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u4ece Sourceforge \u4e0b\u8f7d\u5b83\u3002"),(0,l.kt)("p",null,"\u8f6c\u6362 CSV \u6587\u4ef6\u7684\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbf\u95ee",(0,l.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/dos2unix/"},"SourceForge dos2unix site")),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u7eff\u8272\u7684\u201c\u4e0b\u8f7d\u201d\u6309\u94ae\u3002 \u4e94\u79d2\u949f\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"dos2unix zip")," \u6587\u4ef6\u5c06\u4e0b\u8f7d\u5230\u60a8\u7684\u4e0b\u8f7d\u6587\u4ef6\u5939"),(0,l.kt)("li",{parentName:"ol"},"\u89e3\u538b",(0,l.kt)("inlineCode",{parentName:"li"},"dos2unix")," zip \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Powershell \u7a97\u53e3\u4e2d\uff0c\u8fd0\u884c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"<path to dos2unix.exe> -o <path to CSV file>\n")),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"~\\Downloads\\dos2unix\\bin\\dos2unix.exe -o .\\results\\CKC_1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a.1658233083.183527.csv\n")),(0,l.kt)("p",null,"\u6b64\u6d88\u606f\u5e94\u51fa\u73b0\u5728\u8f93\u51fa\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dos2unix: converting file <CSV file> to Unix format...\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u8981\u9a8c\u8bc1\u8f6c\u6362\u662f\u5426\u6210\u529f\uff0c\u8bf7\u6253\u5f00\u8be5\u6587\u4ef6\u3002 \u6761\u76ee\u4e4b\u95f4\u4e0d\u5e94\u6709\u7a7a\u884c\u3002")),(0,l.kt)("h2",{id:"cleanup"},"\u6570\u636e\u6e05\u7406"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u5728\u8fd0\u884c\u4e2d\u9014\u9000\u51fa\uff0c\u5b83\u53ea\u4f1a\u5bfc\u5165\u533a\u5757\u5230\u67d0\u4e00\u7279\u5b9a\u9ad8\u5ea6\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6307\u5b9a\u9ad8\u5ea6\u53ca\u4e4b\u524d\u7684\u8bb0\u5f55\uff1a"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python clean.py --height <BLOCK-HEIGHT>\n"))),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n"))),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n")))),(0,l.kt)("h2",{id:"export-all"},"\u83b7\u53d6\u533a\u5757\u94fe\u4e0a\u6240\u6709 CAT \u7684\u4f59\u989d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u5982\u679c\u60a8\u5e0c\u671b\u83b7\u5f97 Chia \u533a\u5757\u94fe\u4e0a\u6240\u6709 CAT \u7684\u4f59\u989d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u4e0d\u540c\u7684\u9009\u9879\u8fd0\u884c"),(0,l.kt)(r.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("p",null,"\u53ef\u4ee5\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," \u6807\u5fd7\uff0c\u4ece\u800c\u751f\u6210\u5355\u4e2a CSV \u6587\u4ef6\u7684\u8f93\u51fa\uff0c\u5176\u4e2d\u5305\u542b Chia \u533a\u5757\u94fe\u4e0a\u6bcf\u4e2a CAT \u7684\u6bcf\u4e2a\u62fc\u56fe\u54c8\u5e0c\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX>\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u6dfb\u52a0\u6709\u5173\u5355\u4e2a\u786c\u5e01\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --coins\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u591a\u4e2a CSV \u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u90fd\u5305\u542b\u4e00\u4e2a CAT \u7684\u62fc\u56fe\u54c8\u5e0c\u548c\u6570\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --explode\n")),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u5355\u72ec\u7684 CSV \u6587\u4ef6\uff0c\u5176\u4e2d\u4e5f\u5305\u542b\u786c\u5e01\u4fe1\u606f\u3002")),(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,"\u53ef\u4ee5\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," \u6807\u5fd7\uff0c\u4ece\u800c\u751f\u6210\u5355\u4e2a CSV \u6587\u4ef6\u7684\u8f93\u51fa\uff0c\u5176\u4e2d\u5305\u542b Chia \u533a\u5757\u94fe\u4e0a\u6bcf\u4e2a CAT \u7684\u6bcf\u4e2a\u62fc\u56fe\u54c8\u5e0c\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u6dfb\u52a0\u6709\u5173\u5355\u4e2a\u786c\u5e01\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u591a\u4e2a CSV \u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u90fd\u5305\u542b\u4e00\u4e2a CAT \u7684\u62fc\u56fe\u54c8\u5e0c\u548c\u6570\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u5355\u72ec\u7684 CSV \u6587\u4ef6\uff0c\u5176\u4e2d\u4e5f\u5305\u542b\u786c\u5e01\u4fe1\u606f\u3002")),(0,l.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("p",null,"\u53ef\u4ee5\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," \u6807\u5fd7\uff0c\u4ece\u800c\u751f\u6210\u5355\u4e2a CSV \u6587\u4ef6\u7684\u8f93\u51fa\uff0c\u5176\u4e2d\u5305\u542b Chia \u533a\u5757\u94fe\u4e0a\u6bcf\u4e2a CAT \u7684\u6bcf\u4e2a\u62fc\u56fe\u54c8\u5e0c\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u6dfb\u52a0\u6709\u5173\u5355\u4e2a\u786c\u5e01\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u591a\u4e2a CSV \u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u90fd\u5305\u542b\u4e00\u4e2a CAT \u7684\u62fc\u56fe\u54c8\u5e0c\u548c\u6570\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," \u6807\u5fd7\uff0c\u8fd9\u5c06\u751f\u6210\u5355\u72ec\u7684 CSV \u6587\u4ef6\uff0c\u5176\u4e2d\u4e5f\u5305\u542b\u786c\u5e01\u4fe1\u606f\u3002"))))}k.isMDXComponent=!0}}]);