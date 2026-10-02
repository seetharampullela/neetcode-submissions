class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (board.length !== 9) return false;
        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            if (board[i].length !== 9) return false;
            for (let j = 0; j < 9; j++) {
                const currVal = board[i][j];
                if (currVal === ".") continue;
                if (seen.has(currVal)) return false;
                seen.add(currVal);
            }
        }

        for (let i = 0; i < 9; i++) {
            let seen = new Set();
            if (board[i].length !== 9) return false;
            for (let j = 0; j < 9; j++) {
                const currVal = board[j][i];
                if (currVal === ".") continue;
                if (seen.has(currVal)) return false;
                seen.add(currVal);
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(square / 3) * 3 + i;
                let col = (square % 3) * 3 + j;

                const currVal = board[row][col];
                if (currVal === ".") continue;
                if (seen.has(currVal)) return false;
                seen.add(currVal);
            }
            }
        }

        return true;
    }
}
