import{j as e}from"./jsx-runtime.K1e75nIr.js";import{r as v}from"./index.NEDEFKed.js";import{m as f}from"./marked.esm.Cpk5MODx.js";const j=[{group:"blog",slug:"blog/hysteria",frontmatter:{title:"翻墙代理Hysteria2",meta_title:"Hysteria2 介绍、部署及使用",description:"this is meta description",date:"2022-04-04T05:00:00.000Z",image:"/images/hysteria.png",categories:["Technology"],author:"Rainbow",tags:["Hysteria"],draft:!1},content:`## Hysteria2简介

**Hysteria 是一个强大、快速、抗审查的代理工具。**

[Hysteria2官方地址](https://v2.hysteria.network/zh/)

基于魔改的[QUIC](https://zh.wikipedia.org/zh-cn/QUIC)协议，Hysteria 即使在最不稳定和容易丢包的网络环境中也能提供无与伦比的性能。

## 服务端安装

首先进入位于境外服务器。

### 安装服务

推荐使用官方提供的脚本：

\`\`\`bash
# 切换到 root, 如果本就是root, 就省略
sudo -i  
# 一键安装 Hysteria2  
bash <(curl -fsSL https://get.hy2.sh/)
\`\`\`

大概输出一条成功提示，则安装成功：

\`\`\`
Congratulation! Hysteria 2 has been successfully installed on your server.
\`\`\`

并提示我们下一步要：

1. 修改服务端配置文件 /etc/hysteria/config.yaml
2. 启动 hysteria systemctl start hysteria-server.service
3. 设置开机自启 systemctl enable hysteria-server.service

### 设置开机自启

\`\`\`bash
systemctl enable hysteria-server.service
\`\`\`
### 生成自签名证书

**官方安装文档里需要域名，但实际上自签名证书即可**。

参考：[augustdoit博客](https://augustdoit.men/)

\`\`\`bash
openssl req -x509 -nodes -newkey ec:<(openssl ecparam -name prime256v1) -keyout /etc/hysteria/server.key -out /etc/hysteria/server.crt -subj "/CN=bing.com" -days 36500 && sudo chown hysteria /etc/hysteria/server.key && sudo chown hysteria /etc/hysteria/server.crt
\`\`\`

这段命令用于生成一个自签名的 ECDSA (Elliptic Curve Digital Signature Algorithm) 密钥对和相应的自签名 X.509 证书

\`\`\`
- \`openssl req\`: 这是 OpenSSL 工具的一个子命令，用于生成或处理证书签名请求。

- \`-x509\`: 指定生成自签名的 X.509 证书，而不是签名请求。

- \`-nodes\`: 指示在生成密钥对时不加密私钥。

- \`-newkey ec:<(openssl ecparam -name prime256v1)\`: 指定使用 ECDSA 密钥对，并且生成新的私钥。\`<(openssl ecparam -name prime256v1)\` 用于生成 prime256v1（也称为 P-256）椭圆曲线参数。这将创建一个名为 prime256v1 的椭圆曲线密钥。

- \`-keyout /etc/hysteria/server.key\`: 指定生成的私钥文件路径为 \`/etc/hysteria/server.key\`。

- \`-out /etc/hysteria/server.crt\`: 指定生成的证书文件路径为 \`/etc/hysteria/server.crt\`。

- \`-subj "/CN=bing.com"\`: 设置证书的主题字段，其中 \`/CN=bing.com\` 指定了通用名称 (Common Name)，这里被设置为 "bing.com"。这是 X.509 证书中的一个标准字段，通常用于指定证书的主机名。

- \`-days 36500\`: 指定证书的有效期为 36500 天，约等于 100 年。

最后两条命令是更改生成的私钥和证书的所有者为 \`hysteria\` 用户，以便限制对这些文件的访问权限。
\`\`\`

有用的文件，当然是server.key, server.crt

### 设置配置文件

/etc/hysteria/config.yaml 如果找不到，find指令；

\`\`\`yml
listen: :443 #监听端口  
  
#有域名，使用CA证书   
#acme:  
#  domains:  
#    - test.heybro.bid #你的域名，需要先解析到服务器ip  
#  email: augustdoit@gmail.com  
  
#使用自签名证书  
tls:  
  cert: /etc/hysteria/server.crt  
  key: /etc/hysteria/server.key  
  
auth:  
  type: password  
  password: Se7RAuFZ8Lzg #设置认证密码  
  
#伪装  
masquerade:  
  type: proxy  
  proxy:  
    url: https://bing.com/ #伪装网址  
    rewriteHost: true
\`\`\`

*伪装 (Masquerade)*

Hysteria 抵抗审查的关键之一就是它能伪装成标准的 HTTP/3 流量。这意味着数据包不仅对中间设备（middleboxes）看起来像是 HTTP/3，服务器还会像普通网站服务器一样真的响应 HTTP 请求。然而，这意味着你的服务器必须实际提供一些内容，以便看起来是真实的。

### 启动Hysteria2服务

\`\`\`bash
systemctl start hysteria-server.service
\`\`\`

_查看状态_

\`\`\`bash
# 查看状态及日志  
systemctl status hysteria-server.service -l  
# 停止Hysteria2  
systemctl stop hysteria-server.service  
# 设置开机自启  
systemctl enable hysteria-server.service  
# 重启  
systemctl restart hysteria-server.service
\`\`\`

查看状态无异常，至此安装完成

## 客户端安装

很多客户端都支持hysteria代理，安装常用的v2rayN 即可；
示例版本为 Release 6.42
[Release 6.42 · 2dust/v2rayN (github.com)](https://github.com/2dust/v2rayN/releases/tag/6.42)

安装↓

zz_v2rayN-With-Core-SelfContained.7z

安装后添加 Hysteria2 服务器
![](/images/hysteria_client.png)
`}],w=a=>a.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/[-\s]+/g," ").replace(/^[a-z]/,function(o){return o.toUpperCase()}),C=a=>w(a).split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(" "),k=a=>{const h=f.parse(a).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"");return L(h)},L=a=>{let o={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return a.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,h=>o[h])},N=({searchResult:a,searchString:o})=>{const h=(l=>l.reduce((r,t)=>{const n=r.findIndex(u=>u.group===t.group);return n===-1?r.push({group:t.group,groupItems:[{frontmatter:{...t.frontmatter},slug:t.slug,content:t.content}]}):r[n].groupItems.push({frontmatter:{...t.frontmatter},slug:t.slug,content:t.content}),r},[]))(a),g=(l,s)=>l.split(new RegExp(`(${s})`,"gi")).map((t,n)=>t.toLowerCase()===s.toLowerCase()?e.jsx("mark",{children:t},n):t),m=(l,s)=>l?.split(new RegExp(`(${s})`,"gi"))?.map((t,n)=>t.toLowerCase()===s.toLowerCase()?e.jsx("span",{className:"underline",children:t},n):t),x=(l,s)=>{const r=k(l),t=r.toLowerCase().indexOf(s.toLowerCase());let n=t;for(;n>0&&r[n-1]!==" ";)n--;const u=r.substring(n,s.length+t),i=r.substring(s.length+t,s.length+t+80);return e.jsxs(e.Fragment,{children:[g(u,s),i]})};return e.jsx("div",{className:"search-wrapper-body",children:o?e.jsx("div",{className:"search-result",children:h.length>0?h.map(l=>e.jsxs("div",{className:"search-result-group",children:[e.jsx("p",{className:"search-result-group-title",children:C(l.group)}),l.groupItems.map(s=>e.jsxs("div",{id:"searchItem",className:"search-result-item",children:[s.frontmatter.image&&e.jsx("div",{className:"search-result-item-image",children:e.jsx("img",{src:s.frontmatter.image,alt:s.frontmatter.title})}),e.jsxs("div",{className:"search-result-item-body",children:[e.jsx("a",{href:`/${s.slug}`,className:"search-result-item-title search-result-item-link",children:m(s.frontmatter.title,o)}),s.frontmatter.description&&e.jsx("p",{className:"search-result-item-description",children:m(s.frontmatter.description,o)}),s.content&&e.jsx("p",{className:"search-result-item-content",children:x(s.content,o)}),e.jsxs("div",{className:"search-result-item-taxonomies",children:[s.frontmatter.categories&&e.jsxs("div",{className:"mr-2",children:[e.jsx("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z"})}),s.frontmatter.categories.map((r,t)=>e.jsxs("span",{children:[m(r,o),s.frontmatter.categories&&t!==s.frontmatter.categories.length-1&&e.jsx(e.Fragment,{children:", "})]},r))]}),s.frontmatter.tags&&e.jsxs("div",{className:"mr-2",children:[e.jsxs("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"}),e.jsx("path",{d:"M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"})]}),s.frontmatter.tags.map((r,t)=>e.jsxs("span",{children:[m(r,o),s.frontmatter.tags&&t!==s.frontmatter.tags.length-1&&e.jsx(e.Fragment,{children:", "})]},r))]})]})]})]},s.slug))]},l.group)):e.jsxs("div",{className:"search-result-empty",children:[e.jsxs("svg",{className:"mx-auto",width:"42",height:"42",viewBox:"0 0 47 47",fill:"none",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.10368 33.9625C9.90104 36.2184 13.2988 37.6547 16.9158 38.0692C21.6958 38.617 26.5063 37.3401 30.3853 34.4939C30.4731 34.6109 30.5668 34.7221 30.6721 34.8304L41.9815 46.1397C42.5323 46.6909 43.2795 47.0007 44.0587 47.001C44.838 47.0013 45.5854 46.692 46.1366 46.1412C46.6878 45.5904 46.9976 44.8432 46.9979 44.064C46.9981 43.2847 46.6888 42.5373 46.138 41.9861L34.8287 30.6767C34.7236 30.5704 34.6107 30.4752 34.4909 30.3859C37.3352 26.5046 38.6092 21.6924 38.0579 16.912C37.6355 13.2498 36.1657 9.81322 33.8586 6.9977L31.7805 9.09214C34.0157 11.9274 35.2487 15.4472 35.2487 19.0942C35.2487 21.2158 34.8308 23.3167 34.0189 25.2769C33.207 27.2371 32.0169 29.0181 30.5167 30.5184C29.0164 32.0186 27.2354 33.2087 25.2752 34.0206C23.315 34.8325 21.2141 35.2504 19.0925 35.2504C16.9708 35.2504 14.8699 34.8325 12.9098 34.0206C11.5762 33.4682 10.3256 32.7409 9.18992 31.8599L7.10368 33.9625ZM28.9344 6.28152C26.1272 4.12516 22.671 2.93792 19.0925 2.93792C14.8076 2.93792 10.6982 4.64009 7.66829 7.66997C4.6384 10.6999 2.93623 14.8093 2.93623 19.0942C2.93623 21.2158 3.35413 23.3167 4.16605 25.2769C4.72475 26.6257 5.4625 27.8897 6.35716 29.0358L4.2702 31.1391C1.35261 27.548 -0.165546 23.0135 0.00974294 18.3781C0.19158 13.5695 2.18233 9.00695 5.58371 5.60313C8.98509 2.19932 13.5463 0.205307 18.3547 0.0200301C22.9447 -0.156832 27.4369 1.32691 31.0132 4.18636L28.9344 6.28152Z",fill:"currentColor"}),e.jsx("path",{d:"M3.13672 39.1367L38.3537 3.64355",stroke:"black",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsxs("p",{className:"mt-4",children:['No results for "',e.jsx("strong",{children:o}),'"']})]})}):e.jsx("div",{className:"py-8 text-center",children:"Type something to search..."})})},H=()=>{const[a,o]=v.useState(""),d=s=>{o(s.currentTarget.value.replace("\\","").toLowerCase())},h=s=>{const r=new RegExp(`${a}`,"gi");return a===""?[]:s.filter(n=>{const u=n.frontmatter.title.toLowerCase().match(r),i=n.frontmatter.description?.toLowerCase().match(r),y=n.frontmatter.categories?.join(" ").toLowerCase().match(r),c=n.frontmatter.tags?.join(" ").toLowerCase().match(r),p=n.content.toLowerCase().match(r);if(u||p||i||y||c)return n})},g=performance.now(),m=h(j),l=((performance.now()-g)/1e3).toFixed(3);return v.useEffect(()=>{const s=document.getElementById("searchModal"),r=document.getElementById("searchInput"),t=document.getElementById("searchModalOverlay"),n=document.querySelectorAll("#searchItem");document.querySelectorAll("[data-search-trigger]").forEach(c=>{c.addEventListener("click",function(){document.getElementById("searchModal").classList.add("show"),r.focus()})}),t.addEventListener("click",function(){s.classList.remove("show")});let i=-1;const y=()=>{n.forEach((c,p)=>{p===i?c.classList.add("search-result-item-active"):c.classList.remove("search-result-item-active")}),n[i]?.scrollIntoView({behavior:"smooth",block:"nearest"})};document.addEventListener("keydown",function(c){if((c.metaKey||c.ctrlKey)&&c.key==="k"&&(s.classList.add("show"),r.focus(),y()),(c.key==="ArrowUp"||c.key==="ArrowDown")&&c.preventDefault(),c.key==="Escape"&&s.classList.remove("show"),c.key==="ArrowUp"&&i>0)i--;else if(c.key==="ArrowDown"&&i<n.length-1)i++;else if(c.key==="Enter"){const p=document.querySelector(".search-result-item-active a");p&&p?.click()}y()})},[a]),e.jsxs("div",{id:"searchModal",className:"search-modal",children:[e.jsx("div",{id:"searchModalOverlay",className:"search-modal-overlay"}),e.jsxs("div",{className:"search-wrapper",children:[e.jsxs("div",{className:"search-wrapper-header",children:[e.jsxs("label",{htmlFor:"searchInput",className:"absolute left-7 top-[calc(50%-7px)]",children:[e.jsx("span",{className:"sr-only",children:"search icon"}),a?e.jsxs("svg",{onClick:()=>o(""),viewBox:"0 0 512 512",height:"18",width:"18",className:"hover:text-red-500 cursor-pointer -mt-0.5",children:[e.jsx("title",{children:"close icon"}),e.jsx("path",{fill:"currentcolor",d:"M256 512A256 256 0 10256 0a256 256 0 100 512zM175 175c9.4-9.4 24.6-9.4 33.9.0l47 47 47-47c9.4-9.4 24.6-9.4 33.9.0s9.4 24.6.0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6.0 33.9s-24.6 9.4-33.9.0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9.0s-9.4-24.6.0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6.0-33.9z"})]}):e.jsxs("svg",{viewBox:"0 0 512 512",height:"18",width:"18",className:"-mt-0.5",children:[e.jsx("title",{children:"search icon"}),e.jsx("path",{fill:"currentcolor",d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z"})]})]}),e.jsx("input",{id:"searchInput",placeholder:"Search...",className:"search-wrapper-header-input",type:"input",name:"search",value:a,onChange:d,autoComplete:"off"})]}),e.jsx(N,{searchResult:m,searchString:a}),e.jsxs("div",{className:"search-wrapper-footer",children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{children:e.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 011.506.0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z"})})}),e.jsx("kbd",{children:e.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 001.506.0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z"})})}),"to navigate"]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{children:e.jsx("svg",{width:"12",height:"12",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5.0 01.5.5v4.8a2.5 2.5.0 01-2.5 2.5H2.707l3.347 3.346a.5.5.0 01-.708.708l-4.2-4.2a.5.5.0 010-.708l4-4a.5.5.0 11.708.708L2.707 8.3H12.5A1.5 1.5.0 0014 6.8V2a.5.5.0 01.5-.5z"})})}),"to select"]}),a&&e.jsxs("span",{children:[e.jsxs("strong",{children:[m.length," "]})," results - in"," ",e.jsxs("strong",{children:[l," "]})," seconds"]}),e.jsxs("span",{children:[e.jsx("kbd",{children:"ESC"})," to close"]})]})]})]})};export{H as default};
