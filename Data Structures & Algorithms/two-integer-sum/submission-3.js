class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indices = {};
        let numLength = nums.length;
        for(let i = 0; i < numLength; i++){
            indices[nums[i]] = i;
        }

        for(let i = 0; i < numLength; i++){
            let diff = target - nums[i]
            if(indices[diff] !== undefined && indices[diff] !== i){
                return [i, indices[diff]]
            }
        }

    }
}
