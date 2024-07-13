document.getElementById('inputText').addEventListener('input', convertFormat);

function convertFormat() {
    const inputText = document.getElementById('inputText').value.trim();
    const lines = inputText.split('\n');
    let output = 'proxies:\n';
    
    lines.forEach(line => {
        const regex = /^hysteria2:\/\/([^@]+)@([^:]+):(\d+)\/\?sni=([^&]+)&insecure=\d+#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const [_, password, server, port, sni, name] = match;
            const proxy = `  - {"name":"${name}","type":"hysteria2","server":"${server}","port":${port},"password":"${password}","sni":"${sni}","skip-cert-verify":true}\n`;
            output += proxy;
        }
    });

   output += `proxy-groups:
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - DIRECT\n`;
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
    output += `  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:\n`;
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
   
    output += `  - name: 🔥 ChatGPT
    type: select
    proxies:
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
    output += `  - name: Ⓜ️ 微软服务
    type: select
    proxies:
      - 🎯 全球直连
      - 🚀 节点选择\n`;
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
    output += `  - name: 🍎 苹果服务
    type: select
    proxies:
      - 🎯 全球直连\n`;
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
    output += `  - name: 🎯 全球直连
    type: select
    proxies:
      - DIRECT
      - 🚀 节点选择
      - ♻️ 自动选择
  - name: 🐟 漏网之鱼
    type: select
    proxies:
      - 🚀 节点选择
      - 🎯 全球直连
      - ♻️ 自动选择\n`;
    lines.forEach(line => {
        const regex = /#(.+)$/;
        const match = line.match(regex);
        if (match) {
            const name = match[1];
            output += `      - ${name}\n`;
        }
    });
    document.getElementById('outputText').value = output;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}
