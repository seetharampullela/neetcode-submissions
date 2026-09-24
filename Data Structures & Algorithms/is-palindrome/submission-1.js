class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const reg =/[^a-zA-Z0-9]/g;
        const res = s.replace(reg, "").replaceAll(" ", "").trim().toLowerCase();
        const reversedString = res.split("").reverse().join("");

        console.log("res", s.replace(reg, ""))
        return res === reversedString;
    }
}
