class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const smap = new Map();
        for(let i = 0; i < nums.length; i++) {
            smap.set(nums[i], i);
            // console.log("smap.has(nums[i])",nums[i], smap.has(nums[i]));
            // if(smap.has(nums[i].toString())) return true;
        }
        console.log("smap",smap)
        return smap.size !== nums.length;
    }
}
