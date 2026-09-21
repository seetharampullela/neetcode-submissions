class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {};
        let numLength = nums.length;
        for(let i = 0; i < numLength; i++) {
            numMap[nums[i]] = i;
        }
        for(let i = 0; i < numLength; i++) {
            if(numMap[target - nums[i]] && numMap[target - nums[i]] != i) {
                return [i, numMap[target - nums[i]]];
            }
        }
    }
}
