// Function to handle connecting wallet
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected account:', account);
            alert('Wallet connected: ' + account);
            document.getElementById('wallet-address').innerText = account;
        } catch (error) {
            console.error('User rejected the request:', error);
            alert('Failed to connect wallet');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
}
document.querySelector('nav a[href="#objectives-section"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#objectives-section').scrollIntoView({
        behavior: 'smooth'
    });
});


// Attach form submission event listener
document.getElementById('transaction-form').addEventListener('submit', handleFormSubmit);
