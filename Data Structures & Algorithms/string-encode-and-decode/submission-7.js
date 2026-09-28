class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // let result = "";
        // for (let str of strs) {
        //     result += str.length + "#" + str;
        // }
        // return result;\\
        const res = strs.length > 0 ? strs.join("#@") : "$";
        console.log("str>>>", res)
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
