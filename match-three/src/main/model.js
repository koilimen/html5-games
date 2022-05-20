import {re} from "@babel/core/lib/vendor/import-meta-resolve";

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

    _findMatchedIndices(row) {
        let base = row[0];
        let indices = [0];
        console.log("Base is ", base,"\nIndices:",indices,"\n=======");
        row.slice(1).forEach((el, j) => {
            console.log("Base is ", base,"\nIndices:",indices,"\n=======");
            if (el !== base) {
                if (indices.length < 3) indices.splice(0);
                base = el;
            }
            indices.push[j + 1];
        });
        return indices;
    }

    deleteMatched() {
        let hasMatches = false;
        ;
        //check rows
        this._gameField.forEach((function (row) {
            const indices = this._findMatchedIndices(row)
            if (indices.length > 0) {
                indices.forEach(idx => {
                    row[idx] = 0;
                });
                hasMatches = true;
            }
        }).bind(this))
        return hasMatches;
    }


}

export const TYPE = {
    RED: 1,
    GREEN: 2,
    BLUE: 3
}