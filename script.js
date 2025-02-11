function calculateDeposit() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    const time = parseFloat(document.getElementById('deposit-time').value);
    const rate = parseFloat(document.getElementById('deposit-rate').value);

    if (isNaN(amount) || isNaN(time) || isNaN(rate)) {
        document.getElementById('deposit-result').innerText = "请填写所有字段 😅";
        return;
    }

    const interest = amount * (rate / 100) * time;
    const total = amount + interest;

    document.getElementById('deposit-result').innerText = `存款收益: ${interest.toFixed(2)} 元，总金额: ${total.toFixed(2)} 元 🤑`;
}

function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const time = parseFloat(document.getElementById('loan-time').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);

    if (isNaN(amount) || isNaN(time) || isNaN(rate)) {
        document.getElementById('loan-result').innerText = "请填写所有字段 😅";
        return;
    }

    const interest = amount * (rate / 100) * time;
    const total = amount + interest;

    document.getElementById('loan-result').innerText = `借贷成本: ${interest.toFixed(2)} 元，总还款: ${total.toFixed(2)} 元 😢`;
}