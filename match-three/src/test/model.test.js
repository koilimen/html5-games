import {MatchThreeModel} from "../main/model";

test("Find matches un row", () => {
    const model = new MatchThreeModel({width: 10, height: 10});
    //           0  1  2  3  4  5  6 [7  8  9]10[11 12 13 14]15 16 17
    const row = [1, 1, 2, 2, 3, 4, 5, 2, 2, 2, 3, 1, 1, 1, 1, 3, 3, 2];
    const indices = model._findMatchedIndices(row);
    console.log(indices);
    expect(indices).toEqual([7,8,9,11,12,13,14])

});

// todo написать тест и реализацию рекурсивного обхода по клику
test("Create 5 to 5 matrix filled with digits 1 to 3", () => {
    const model = new MatchThreeModel({
        width: 5,
        height: 5
    });
    model.randomFill()
    model._gameField.forEach((row) => {
        row.forEach(el => {
            expect(el).not.toBe(0);
        })
    })
});

// test("Test delete matched",
//     () => {
//         const input = [
//             [1, 2, 3, 3, 2],
//             [3, 2, 1, 1, 2],
//             [3, 3, 3, 1, 3],
//             [1, 2, 3, 3, 2],
//             [3, 2, 1, 3, 2],
//         ];
//         let model = new MatchThreeModel({width: 5, height: 5})
//         model._gameField = input;
//         expect(model.deleteMatched()).toBe(true);
//         expect(model._gameField).toEqual(
//             [
//                 [1, 2, 3, 3, 2],
//                 [3, 2, 1, 1, 2],
//                 [0, 0, 0, 1, 3],
//                 [1, 2, 3, 3, 2],
//                 [3, 2, 1, 3, 2],
//             ]
//         )
//
//         const input2 = [
//             [1, 2, 3, 3, 2, 3, 1, 2, 1, 3, 2, 3, 3],
//             [3, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
//             [3, 3, 3, 1, 3, 3, 3, 1, 2, 3, 1, 2, 3],
//             [1, 2, 3, 3, 2, 3, 3, 1, 2, 3, 1, 2, 3],
//             [3, 2, 1, 3, 2, 3, 3, 1, 2, 3, 1, 2, 3],
//         ];
//         model = new MatchThreeModel({width: 5, height: 5})
//         model._gameField = input2;
//         expect(model.deleteMatched()).toBe(true);
//         expect(model._gameField).toEqual(
//             [
//                 [1, 2, 3, 3, 2, 3, 1, 2, 1, 3, 2, 3, 3],
//                 [3, 2, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0],
//                 [0, 0, 0, 1, 0, 0, 0, 1, 2, 3, 1, 2, 3],
//                 [1, 2, 3, 3, 2, 3, 3, 1, 2, 3, 1, 2, 3],
//                 [3, 2, 1, 3, 2, 3, 3, 1, 2, 3, 1, 2, 3],
//             ]
//         )
//     })