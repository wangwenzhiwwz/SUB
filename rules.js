// rules.js
window.clashRules = `
  # 本地/局域网地址
  - DOMAIN-SUFFIX,acl4.ssr,🎯 全球直连
  - DOMAIN-SUFFIX,ip6-localhost,🎯 全球直连
  - DOMAIN-SUFFIX,ip6-loopback,🎯 全球直连
  - DOMAIN-SUFFIX,lan,🎯 全球直连
  - DOMAIN-SUFFIX,local,🎯 全球直连
  - DOMAIN-SUFFIX,localhost,🎯 全球直连
  - IP-CIDR,10.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,100.64.0.0/10,🎯 全球直连,no-resolve
  - IP-CIDR,127.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,172.16.0.0/12,🎯 全球直连,no-resolve
  - IP-CIDR,192.168.0.0/16,🎯 全球直连,no-resolve
  - IP-CIDR,198.18.0.0/16,🎯 全球直连,no-resolve
  - IP-CIDR,224.0.0.0/4,🎯 全球直连,no-resolve
  - IP-CIDR6,::1/128,🎯 全球直连,no-resolve
  - IP-CIDR6,fc00::/7,🎯 全球直连,no-resolve
  - IP-CIDR6,fe80::/10,🎯 全球直连,no-resolve
  - IP-CIDR6,fd00::/8,🎯 全球直连,no-resolve
  - DOMAIN,router.asus.com,🎯 全球直连
  - DOMAIN-SUFFIX,hiwifi.com,🎯 全球直连
  - DOMAIN-SUFFIX,miwifi.com,🎯 全球直连
  - DOMAIN-SUFFIX,msftncsi.com,🎯 全球直连
  - DOMAIN-SUFFIX,msftconnecttest.com,🎯 全球直连

  # 网站屏蔽
  - DOMAIN-KEYWORD,adobe,🛑 全球拦截

  # YouTube
  - DOMAIN-KEYWORD,googlevideo,📺 YouTube
  - DOMAIN-KEYWORD,youtube,📺 YouTube

  # OpenAI
  - DOMAIN-KEYWORD,auth0,🧸 OpenAI
  - DOMAIN-KEYWORD,openai,🧸 OpenAI
  - DOMAIN-KEYWORD,chatgpt,🧸 OpenAI
  - DOMAIN-KEYWORD,oaistatic,🧸 OpenAI
  - DOMAIN-KEYWORD,revenuecat,🧸 OpenAI
  - DOMAIN-KEYWORD,gemini,🧸 OpenAI
  - DOMAIN-KEYWORD,googleapis,🧸 OpenAI
  - DOMAIN-SUFFIX,ai.com,🧸 OpenAI

  # Apple
  - DOMAIN-KEYWORD,apple,🍎 苹果服务
  - DOMAIN-KEYWORD,icloud,🍎 苹果服务
  - DOMAIN-SUFFIX,aaplimg.com,🍎 苹果服务
  - DOMAIN-SUFFIX,akadns.net,🍎 苹果服务
  - DOMAIN-SUFFIX,appstore.com,🍎 苹果服务
  - DOMAIN-SUFFIX,crashlytics.com,🍎 苹果服务
  - DOMAIN-SUFFIX,me.com,🍎 苹果服务
  - DOMAIN-SUFFIX,mzstatic.com,🍎 苹果服务
  
  # 代理列表
  - DOMAIN-SUFFIX,eu,🚀 节点选择
  - DOMAIN-SUFFIX,hk,🚀 节点选择
  - DOMAIN-SUFFIX,jp,🚀 节点选择
  - DOMAIN-SUFFIX,kr,🚀 节点选择
  - DOMAIN-SUFFIX,sg,🚀 节点选择
  - DOMAIN-SUFFIX,tw,🚀 节点选择
  - DOMAIN-SUFFIX,uk,🚀 节点选择
  - DOMAIN-SUFFIX,us,🚀 节点选择
  - DOMAIN-KEYWORD,ip,🚀 节点选择
  - DOMAIN-KEYWORD,adguard,🚀 节点选择
  - DOMAIN-KEYWORD,amazon,🚀 节点选择
  - DOMAIN-KEYWORD,appsflyersdk,🚀 节点选择
  - DOMAIN-KEYWORD,artlist,🚀 节点选择
  - DOMAIN-KEYWORD,blogspot,🚀 节点选择
  - DOMAIN-KEYWORD,cloudflare,🚀 节点选择
  - DOMAIN-KEYWORD,discord,🚀 节点选择
  - DOMAIN-KEYWORD,dropbox,🚀 节点选择
  - DOMAIN-KEYWORD,facebook,🚀 节点选择
  - DOMAIN-KEYWORD,fbcdn,🚀 节点选择
  - DOMAIN-KEYWORD,fbsbx,🚀 节点选择
  - DOMAIN-KEYWORD,github,🚀 节点选择
  - DOMAIN-KEYWORD,global,🚀 节点选择
  - DOMAIN-KEYWORD,gmail,🚀 节点选择
  - DOMAIN-KEYWORD,google,🚀 节点选择
  - DOMAIN-KEYWORD,gstatic,🚀 节点选择
  - DOMAIN-KEYWORD,ggpht,🚀 节点选择
  - DOMAIN-KEYWORD,ytimg,🚀 节点选择
  - DOMAIN-KEYWORD,immersivetranslate,🚀 节点选择
  - DOMAIN-KEYWORD,instagram,🚀 节点选择
  - DOMAIN-KEYWORD,jsdelivr,🚀 节点选择
  - DOMAIN-KEYWORD,licdn,🚀 节点选择
  - DOMAIN-KEYWORD,line,🚀 节点选择
  - DOMAIN-KEYWORD,linkedin,🚀 节点选择
  - DOMAIN-KEYWORD,messenger,🚀 节点选择
  - DOMAIN-KEYWORD,microsoft,🚀 节点选择
  - DOMAIN-KEYWORD,notion,🚀 节点选择
  - DOMAIN-KEYWORD,onedrive,🚀 节点选择
  - DOMAIN-KEYWORD,oracle,🚀 节点选择
  - DOMAIN-KEYWORD,parsec,🚀 节点选择
  - DOMAIN-KEYWORD,pinterest,🚀 节点选择
  - DOMAIN-KEYWORD,porn,🚀 节点选择
  - DOMAIN-KEYWORD,protechts,🚀 节点选择
  - DOMAIN-KEYWORD,rapidssl,🚀 节点选择
  - DOMAIN-KEYWORD,reddit,🚀 节点选择
  - DOMAIN-KEYWORD,scamalytics,🚀 节点选择
  - DOMAIN-KEYWORD,sony,🚀 节点选择
  - DOMAIN-KEYWORD,spotify,🚀 节点选择
  - DOMAIN-KEYWORD,telegram,🚀 节点选择
  - DOMAIN-KEYWORD,threads,🚀 节点选择
  - DOMAIN-KEYWORD,tiktok,🚀 节点选择
  - DOMAIN-KEYWORD,twimg,🚀 节点选择
  - DOMAIN-KEYWORD,twitter,🚀 节点选择
  - DOMAIN-KEYWORD,ulefone,🚀 节点选择
  - DOMAIN-KEYWORD,visualstudio,🚀 节点选择
  - DOMAIN-KEYWORD,vscode,🚀 节点选择
  - DOMAIN-KEYWORD,wangwenzhi,🚀 节点选择
  - DOMAIN-KEYWORD,whatsapp,🚀 节点选择
  - DOMAIN-KEYWORD,whimsical,🚀 节点选择
  - DOMAIN-KEYWORD,zoho,🚀 节点选择
  
  - DOMAIN-SUFFIX,android.com,🚀 节点选择
  - DOMAIN-SUFFIX,apkpure.com,🚀 节点选择
  - DOMAIN-SUFFIX,bandwagonhost.com,🚀 节点选择
  - DOMAIN-SUFFIX,behance.net,🚀 节点选择
  - DOMAIN-SUFFIX,bing.com,🚀 节点选择
  - DOMAIN-SUFFIX,blogger.com,🚀 节点选择
  - DOMAIN-SUFFIX,cloudcone.com,🚀 节点选择
  - DOMAIN-SUFFIX,cloudflare.com,🚀 节点选择
  - DOMAIN-SUFFIX,cloudfront.net,🚀 节点选择
  - DOMAIN-SUFFIX,duolingo.com,🚀 节点选择
  - DOMAIN-SUFFIX,gravatar.com,🚀 节点选择
  - DOMAIN-SUFFIX,hulu.com,🚀 节点选择
  - DOMAIN-SUFFIX,linkedin.com,🚀 节点选择
  - DOMAIN-SUFFIX,medium.com,🚀 节点选择
  - DOMAIN-SUFFIX,milanote.com,🚀 节点选择
  - DOMAIN-SUFFIX,notion.so,🚀 节点选择
  - DOMAIN-SUFFIX,reddit.com,🚀 节点选择
  - DOMAIN-SUFFIX,t.co,🚀 节点选择
  - DOMAIN-SUFFIX,t.me,🚀 节点选择
  - DOMAIN-SUFFIX,unsplash.com,🚀 节点选择
  - DOMAIN-SUFFIX,v2ex.com,🚀 节点选择
  - DOMAIN-SUFFIX,vimeo.com,🚀 节点选择
  - DOMAIN-SUFFIX,whimsical.com,🚀 节点选择
  - DOMAIN-SUFFIX,wwz.im,🚀 节点选择
  - DOMAIN-SUFFIX,x.com,🚀 节点选择
  - DOMAIN-SUFFIX,xnxx.com,🚀 节点选择
  - DOMAIN-SUFFIX,xvideos.com,🚀 节点选择

  # 直连列表
  - DOMAIN-SUFFIX,cn,🎯 全球直连
  - DOMAIN-KEYWORD,115,🎯 全球直连
  - DOMAIN-KEYWORD,12306,🎯 全球直连
  - DOMAIN-KEYWORD,1688,🎯 全球直连
  - DOMAIN-KEYWORD,360buy,🎯 全球直连
  - DOMAIN-KEYWORD,ali,🎯 全球直连
  - DOMAIN-KEYWORD,amap,🎯 全球直连
  - DOMAIN-KEYWORD,baidu,🎯 全球直连
  - DOMAIN-KEYWORD,bili,🎯 全球直连
  - DOMAIN-KEYWORD,dingtalk,🎯 全球直连
  - DOMAIN-KEYWORD,teambition,🎯 全球直连
  - DOMAIN-KEYWORD,ximalaya,🎯 全球直连
  - DOMAIN-KEYWORD,xiami,🎯 全球直连
  - DOMAIN-KEYWORD,xiaomi,🎯 全球直连
  - DOMAIN-KEYWORD,mi,🎯 全球直连
  - DOMAIN-KEYWORD,sina,🎯 全球直连
  - DOMAIN-KEYWORD,weibo,🎯 全球直连
  - DOMAIN-KEYWORD,weixin,🎯 全球直连
  - DOMAIN-KEYWORD,wechat,🎯 全球直连
  - DOMAIN-KEYWORD,douyin,🎯 全球直连
  - DOMAIN-KEYWORD,douyu,🎯 全球直连
  - DOMAIN-KEYWORD,qq,🎯 全球直连
  - DOMAIN-KEYWORD,qcloud,🎯 全球直连
  - DOMAIN-KEYWORD,jd,🎯 全球直连
  - DOMAIN-KEYWORD,taobao,🎯 全球直连
  - DOMAIN-KEYWORD,youku,🎯 全球直连
  - DOMAIN-KEYWORD,iqiyi,🎯 全球直连
  - DOMAIN-KEYWORD,playstation,🎯 全球直连
  - DOMAIN-KEYWORD,xiaohongshu,🎯 全球直连
  - DOMAIN-KEYWORD,xhscdn,🎯 全球直连
  - DOMAIN-KEYWORD,sony,🎯 全球直连
  - DOMAIN-SUFFIX,weather.com,🎯 全球直连
  - GEOIP,CN,🎯 全球直连
  - MATCH,🐟 漏网之鱼

`;





