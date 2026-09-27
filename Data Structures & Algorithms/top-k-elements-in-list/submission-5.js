class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let smap = {};
        for (let i = 0; i < nums.length; i++) {
            smap[nums[i]] = (smap[nums[i]] || 0) + 1;
        }
        const result = [];

        const sorted = Object.fromEntries(
            Object.entries(smap)
                .sort(([, a], [, b]) => b - a)
                .map(([key, value]) => [`_${key}`, value]),
        );

        for (let key in sorted) {
            result.push(key.split("_")[1]);
        }
        return result.slice(0, k);
    }
}
