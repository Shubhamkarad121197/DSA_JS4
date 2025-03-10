

// Given an amount and the denominations of coins available, determine the minimum number of coins (under the assumption that you have an infinite supply of coins of each denomination) that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Greedy Algorithm
let coins = [5, 2, 10, 1];
let amount = 39;

function minCoin(coins,amount){
   let n = coins.length;
   coins.sort((a,b)=>b-a);
    let count = 0;
    for(let i=0;i<n;i++){
        if(coins[i]<=amount){
            let countCoin=Math.floor(amount/coins[i]);
            count+=countCoin;
        }
        if(amount===0){
            break;
        }
        amount=amount%coins[i];
    }
    return count;
}
console.log(minCoin(coins,amount));

// Time Complexity: O(nlogn) where n is the number of coins
// Space Complexity: O(1) as we are using constant space