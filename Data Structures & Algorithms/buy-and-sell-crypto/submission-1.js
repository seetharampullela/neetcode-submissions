class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profitArr = [];
        for(let i = 0; i < prices.length; i++) {
            let curr =   prices[i];
            for(let j = i+1; j < prices.length; j++){
                profitArr.push(prices[j]-prices[i]);
            }
        }
        const profit = profitArr.sort((a,b)=>a-b)[profitArr.length-1]
        return profit > 0 ? profit : 0;
    }
}
