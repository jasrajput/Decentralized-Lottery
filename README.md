# Decentralized Lottery on Polygon

## Overview
This decentralized lottery project is built on the Polygon blockchain, using Solidity for its main smart contract functionality. The platform enables users to deposit and withdraw USDT, participate in lottery cycles, and view detailed deposit information.

## Features
- **Blockchain:** Polygon
- **Frontend:** HTML
- **Backend:** PHP/Solidity (primary logic in Solidity)
- **Cycle Percentages:** Lottery winnings are split based on percentages for each cycle: `[18, 18, 18, 17, 17, 17, 16, 16, 16, 15, 15, 15, 14, 14, 14, 13, 13, 13, 12, 12, 12, 11, 11, 11, 10, 10, 10, 9, 9, 9, 8, 8, 8, 7, 7, 7, 6, 6, 6, 5]`
- **Minimum Deposit:** 50 USDT

## Functionalities
- **Deposit**: Users can make a deposit in USDT to join the lottery.
- **Withdraw**: Allows users to withdraw their winnings or remaining funds.
- **View Deposit Details**: Users can view their own deposit history.
- **Depositors List**: Displays a list of all participants in the lottery cycles.

## Technical Stack
- **Frontend:** HTML
- **Backend:** PHP (for non-blockchain interactions) and Solidity (main smart contract logic)

## Installation

**Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Decentralized-Lottery.git
   ```

## Usage
Frontend: Open the index.html file in your preferred browser.
1. Frontend: Open the index.html file in your preferred browser.
2. Backend:
    - **Compile and deploy**: the Solidity contracts on the Polygon blockchain.
    - **Use PHP scripts**: for server-side functions and data retrieval.

## Lottery Mechanics
Cycle Percentages: Winning distribution is managed according to a predefined cycle percentage list.
Deposits in USDT: Minimum deposit is 50 USDT, with deposit and withdrawal options managed via the smart contract.

