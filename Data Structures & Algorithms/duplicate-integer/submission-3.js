class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const smap = new Map();
        for(let i = 0; i < nums.length; i++) {
            smap.set(nums[i], i);
        }
        return smap.size !== nums.length;
    }
}
