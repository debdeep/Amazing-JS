function maxStockProfit(prices) {
    let minPrice = prices[0] || Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update min price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate profit if sold today
        let profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

//Outputs:
console.log(maxStockProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxStockProfit([7, 6, 4, 3, 1]));   // 0 (no profit possible)
console.log(maxStockProfit([2, 4, 1]));         // 2 (buy at 2, sell at 4)
console.log(maxStockProfit([]));         // 0 (no profit calculated)
