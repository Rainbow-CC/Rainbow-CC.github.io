import{j as e}from"./jsx-runtime.K1e75nIr.js";import{r as v}from"./index.NEDEFKed.js";import{m as x}from"./marked.esm.Cpk5MODx.js";const j=[{group:"blog",slug:"blog/.obsidian/plugins/Enhanced-editing-main/README",frontmatter:{},content:`**【增强编辑】插件旨在增强Obsidian软件的文本编辑操作，力求人性化、智能化、自动化处理当前页面文字。**\r
\r
## 📣 赞助声明\r
欢迎向蚕子(QQ:312815311) 提出操作需求和功能建议，愿我们为增强Obsidian的编辑功能来共同努力！  \r
如感觉此插件能够提升您的编辑效率，期待赞助支持一下国产插件。\r
\r
![收款码](https://user-images.githubusercontent.com/16410542/163940657-65036cc5-aa18-40e1-923e-d4fb1ed658e3.png)  \r
金额不限，仅限微信；备注留名，不胜感谢\r
\r
## 📣 功能说明\r
### ☑️ 状态栏命令菜单\r
- 支持【状态栏菜单】激活语法格式刷功能\r
- 支持【状态栏菜单】执行实用增强命令\r
- 支持【状态栏菜单】开启插件设置面板及快捷键面板  \r
![](https://user-images.githubusercontent.com/16410542/163715581-c1837e9c-b89a-4279-bfa3-68a3000eb39a.png)\r
\r
### ☑️ 转换内部链接\r
**1. 按下「Alt+Z」快捷键，在选文两端添加或去除 \\[\\[ ]] 符号**\r
![转换内部链接](https://user-images.githubusercontent.com/16410542/161437571-10987a6d-ff0f-4ef1-9193-f2b0602f18e4.gif)\r
\r
- 若未选中文本，视光标位置分两种情况处理\r
	- 若光标处在\\[\\[链接|文字]]当中，则自动去除外围的链接符号\r
	- 若光标未处在链接当中，则直接输出\\[\\[字符\r
- 支持批量转换用换行符分隔的被选中的多行文本或用顿号分隔的被选中的多个字符串。\r
- 所选文本中如出现 "|[]?\\*<>/: 等符号，此功能不会执行。\r
\r
**2. 按下「Alt+Q」快捷键，将选文转换为 \\[\\[|选文]] 样式，方便选择笔记名**\r
![转为同名链接](https://user-images.githubusercontent.com/16410542/161437746-24db8f7a-c2f9-466e-b0d1-c16ade9bbcfc.gif)\r
\r
**3. 执行「批量转换内链」命令，将当前笔记中的潜在链接一次性转换为 \`[[笔记名]]\` 内部链接样式**\r
\r
### ☑️ 智能符号\r
**3. 按下「Alt+;」快捷键，自动转换、匹配或跳过各种类型的括号符号**\r
![智能符号](https://user-images.githubusercontent.com/16410542/161437355-79562ee8-60a7-41d5-85d2-d0ca5da495ba.gif)\r
\r
- 行首遇特殊字符时的**转换为专用字符**（参考Easy Typing插件）\r
	-  》  → >\r
	-  、 → /\r
\r
- 判断前两字符并**替换为对应的符号**\r
	-  【（ 或  [( 替换为 〖\r
	-  （< 或  (< 替换为 〈\r
	-  （【 或  ([ 替换为 〔\r
	-  “ 【 或 "[  替换为 『\r
	-  ‘ 【 或  '[  替换为 「\r
	-  ……  替换为 ^\r
\r
- 判断光标以前最近的前括号，会**匹配对应的后括号**\r
	- 原文是〖文字|-  按「Alt+;」快捷键后，在光标|处生成〗符号，以下同理。\r
	- 《文字|》〈文字|〉［文字|］｛文字|｝【文字|】〖文字|〗〔文字|〕『文字|』「文字|」\r
\r
- 判断光标以前最近的Md语法（前半截字符组），会**匹配对应的后半截字符组**。 \r
	- [[链接]]  ==高亮==   **加粗** ~~删除~~ %%注释%%\r
\r
- 原来是 [[文字|]]其它文字，在光标|处按「Alt+;」快捷键，**光标会跳到]]符号后面**\r
	- 即判断后面为链接、粗体、高亮、删除线等MD语法的后半截字符组时 自动跳过\r
\r
- 判断当前行内容，如为 Dataview、Query、Mermaid等单词，则**转为代码块语法**\r
	- dv → \`\`\`dataview\`\`\`\r
	- qy  → \`\`\`query\`\`\`\r
	- mm → \`\`\`mermaid\`\`\`\r
	- 也支持 js css ph c java py等语言名称缩写\r
\r
- 判断当前行内容，如为 \`Callout语法类型 对齐方式 +/\` 样式，则**转为Callout语法引用块**\r
![转换callout语法](https://user-images.githubusercontent.com/16410542/161438754-b58e903f-514e-46e5-b71f-9dbcde406db7.gif)\r
\r
### ☑️ 转换 Html 语法\r
- 转换文字颜色「Ctrl+Shift+1-5」∶将选文转为或去除 5种自定义颜色\r
- 转换背景颜色「Ctrl+Alt+1-5」∶将选文背景转为或去除 5种自定义颜色\r
\r
### ☑️ 转换 MarkDown 语法\r
- 转换粗体语法「Alt+C」∶将选文转为或去除 **粗体** 效果\r
- 转换斜体语法「Alt+X」∶将选文转为或去除 _斜体_ 效果\r
- 转换行内代码「Alt+D」∶将选文转为或去除 \`行内代码\` 效果\r
- 转换删除线「Alt+S」∶将选文转为或去除 ~~删除线~~ 效果\r
- 转换下划线「Alt+H」∶将选文转为或去除 下划线 效果\r
- 转换代码块「未设置」∶将选文转为或去除 \`\`\`代码块\`\`\` 效果\r
- 转换上标语法「Alt+U」∶将选文转为或去除 上标 效果\r
- 转换下标语法「Alt+N」∶将选文转为或去除 下标 效果\r
- 转换待办状态「未设置」：转换选文行首的待办状态，顺序为 -[ x-!?><+] 效果\r
- 转换挖空「未设置」：将选文转为或去除 {{c1::选文}} 效果\r
- 转换标题语法「Ctrl+1-6」∶指定或取消当前行文本为N级标题\r
\r
- 转换无语法文本「Ctrl+Alt+Z」∶去除选文中所有markdown语法字符\r
- 获取无语法文本「Ctrl+Alt+C」∶去除选文中的所有markdown语法字符，并写入剪贴板\r
\r
### ☑️ 增减常见括号\r
- 【选文】「未设置」：在选文两端添加或去除 【】符号\r
- （选文）「未设置」：在选文两端添加或去除 （）符号\r
- 「选文」「未设置」：在选文两端添加或去除 「」符号\r
- 《选文》「未设置」：在选文两端添加或去除 《》符号\r
\r
### ☑️ 全局转换操作\r
- 英转中文标点「未设置」∶将笔记中的英文标点转换为中文标点，如,.?!"等\r
- 中转英文标点「未设置」∶将笔记中的中文标点转换为英文标点，如，。？！“等\r
- 转换路径语法「未设置」∶将 c:\\\\windows 与 [](file:///c:\\/windows) 路径语法相互转换\r
- 简体转为繁体「未设置」：将笔记中的简体汉字转换为繁体汉字\r
- 繁体转为简体「未设置」：将笔记中的繁体汉字转换为简体汉字\r
\r
### ☑️ 个性增强功能\r
- 智能粘贴「Ctrl+Alt+V」∶将复制的Office表格直接粘贴为MarkDown语法表格\r
- 修复错误语法「未设置」∶修复错误的MD语法，如1。列表、【】（）链接、[[]]()回链等\r
- 修复意外断行「未设置」∶修复笔记中的意外断行（删除结尾不是句式标点的换行符）\r
- 搜索当前文本「未设置」：通过搜索面板在当前文档中搜索划选内容。\r
- 获取时间信息「未设置」∶获取当前行中的时间信息，并控制链接笔记中的视频进行跳转播放\r
- 获取标注文本「未设置」∶获取标题、高亮、注释及前缀(#标注\\批注\\反思)等文本内容\r
- 选择当前整段「未设置」：选择光标所在的当前整段文本。\r
- 选择当前整句「未设置」：选择光标所在的当前整句（中文）文本。\r
- 自动设置标题「未设置」∶将选文中的单行文本（末尾非标点或数字）转为标题\r
- 指定当前文件名「未设置」：划选文字后指定为当前笔记的文件名。\r
- 嵌入当前网址页面「未设置」∶在行末插入Html代码来嵌入所选网址页面。\r
- 获取相对路径「未设置」：获取当前笔记在库目录内的相对路径。\r
\r
### ☑️ 插入或去除空行（空格）\r
- 编辑区内按下回车补加一次换行（有开关）\r
- 批量插入空行「Ctrl+Shift+L」∶在划选的文本行或全文中间批量插入空白行\r
- 批量去除空行「Ctrl+Alt+L」∶批量去除划选文本或全文中的空白行\r
- 上方插入空行「未设置」∶在当前文本行的上行插入空白行\r
- 下方插入空行「未设置」∶在当前文本行的下行插入空白行\r
- 末尾追加空格「未设置」∶在每行文本的末尾追加两个空格\r
- 去除末尾空格「未设置」∶批量去除每个文本行末尾的空格字符\r
- 添加中英间隔「未设置」：在正文的汉字与字母之间批量添加空格，如 china 中国。\r
- 去除所有空格「未设置」：去除正文中所有的全、半角空格\r
\r
\r
## 📣 安装方法\r
【增强编辑】插件短期内不会上架社区商店\r
\r
### ☑️ 手动安装：\r
手动下载最新的压缩包，然后将其中文件(main.js, manifest.json) 解压到 **库目录/.obsidian/plugins/ZH增强编辑** 文件夹即可.\r
\r
### ☑️ BRAT 插件安装：\r
- 安装 BRAT 插件： [点此安装](https://github.com/TfTHacker/obsidian42-brat)\r
- 在 BART 插件设置面板添加： obsidian-canzi/Enhanced-editing\r
\r
`},{group:"blog",slug:"blog/hysteria2",frontmatter:{title:"Hysteria2 食用指南",meta_title:" Hysteria 是一个强大、快速、抗审查的代理工具。",description:"this is meta description",date:"2024-04-10T00:00:00.000Z",image:"/images/hysteria.png",categories:["Technology"],author:"Rainbow",tags:["Hysteria2"],draft:!1},content:`## Hysteria2简介

> Hysteria 是一个强大、快速、抗审查的代理工具。

[hysteria](https://v2.hysteria.network/zh/)

基于魔改的 [QUIC ](https://zh.wikipedia.org/zh-cn/QUIC)协议，Hysteria 即使在最不稳定和容易丢包的网络环境中也能提供无与伦比的性能。


目前用过的最好用的一个代理工具，像它的名字一样，很疯，也很强。

## 服务端安装

首先进入*外网服务器*。

### 安装服务

推荐使用官方提供的脚本：

\`\`\`shell
# 切换到 root, 如果本就是root, 就省略
sudo -i  
# 一键安装 Hysteria2  
bash <(curl -fsSL https://get.hy2.sh/)
\`\`\`

大概输出一条成功提示，则安装成功：

\`\`\`text
Congratulation! Hysteria 2 has been successfully installed on your server.
\`\`\`

并提示我们下一步要：

1. 修改服务端配置文件 /etc/hysteria/config.yaml
2. 启动 hysteria systemctl start hysteria-server.service
3. 设置开机自启 systemctl enable hysteria-server.service

### 设置开机自启

\`\`\`shell
systemctl enable hysteria-server.service
\`\`\`

### 生成自签名证书

> 官方安装文档里需要域名，但实际上自签名证书即可。

参考：[augustdoit博客](https://augustdoit.men/)

\`\`\`
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

/etc/hysteria/config.yaml  如果找不到，find指令；

\`\`\`yaml
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
> Hysteria 抵抗审查的关键之一就是它能伪装成标准的 HTTP/3 流量。这意味着数据包不仅对中间设备（middleboxes）看起来像是 HTTP/3，服务器还会像普通网站服务器一样真的响应 HTTP 请求。然而，这意味着你的服务器必须实际提供一些内容，以便看起来是真实的。

伪装成了bing代理；但是访问不了本可以访问的bing chat AI ，不知道是不是这个原因, 没有再尝试.

### 启动Hysteria2服务

\`\`\`
systemctl start hysteria-server.service
\`\`\`

*查看状态*
\`\`\`
# 查看状态及日志  
systemctl status hysteria-server.service -l  
# 停止Hysteria2  
systemctl stop hysteria-server.service  
# 设置开机自启  
systemctl enable hysteria-server.service  
# 重启  
systemctl restart hysteria-server.service
\`\`\`

至此已完成 😄

## 客户端安装

很多客户端都支持hysteria代理，安装常用的v2rayN 即可；

[Release 6.42 · 2dust/v2rayN (github.com)](https://github.com/2dust/v2rayN/releases/tag/6.42)

安装↓

zz_v2rayN-With-Core-SelfContained.7z

安装后添加 Hysteria2 服务器
![](/images/v2ray.png)
`},{group:"blog",slug:"blog/笔记管理解决方案",frontmatter:{title:"笔记管理解决方案",meta_title:"Obsidian+Onedrive",description:"this is meta description",date:"2024-04-10T00:00:00.000Z",image:"/images/hysteria.png",categories:["Technology"],author:"Rainbow",tags:["Obsidian"],draft:!1},content:`
## Obisidian

> Obsidian is the private and flexible writing app that adapts to the way you think.

Obsidian 相较于各种XX笔记之类的笔记管理软件，它的主要功能是markdown文件夹管理器。笔记文件（.md）保存在本地，软件 = md文件编辑器+ 笔记体系框架 + 插件框架。（看着文件放在本地，很是安心呢）

<font color=#F36208>本地储存文件</font>的安全性和便捷性无需多言。并且可以自由将笔记发布到博客、生成pdf、甚至做各种统计分析。


## 同步

微软<font color=#F36208>Onedrive</font>

`}],w=a=>a.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/[-\s]+/g," ").replace(/^[a-z]/,function(o){return o.toUpperCase()}),C=a=>w(a).split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1)).join(" "),b=a=>{const h=x.parse(a).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"");return k(h)},k=a=>{let o={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return a.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,h=>o[h])},L=({searchResult:a,searchString:o})=>{const h=(i=>i.reduce((t,n)=>{const s=t.findIndex(p=>p.group===n.group);return s===-1?t.push({group:n.group,groupItems:[{frontmatter:{...n.frontmatter},slug:n.slug,content:n.content}]}):t[s].groupItems.push({frontmatter:{...n.frontmatter},slug:n.slug,content:n.content}),t},[]))(a),g=(i,r)=>i.split(new RegExp(`(${r})`,"gi")).map((n,s)=>n.toLowerCase()===r.toLowerCase()?e.jsx("mark",{children:n},s):n),m=(i,r)=>i?.split(new RegExp(`(${r})`,"gi"))?.map((n,s)=>n.toLowerCase()===r.toLowerCase()?e.jsx("span",{className:"underline",children:n},s):n),y=(i,r)=>{const t=b(i),n=t.toLowerCase().indexOf(r.toLowerCase());let s=n;for(;s>0&&t[s-1]!==" ";)s--;const p=t.substring(s,r.length+n),l=t.substring(r.length+n,r.length+n+80);return e.jsxs(e.Fragment,{children:[g(p,r),l]})};return e.jsx("div",{className:"search-wrapper-body",children:o?e.jsx("div",{className:"search-result",children:h.length>0?h.map(i=>e.jsxs("div",{className:"search-result-group",children:[e.jsx("p",{className:"search-result-group-title",children:C(i.group)}),i.groupItems.map(r=>e.jsxs("div",{id:"searchItem",className:"search-result-item",children:[r.frontmatter.image&&e.jsx("div",{className:"search-result-item-image",children:e.jsx("img",{src:r.frontmatter.image,alt:r.frontmatter.title})}),e.jsxs("div",{className:"search-result-item-body",children:[e.jsx("a",{href:`/${r.slug}`,className:"search-result-item-title search-result-item-link",children:m(r.frontmatter.title,o)}),r.frontmatter.description&&e.jsx("p",{className:"search-result-item-description",children:m(r.frontmatter.description,o)}),r.content&&e.jsx("p",{className:"search-result-item-content",children:y(r.content,o)}),e.jsxs("div",{className:"search-result-item-taxonomies",children:[r.frontmatter.categories&&e.jsxs("div",{className:"mr-2",children:[e.jsx("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z"})}),r.frontmatter.categories.map((t,n)=>e.jsxs("span",{children:[m(t,o),r.frontmatter.categories&&n!==r.frontmatter.categories.length-1&&e.jsx(e.Fragment,{children:", "})]},t))]}),r.frontmatter.tags&&e.jsxs("div",{className:"mr-2",children:[e.jsxs("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"}),e.jsx("path",{d:"M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"})]}),r.frontmatter.tags.map((t,n)=>e.jsxs("span",{children:[m(t,o),r.frontmatter.tags&&n!==r.frontmatter.tags.length-1&&e.jsx(e.Fragment,{children:", "})]},t))]})]})]})]},r.slug))]},i.group)):e.jsxs("div",{className:"search-result-empty",children:[e.jsxs("svg",{className:"mx-auto",width:"42",height:"42",viewBox:"0 0 47 47",fill:"none",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.10368 33.9625C9.90104 36.2184 13.2988 37.6547 16.9158 38.0692C21.6958 38.617 26.5063 37.3401 30.3853 34.4939C30.4731 34.6109 30.5668 34.7221 30.6721 34.8304L41.9815 46.1397C42.5323 46.6909 43.2795 47.0007 44.0587 47.001C44.838 47.0013 45.5854 46.692 46.1366 46.1412C46.6878 45.5904 46.9976 44.8432 46.9979 44.064C46.9981 43.2847 46.6888 42.5373 46.138 41.9861L34.8287 30.6767C34.7236 30.5704 34.6107 30.4752 34.4909 30.3859C37.3352 26.5046 38.6092 21.6924 38.0579 16.912C37.6355 13.2498 36.1657 9.81322 33.8586 6.9977L31.7805 9.09214C34.0157 11.9274 35.2487 15.4472 35.2487 19.0942C35.2487 21.2158 34.8308 23.3167 34.0189 25.2769C33.207 27.2371 32.0169 29.0181 30.5167 30.5184C29.0164 32.0186 27.2354 33.2087 25.2752 34.0206C23.315 34.8325 21.2141 35.2504 19.0925 35.2504C16.9708 35.2504 14.8699 34.8325 12.9098 34.0206C11.5762 33.4682 10.3256 32.7409 9.18992 31.8599L7.10368 33.9625ZM28.9344 6.28152C26.1272 4.12516 22.671 2.93792 19.0925 2.93792C14.8076 2.93792 10.6982 4.64009 7.66829 7.66997C4.6384 10.6999 2.93623 14.8093 2.93623 19.0942C2.93623 21.2158 3.35413 23.3167 4.16605 25.2769C4.72475 26.6257 5.4625 27.8897 6.35716 29.0358L4.2702 31.1391C1.35261 27.548 -0.165546 23.0135 0.00974294 18.3781C0.19158 13.5695 2.18233 9.00695 5.58371 5.60313C8.98509 2.19932 13.5463 0.205307 18.3547 0.0200301C22.9447 -0.156832 27.4369 1.32691 31.0132 4.18636L28.9344 6.28152Z",fill:"currentColor"}),e.jsx("path",{d:"M3.13672 39.1367L38.3537 3.64355",stroke:"black",strokeWidth:"3",strokeLinecap:"round"})]}),e.jsxs("p",{className:"mt-4",children:['No results for "',e.jsx("strong",{children:o}),'"']})]})}):e.jsx("div",{className:"py-8 text-center",children:"Type something to search..."})})},H=()=>{const[a,o]=v.useState(""),d=r=>{o(r.currentTarget.value.replace("\\","").toLowerCase())},h=r=>{const t=new RegExp(`${a}`,"gi");return a===""?[]:r.filter(s=>{const p=s.frontmatter.title.toLowerCase().match(t),l=s.frontmatter.description?.toLowerCase().match(t),f=s.frontmatter.categories?.join(" ").toLowerCase().match(t),c=s.frontmatter.tags?.join(" ").toLowerCase().match(t),u=s.content.toLowerCase().match(t);if(p||u||l||f||c)return s})},g=performance.now(),m=h(j),i=((performance.now()-g)/1e3).toFixed(3);return v.useEffect(()=>{const r=document.getElementById("searchModal"),t=document.getElementById("searchInput"),n=document.getElementById("searchModalOverlay"),s=document.querySelectorAll("#searchItem");document.querySelectorAll("[data-search-trigger]").forEach(c=>{c.addEventListener("click",function(){document.getElementById("searchModal").classList.add("show"),t.focus()})}),n.addEventListener("click",function(){r.classList.remove("show")});let l=-1;const f=()=>{s.forEach((c,u)=>{u===l?c.classList.add("search-result-item-active"):c.classList.remove("search-result-item-active")}),s[l]?.scrollIntoView({behavior:"smooth",block:"nearest"})};document.addEventListener("keydown",function(c){if((c.metaKey||c.ctrlKey)&&c.key==="k"&&(r.classList.add("show"),t.focus(),f()),(c.key==="ArrowUp"||c.key==="ArrowDown")&&c.preventDefault(),c.key==="Escape"&&r.classList.remove("show"),c.key==="ArrowUp"&&l>0)l--;else if(c.key==="ArrowDown"&&l<s.length-1)l++;else if(c.key==="Enter"){const u=document.querySelector(".search-result-item-active a");u&&u?.click()}f()})},[a]),e.jsxs("div",{id:"searchModal",className:"search-modal",children:[e.jsx("div",{id:"searchModalOverlay",className:"search-modal-overlay"}),e.jsxs("div",{className:"search-wrapper",children:[e.jsxs("div",{className:"search-wrapper-header",children:[e.jsxs("label",{htmlFor:"searchInput",className:"absolute left-7 top-[calc(50%-7px)]",children:[e.jsx("span",{className:"sr-only",children:"search icon"}),a?e.jsxs("svg",{onClick:()=>o(""),viewBox:"0 0 512 512",height:"18",width:"18",className:"hover:text-red-500 cursor-pointer -mt-0.5",children:[e.jsx("title",{children:"close icon"}),e.jsx("path",{fill:"currentcolor",d:"M256 512A256 256 0 10256 0a256 256 0 100 512zM175 175c9.4-9.4 24.6-9.4 33.9.0l47 47 47-47c9.4-9.4 24.6-9.4 33.9.0s9.4 24.6.0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6.0 33.9s-24.6 9.4-33.9.0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9.0s-9.4-24.6.0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6.0-33.9z"})]}):e.jsxs("svg",{viewBox:"0 0 512 512",height:"18",width:"18",className:"-mt-0.5",children:[e.jsx("title",{children:"search icon"}),e.jsx("path",{fill:"currentcolor",d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z"})]})]}),e.jsx("input",{id:"searchInput",placeholder:"Search...",className:"search-wrapper-header-input",type:"input",name:"search",value:a,onChange:d,autoComplete:"off"})]}),e.jsx(L,{searchResult:m,searchString:a}),e.jsxs("div",{className:"search-wrapper-footer",children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{children:e.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 011.506.0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z"})})}),e.jsx("kbd",{children:e.jsx("svg",{width:"14",height:"14",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 001.506.0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z"})})}),"to navigate"]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx("kbd",{children:e.jsx("svg",{width:"12",height:"12",fill:"currentcolor",viewBox:"0 0 16 16",children:e.jsx("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5.0 01.5.5v4.8a2.5 2.5.0 01-2.5 2.5H2.707l3.347 3.346a.5.5.0 01-.708.708l-4.2-4.2a.5.5.0 010-.708l4-4a.5.5.0 11.708.708L2.707 8.3H12.5A1.5 1.5.0 0014 6.8V2a.5.5.0 01.5-.5z"})})}),"to select"]}),a&&e.jsxs("span",{children:[e.jsxs("strong",{children:[m.length," "]})," results - in"," ",e.jsxs("strong",{children:[i," "]})," seconds"]}),e.jsxs("span",{children:[e.jsx("kbd",{children:"ESC"})," to close"]})]})]})]})};export{H as default};
