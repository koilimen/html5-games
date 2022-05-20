import { MatchThreeModel } from "../main/model";
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

test("Test delete matched",
    () => {
        const input = [
            [1,2,3,3,2],
            [3,2,1,1,2],
            [3,3,3,1,3],
            [1,2,3,3,2],
            [3,2,1,3,2],
        ];
        const model = new MatchThreeModel({width:5, height:5})
        model._gameField = input;
        expect(model.deleteMatched()).toBe(true);
        expect(model._gameField).toEqual(
            [
                [1,2,3,3,2],
                [3,2,1,1,2],
                [0,0,0,1,3],
                [1,2,3,3,2],
                [3,2,1,3,2],
            ]
        )
    })