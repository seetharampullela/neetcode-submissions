class Solution {
    delimiter = "pavan"
    emptyString = "EMPTYSTRING"
    emptyArray = "EMPTYARRAY"
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) {
            return this.emptyArray
        }
        return strs.join(this.delimiter)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == this.emptyArray) {
            return []
        }
        return str.split(this.delimiter)
    }
}
