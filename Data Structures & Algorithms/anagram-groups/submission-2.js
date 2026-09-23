class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [strs];
        
        const smap = {};
        const groups = {};

        for(let i = 0; i < strs.length; i++) {
            const s = strs[i];
            const key = [...s].sort().join('');
            if(!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(s);

            // const sortedkey = [...strs[i]].sort().join("");
            // let res = [ strs[i] ]
            // if(Object.keys(smap).includes(sortedkey)) {
            //     res.push(...smap[sortedkey]);
            //     smap[sortedkey] = res;
            // }else {
            //     smap[sortedkey] =res;
            // }
        }

        return Object.values(groups);
    }
}
