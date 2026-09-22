class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


        const sarr = [...s].sort();
        const tarr = [...t].sort();

        let truthys = []

        if(sarr.length === tarr.length) {
            for(let i=0; i < sarr.length; i++){
                if(sarr[i] == tarr[i]) {
                    truthys.push(i);
                }
            }
            
            console.log("tre",truthys.length)
            return truthys.length == sarr.length;
        }
        return false


    }
}
