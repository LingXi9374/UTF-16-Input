document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const buttons = document.querySelectorAll('button[data-value]');
    const backspaceBtn = document.getElementById('backspace');
    const clearBtn = document.getElementById('clear');

    // 处理数字/字母按钮点击
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (input.value.length < 6) {
                // 过滤非16进制字符并自动转大写
                const cleanValue = input.value.replace(/[^0-9A-F]/gi, '') + button.dataset.value.toUpperCase();
                input.value = cleanValue.slice(0, 6); // 限制最大6位
                updateOutput();
            }
        });
    });

    // 退格功能
    backspaceBtn.addEventListener('click', () => {
        input.value = input.value.slice(0, -1);
        updateOutput();
    });

    // 清空功能
    clearBtn.addEventListener('click', () => {
        input.value = '';
        output.textContent = '';
    });

    // 更新输出显示
    function updateOutput() {
        try {
            let codeStr = input.value.replace(/U\+/i, ''); // 移除U+前缀
            
            if (codeStr.length > 0 && codeStr.length <= 6) {
                // 自动补零处理：至少补到4位，最多保持6位
                codeStr = codeStr.padStart(Math.max(codeStr.length, 4), '0').slice(0,6);
                const codePoint = parseInt(codeStr, 16);
                
                if (!isNaN(codePoint)) {
                    output.textContent = String.fromCodePoint(codePoint);
                } else {
                    output.textContent = '?';
                }
            } else {
                output.textContent = '';
            }
        } catch (e) {
            output.textContent = '?';
        }
    }

    // 键盘事件支持
    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        if (/^[0-9A-F]$/.test(key)) {
            if (input.value.length < 4) {
                input.value += key;
                updateOutput();
            }
            e.preventDefault();
        } else if (key === 'Backspace') {
            input.value = input.value.slice(0, -1);
            updateOutput();
            e.preventDefault();
        }
    });
});