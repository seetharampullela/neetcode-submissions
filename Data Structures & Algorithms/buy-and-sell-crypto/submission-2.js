class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let past = 0;
        let future = 1;

        for (let i=0; i<prices.length-1; i++) {
            if (prices[past] < prices[future]) {
                maxP = Math.max(maxP, prices[future] - prices[past])
            } else if (prices[past] > prices[future]) {
                past = future;
            }
            future += 1;
        }


        return maxP;
    }
}
