
const {filteredScores, increaseExamGrades, squareOfIntegers, distributeBooksToMembers} = require('./filteredTestScores.js');

test("toFilterNumbersAboveSeventyInAnArray", ()=>{
    const testScores = [70, 71, 89, 76, 45, 65, 23, 90, 87, 97];
    expect(filteredScores(testScores)).toEqual([70, 71, 89, 76, 90, 87, 97 ]);
})


test("toIncreaseTheScoresOfStudentsByFiveMarks", ()=>{
    const examGrades = [85, 92, 78, 88, 95];
    expect(increaseExamGrades(examGrades)).toEqual([90, 97, 83, 93, 100]);
})

test("toKnowTheSquaresOfIntegersInAList", ()=> {
    const numbers = [2, 4, 6, 8, 10];
    expect(squareOfIntegers(numbers)).toEqual([4, 16, 36, 64, 100]);
    })

test("toDistributeBooksToMembersInTheBookClub", ()=> {
    const listOfBooks = ["Things Fall Apart", "Chike and the River", "Our husband has Gone mad again", "Our of his Mind"];
    const listOfMembers = ['Emily', 'Jack', 'Sophia','Daniel'];
    expect(distributeBooksToMembers(listOfBooks, listOfMembers)).toEqual(
        {'Things Fall Apart':'Emily'},
        {'Chike and the River':'Jack'},
        {'Our husband has Gone mad again':'Sophia'},
        {'Our of his Mind':'Daniel'}
        
    )
})
