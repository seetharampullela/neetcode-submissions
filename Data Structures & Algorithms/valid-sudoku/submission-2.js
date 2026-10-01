class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const sqrs = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const current = board[r][c];

                if (current === ".") {
                    continue;
                }

                const sqr_key = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

                if (
                    rows.get(r)?.has(current) ||
                    cols.get(c)?.has(current) ||
                    sqrs.get(sqr_key)?.has(current)
                ) {
                    return false;
                }

                rows.get(r)?.add(current) ?? rows.set(r, new Set().add(current));
                cols.get(c)?.add(current) ?? cols.set(c, new Set().add(current));
                sqrs.get(sqr_key)?.add(current) ?? sqrs.set(sqr_key, new Set().add(current));
            }
        }

        return true;
    }
}
