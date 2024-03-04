function solve(arrInfo) {

    class Student {
        constructor(name, grade, avrScore) {
            this.name = name;
            this.grade = grade;
            this.avrScore = avrScore;
        }
    }


    let studentLog = [];
    let nameX; let grade; let avrScore;

    for (const iterator of arrInfo) {
        for (let i = 0; i < 3; i++) {
            const element = iterator.split(', ')[i].split(': ');
            let value = element[1];

            if (i == 0) { nameX = value; }
            if (i == 1) { grade = Number(value); }
            if (i == 2) {
                avrScore = Number(value);
                studentLog.push(new Student(nameX, grade, avrScore));
            }
        }
    }

    for (let i = 1; i <= 12; i++) {
        let pastGradeInfo = studentLog.filter(x => x.grade == i && x.avrScore >= 3);

        if (pastGradeInfo.length != 0) {
            
            console.log(`${i + 1} Grade`);  // i + 1 --> the next grade for the new year
           
            let tempLiStudentNames = [];
            let totalScoreYear = 0;
            
            for (const student of pastGradeInfo) {
                tempLiStudentNames.push(student.name)
                totalScoreYear += student.avrScore;
            }
                                  
            let averScoreYear = (totalScoreYear / pastGradeInfo.length).toFixed(2);
            
            console.log(`List of students: ${tempLiStudentNames.join(', ').trim()}`);
            console.log(`Average annual score from last year: ${averScoreYear}`);
            console.log('');
        }
    }
}




// solve([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);
