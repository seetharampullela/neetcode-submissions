class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        // count the no.of times each char repeats
        // compare both 
        let smap = new Map();
        let tmap = new Map();
        for(let i = 0; i < s.length; i++) {
            let sCount = smap.get(s[i]) ?? 0;
            let tCount = tmap.get(t[i]) ?? 0;
            smap.set(s[i],  1 + sCount)
            tmap.set(t[i],  1 + tCount)
        }

        for(let [key] of smap) {
            console.log("keu", key, smap.get(key), tmap.get(key))
            if (smap.get(key) !== tmap.get(key)) return false;
        }
        return true;
    }
}


  