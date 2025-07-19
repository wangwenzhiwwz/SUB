

# SUB.WWZ.iM - 代理链接转 Clash.Meta 配置工具

https://sub.wwz.im/

## 简介

SUB.WWZ.iM 是一个简单易用的在线工具，旨在帮助用户将各种常见的代理链接（如 VMess, VLESS, Hysteria2, Trojan, HTTP, Socks5, SS）快速转换为兼容 Clash.Meta 客户端的 YAML 配置文件。您只需粘贴您的代理链接，即可自动生成配置，并支持复制或下载。

## 支持的代理协议

本工具支持以下代理协议的链接转换：

* **VMess** (`vmess://`)
* **VLESS** (`vless://`)
* **Hysteria2** (`hysteria2://`)
* **Trojan** (`trojan://`)
* **HTTP** (`http://`)
* **Socks5** (`socks5://`)
* **Shadowsocks (SS)** (`ss://`)

## 如何使用

1.  **打开工具**: 访问 SUB.WWZ.iM 的网页。
2.  **粘贴链接**: 在 "Input Node Links" (输入节点链接) 文本区域中，粘贴您的代理链接。每行一个链接。
3.  **自动生成**: 当您粘贴链接后，"Clash.Meta Configuration" (Clash.Meta 配置) 文本区域将自动显示生成的 Clash.Meta YAML 配置内容。
4.  **复制或下载**:
    * 点击 "Copy" (复制) 按钮将配置内容复制到剪贴板。
    * 点击 "Download" (下载) 按钮将配置内容保存为 `clash-meta-config.yaml` 文件。

## 生成的 Clash.Meta 配置特点

* **自动节点命名**: 工具会尝试根据链接信息生成唯一的节点名称。
* **基础配置**: 包含 `mixed-port`, `allow-lan`, `log-level`, `external-controller` 等基础设置。
* **DNS 配置**: 预设了 DNS 配置，包括 `default-nameserver`、`enhanced-mode` (fake-ip) 和 `fake-ip-filter`。
* **代理组**: 自动生成以下代理组：
    * `🚀 节点选择` (select 类型，包含所有生成的节点)
    * `♻️ 自动选择` (url-test 类型，用于自动选择最佳节点)
    * `🧸 OpenAI`, `🎵 TikTok`, `📺 YouTube`, `Ⓜ️ 微软服务`, `🍎 苹果服务` (均为 select 类型，方便针对特定服务选择节点)
    * `🎯 全球直连` (select 类型，用于直连流量)
    * `🐟 漏网之鱼` (select 类型，用于未匹配规则的流量)
* **规则**: 预设了一些常见的代理规则，包括：
    * `DOMAIN-SUFFIX,acl4.ssr,🎯 全球直连`
    * OpenAI、TikTok、YouTube、Microsoft Services、Apple 服务的相关规则。
    * `DOMAIN-SUFFIX,wwz.im,🚀 节点选择` (特定域名走代理)
    * 中国国内域名和 GEOIP (CN) 直连规则。
    * `MATCH,🐟 漏网之鱼` (兜底规则)

## 注意事项

* 本工具生成的配置适用于 **Clash.Meta** 内核的客户端。
* 部分协议的链接可能存在多种格式变体，本工具会尽力解析，但不保证完美兼容所有非标准格式。
* 生成的节点名称会进行去重处理，如果存在同名节点，会添加序号。

## 版权信息

Designed by WWZ.iM © 2025

## 相关链接

* [Clash](https://github.com/wangwenzhiwwz/Clash/edit/main/index.html)
* [Clash6](https://github.com/wangwenzhiwwz/Clash6/edit/main/index.html)
* [Gotron](https://github.com/wangwenzhiwwz/UlefoneClash/edit/main/ulf83893509/index.html)
* [Ulefone](https://github.com/wangwenzhiwwz/Ulefone_P/edit/main/index.html)
* [Video](https://github.com/wangwenzhiwwz/UlefoneClash/edit/main/Ulefone/index.html)



