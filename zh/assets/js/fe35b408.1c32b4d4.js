"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"SSD Endurance",slug:"/ssd-endurance"},i=void 0,l={unversionedId:"plotting/ssd-endurance",id:"plotting/ssd-endurance",title:"SSD Endurance",description:"Estimated SSD wear out, endurance table",source:"@site/docs/plotting/ssd-endurance.md",sourceDirName:"plotting",slug:"/ssd-endurance",permalink:"/zh/ssd-endurance",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/plotting/ssd-endurance.md",tags:[],version:"current",frontMatter:{title:"SSD Endurance",slug:"/ssd-endurance"},sidebar:"tutorialSidebar",previous:{title:"K Sizes",permalink:"/zh/k-sizes"},next:{title:"Moving Plots",permalink:"/zh/moving-plots"}},s={},u=[{value:"Estimated SSD wear out, endurance table",id:"estimated-ssd-wear-out-endurance-table",level:2},{value:"Math",id:"math",level:2},{value:"Monitor Endurance in Linux",id:"monitor-endurance-in-linux",level:2},{value:"NVMe",id:"nvme",level:3},{value:"SATA",id:"sata",level:3},{value:"SAS",id:"sas",level:3},{value:"Adding new models",id:"adding-new-models",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"estimated-ssd-wear-out-endurance-table"},"Estimated SSD wear out, endurance table"),(0,a.kt)("p",null,"There are various approaches to picking a great plotting SSD, and a lot will depend on the physical system it is going into for form factor and interface compatibility (NVMe/PCIe, SATA, or SAS). The one thing in common will be that you need high endurance, due to the fact that it takes almost ~1.3TiB of writes (post 1.0.4 version) per k-32 plot."),(0,a.kt)("p",null,"Endurance with madMAx plotter is measured at"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-t & -2 on same drive: 1.43TB or 1.31TiB written per k=32 plot"),(0,a.kt)("li",{parentName:"ul"},"-t only (-2 in ramdisk): 396.3 GB, 369.1 GiB (0.36 TiB)")),(0,a.kt)("p",null,"Endurance is how much data can be written to the SSD before it wears out. In Chia this is important because a plotting SSD will generally be at 100% duty cycle and writing all day."),(0,a.kt)("p",null,"A mixed use or high endurance data center or enterprise SSD is the best choice for plotting. Used SSDs with plenty of endurance can be found for a good value on eBay, Craigslist, or similar."),(0,a.kt)("p",null,"Consumer NVMe SSDs are generally not recommended due to the lower endurance, and they often employ caching algorithms to faster media (SLC, or single level cell) for great bursty performance. They do not perform well under heavy workload sustained IO.\nThere are very high performance consumer NVMe SSDs that will offer great plotting performance, but the lower rated endurance in TBW will result in a faster wearout."),(0,a.kt)("p",null,"Here are some ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1mNUYRWeJUaijEZXupwP5k6IuATZGj1FB/edit#gid=1857251151"},"endurance examples"),"."),(0,a.kt)("p",null,"You can learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://www.snia.org/forums/cmsi/ssd-endurance"},"SSD endurance from this SNIA whitepaper from JM"),"."),(0,a.kt)("h2",{id:"math"},"Math"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NAND P/E Cycles = amount of program / erase cycles NAND can do before wearing out. NAND programs (writes) in pages and erases in blocks (contains many pages)"),(0,a.kt)("li",{parentName:"ul"},"Wearing out - SSD no longer meeting UBER (uncorrectable bit error rate), retention (keeping data safe while powered off), failure rate, or user capacity"),(0,a.kt)("li",{parentName:"ul"},"UBER = number of data errors / number of bits read"),(0,a.kt)("li",{parentName:"ul"},"WAF (Write Amplification Factor) = NAND writes / host writes"),(0,a.kt)("li",{parentName:"ul"},"TBW or PBW \u2013 amount of host writes to SSD before wearing out"),(0,a.kt)("li",{parentName:"ul"},"TBW = drive capacity ","*"," cycles / WAF"),(0,a.kt)("li",{parentName:"ul"},"DWPD (drive writes per day): amount of data you can write to device each day of the warranty (typically 5 years) without wearing out"),(0,a.kt)("li",{parentName:"ul"},"DWPD = TBW/365/5/drive capacity")),(0,a.kt)("h2",{id:"monitor-endurance-in-linux"},"Monitor Endurance in Linux"),(0,a.kt)("h3",{id:"nvme"},"NVMe"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/linux-nvme/nvme-cli"},"https://github.com/linux-nvme/nvme-cli")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nvmexpress.org/open-source-nvme-management-utility-nvme-command-line-interface-nvme-cli/"},"https://nvmexpress.org/open-source-nvme-management-utility-nvme-command-line-interface-nvme-cli/")),(0,a.kt)("p",null,"Reading endurance with NVMe-CLI - this is the gas gauge that shows total endurance used"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo nvme smart-log /dev/nvme0 | grep percentage_used"),"\nReading amount of writes that the drive have actually done"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo nvme smart-log /dev/nvme0 | grep data_units_written"),"\nBytes written = output ",(0,a.kt)("em",{parentName:"p"}," 1000 ")," 512B"),(0,a.kt)("p",null,"TBW = output ",(0,a.kt)("em",{parentName:"p"}," 1000 ")," 512B / (1000^4) or (1024^4)"),(0,a.kt)("p",null,"To find out NAND writes, you will have use the vendor plugins for NVMe-CLI."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo nvme <vendor name> help")),(0,a.kt)("p",null,"Example with an Intel SSD"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo nvme intel smart-log-add /dev/nvme0")),(0,a.kt)("h3",{id:"sata"},"SATA"),(0,a.kt)("p",null,"In SATA you can use the following commands"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install smartmontools")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo smartctl -x /dev/sda | grep Logical")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo smartctl -a /dev/sda")),(0,a.kt)("p",null,"looking for Media_Wearout_Indicator"),(0,a.kt)("p",null,"note this does also work for NVMe for basic SMART health info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo smartctl -a /dev/nvme0")),(0,a.kt)("h3",{id:"sas"},"SAS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sg_logs /dev/sg1 --page=0x11")),(0,a.kt)("p",null,"look for"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Percentage used endurance indicator: 0%")),(0,a.kt)("p",null,"overview of SSD endurance testing from JEDEC industry standard here\n",(0,a.kt)("a",{parentName:"p",href:"https://www.jedec.org/sites/default/files/Alvin_Cox%20%5BCompatibility%20Mode%5D_0.pdf"},"https://www.jedec.org/sites/default/files/Alvin_Cox%20%5BCompatibility%20Mode%5D_0.pdf")),(0,a.kt)("h2",{id:"adding-new-models"},"Adding new models"),(0,a.kt)("p",null,"Please add your model string below if you want me to put it into my calculator and add to the list!"))}p.isMDXComponent=!0}}]);