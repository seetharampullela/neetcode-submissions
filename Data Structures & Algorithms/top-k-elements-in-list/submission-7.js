class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }
        return Object.entries(freq)
            .sort(([, a], [, b]) => b - a)
            .map(([num]) => Number(num))
            .slice(0, k);
    }
}
