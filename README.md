# 🌐 Unicode 字符输入工具

基于Web的交互式Unicode字符输入工具，支持通过十六进制编码查询和显示Unicode字符✨

## 🚀 功能特性
- [x] 🔢 十六进制数字键盘输入（0~9, A~F）
- [x] 🖥️ 实时字符显示（支持4~6位编码）
- [x] ✨ 自动输入补零和格式校验
- [ ] ⌨️ 键盘快捷键支持（Backspace删除）
- [x] 🖼️ 动态背景壁纸（来自必应每日壁纸）
- [x] 📱 响应式布局适配不同设备
- [x] 🔮 毛玻璃效果界面设计
- [x] ⚠️ 输入错误提示机制

## 📖 使用说明
1. 双击打开`index.html`文件
2. 通过点击数字键盘或键盘输入十六进制值
3. 输入4~6位有效编码（例：`0041` → 🅰️）
4. 使用⌫按钮或键盘Backspace删除输入
5. 点击"清空"按钮重置输入和显示

## 🔧 技术实现
### 🛠️ 核心功能
- [x] ✅ 输入验证：`script.js`中正则表达式过滤非16进制字符
- [x] 🔄 字符转换：`String.fromCodePoint()`实现Unicode转换
- [x] ⏱️ 自动补零：`.padStart()`方法保证最少4位编码
- [x] 🛡️ 错误处理：try/catch块捕获无效编码

### 🎨 界面设计
- [x] 🖌️ CSS Flexbox布局
- [x] 🌟 背景图片动态加载动画（jumpIn/float）
- [x] 🌈 渐变色标题文字效果
- [x] 🔍 毛玻璃效果（backdrop-filter: blur()）
- [x] 📲 响应式断点（@media 480px）

## 🚦 开发指南
### 📦 依赖项
🌍 必应壁纸API：`https://bing.img.run/rand.php`
🌐 现代浏览器支持ES6语法

### 💻 本地运行

双击`index.html`打开或者执行以下命令：

```bash
# 启动本地服务器（Python示例）
python -m http.server 8000
# 访问 http://localhost:8000
```

```bash
# 如果未安装 Python
start index.html
```


## 🙏 鸣谢
🌟 使用 [DeepSeek](https://www.deepseek.com) 智能助手进行开发咨询
🖼️ 背景图片服务由 [必应壁纸API](https://bing.img.run) 提供
📚 UI设计参考MDN Web文档标准
🎬 动画效果使用cubic-bezier时间函数优化

## 📜 开源协议
[GNU General Public License v3.0](LICENSE) 📄