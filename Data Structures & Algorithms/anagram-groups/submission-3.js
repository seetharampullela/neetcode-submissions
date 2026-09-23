class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [strs];
        const groups = {};
        for(let i = 0; i < strs.length; i++) {
            const s = strs[i];
            const key = [...s].sort().join('');
            if(!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(s);
        }
        return Object.values(groups);
    }
}
