class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sNums = nums.sort((a,b) => a-b);
        const smap = {};

        for(let i = 0; i < sNums.length; i++) {
            smap[sNums[i]] = (smap[sNums[i]] || 0) + 1;
        }
        
        for(const key in smap) {
            if(smap[key] > 1) return true;
        }
        return false;
    }
}
