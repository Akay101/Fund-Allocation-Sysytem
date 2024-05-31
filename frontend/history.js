document.addEventListener('DOMContentLoaded', async () => {
    const historyList = document.getElementById('history-list');

    // Mock function to simulate fetching transaction history from a blockchain API
    async function fetchTransactionHistory() {
        return [
            {
                txId: '0x1234567890abcdef',
                timestamp: '2024-05-24 10:30:00',
                amount: '0.5 ETH',
                addressTo: '0xabcd1234abcd1234',
                message: 'For project funding',
                
            },
            {
                txId: '0xfedcba0987654321',
                timestamp: '2024-05-23 09:15:00',
                amount: '1.0 ETH',
                addressTo: '0x1234abcd1234abcd',
                message: 'Grant',
            }
        ];
    }

    const transactions = await fetchTransactionHistory();

    if (transactions.length === 0) {
        historyList.innerHTML = '<p>No transaction history found.</p>';
    } else {
        transactions.forEach(transaction => {
            const transactionElement = document.createElement('div');
            transactionElement.className = 'transaction';
            transactionElement.innerHTML = `
                <p><strong>Transaction ID:</strong> ${transaction.txId}</p>
                <p><strong>Timestamp:</strong> ${transaction.timestamp}</p>
                <p><strong>Amount:</strong> ${transaction.amount}</p>
                <p><strong>Address To:</strong> ${transaction.addressTo}</p>
                <p><strong>Message:</strong> ${transaction.message}</p>
            `;
            historyList.appendChild(transactionElement);
        });
    }
});
