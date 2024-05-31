document.getElementById('connectWalletBtn').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            document.getElementById('wallet-address').textContent = account;
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    } else {
        alert('MetaMask is not installed');
    }
});

document.getElementById('transactionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const addressTo = document.getElementById('addressTo').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toLocaleString();

    const transaction = { addressTo, amount, message, timestamp };
    
    // Save transaction to localStorage
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Optionally, redirect to transactions page or update UI dynamically
    alert('Transaction submitted successfully!');
    window.location.href = 'transactions.html';
});
