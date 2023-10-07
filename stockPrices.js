
// This challenge, you’ll write a function, 
// called best, that returns the maximum 
// profit possible for buying-and-selling 
// a stock.

// The best function will be given an array 
// of stock prices in the order they happened 
// throughout the day.

// It should return the maximum possible 
// profit on the stock for that day.

function best(prices) {
    const firstPrice = prices[0];
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    let maxProfit = max - min;

    if (prices.length < 2) {
        maxProfit = 0;
        console.log(`$${maxProfit}`);
        return 0;
    } else if (firstPrice === max) {
        maxProfit = 0;
        console.log(`$${maxProfit}`);
        return 0;
    } else {
        maxProfit = max - min;
        console.log(`$${maxProfit} - buy at $${min}, sell at $${max}`);
        return max - min;
    }

}

best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 9 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 7 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100

best([5, 4 , 3, 2, 1])
// 0

best([100])
// 0

best([100, 0])
// 0
