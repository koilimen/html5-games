export class MatchThreeModel {
    constructor(size) {
        this._gameField = [];
        this.size = size;
    }

    randomFill() {
        for (let i = 0; i < this.size.height; i++) {
            this._gameField.push([]);
            for (let j = 0; j < this.size.width; j++) {
                this._gameField[i].push(Math.floor(Math.random() * 3 + 1));
            }
        }
    }

    deleteMatched() {
        let hasMatches = false;;
        //check rows
        this._gameField.forEach(row => {
            let base = row[0];
            let indices = [0];

            row.slice(1).forEach((el, j) => {
                if (el === base) {
                    indices.push(j + 1)
                } else {
                    if (indices.length < 3) indices = [];
                    base = el;
                }
            })

            if (indices.length > 0) {
                indices.forEach(idx => {
                    row[idx] = 0;
                });
                hasMatches = true;
            }
        })
        return hasMatches;
    }



}

export const TYPE = {
    RED: 1,
    GREEN: 2,
    BLUE: 3
}