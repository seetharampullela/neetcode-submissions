class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const sqrs = new Map();

        // i -> row, j -> col
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let current = board[i][j];

                if (current == ".") continue;

                const sqrKey = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

                if (
                    rows.get(i)?.has(current) ||
                    cols.get(j)?.has(current) ||
                    sqrs.get(sqrKey)?.has(current)
                )
                    return false;

                rows.get(i)?.add(current) ?? rows.set(i, new Set().add(current));
                cols.get(j)?.add(current) ?? cols.set(j, new Set().add(current));
                sqrs.get(sqrKey)?.add(current) ?? sqrs.set(sqrKey, new Set().add(current));
            }
        }
        return true;
    }
}
