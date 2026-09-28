class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = strs.length > 0 ? strs.join("#@") : "$";
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str === "$" ? [] : str.split("#@");
    }
}
