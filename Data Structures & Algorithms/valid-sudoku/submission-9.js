class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < 9; row++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                const current = board[row][i];
                if (current === ".") continue;
                if (seen.has(current)) return false;
                seen.add(current);
            }
        }

        for (let col = 0; col < 9; col++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                const current = board[i][col];
                if (current === ".") continue;
                if (seen.has(current)) return false;
                seen.add(current);
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    const current = board[row][col];
                    if (current === ".") continue;
                    if (seen.has(current)) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
