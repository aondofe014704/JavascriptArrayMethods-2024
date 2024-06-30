
function filteredScores(score){
    return score.filter(scores =>  scores >= 70)
};

function increaseExamGrades(examGrades) {
    return examGrades.map(examGrades => examGrades + 5)
};

function squareOfIntegers(numbers) {
    return numbers.map(numbers => numbers * numbers)
};

function distributeBooksToMembers(listOfBooks, listOfMembers) {
    let distributedBooks = {};
    for (let i = 0; i < listOfBooks.length; i++) {
        distributedBooks[listOfBooks[i]] = listOfMembers[i];
    }
    return distributedBooks;
}







module.exports = {filteredScores, increaseExamGrades, squareOfIntegers, distributeBooksToMembers};
