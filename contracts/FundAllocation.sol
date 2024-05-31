// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundAllocation {
    address public owner;
    mapping(address => uint256) public balances;

    event FundsAllocated(address indexed recipient, uint256 amount);
    event FundsWithdrawn(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function allocateFunds(address recipient, uint256 amount) public onlyOwner {
        require(recipient != address(0), "Invalid recipient address");
        balances[recipient] += amount;
        emit FundsAllocated(recipient, amount);
    }

    function withdrawFunds(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit FundsWithdrawn(msg.sender, amount);
    }

    receive() external payable {}
}
