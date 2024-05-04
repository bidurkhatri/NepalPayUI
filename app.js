// Specify the contract address and ABI
const contractAddress = "0x5B305E9517844078362f0e7b8F311590d4BEda8C";
const abi = [
    // Add your contract ABI here
    {
        "inputs": [],
        "name": "depositTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Initialize web3 using MetaMask or another provider
const web3 = new Web3(window.ethereum);

// Set the contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

async function sendTokens() {
    const recipientAddress = document.getElementById("recipientAddress").value;
    const amount = document.getElementById("amount").value;

    // Send tokens to the recipient address
    await contract.methods.sendTokens(recipientAddress, amount).send({ from: window.ethereum.selectedAddress });
    alert("Tokens sent successfully!");
}
