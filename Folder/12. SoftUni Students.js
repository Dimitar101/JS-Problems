function solve(arrInfo) {

    class Course {
        constructor(courseTitle) {
            this.courseTitle = courseTitle;
            this.capacity = 0;
            this.students = [];
        }
    }

    class Student {
        constructor(username, credits, email) {
            this.username = username;
            this.credits = credits;
            this.email = email;
        }
    }

    
    let coursesLog = [];

    for (const iterator of arrInfo) {
        if (iterator.includes(':')) {
            let [courseTitle, capacity] = iterator.split(': ');
            capacity = Number(capacity);

            let curr = coursesLog.find(x => x.courseTitle == courseTitle);
            if (curr == undefined) {
                let newCourse = new Course(courseTitle);
                newCourse.capacity = capacity;
                coursesLog.push(newCourse);
            } else {
                curr.capacity += capacity;
            }
        }
        else if (iterator.includes('email')) {
            let [email, courseTitle] = iterator.split(' with email ')[1].split(' joins ');
            let username = iterator.split(' with email ')[0].split('[')[0];
            let credits = iterator.split(' with email ')[0].split('[')[1].split(']')[0];
            credits = Number(credits);

            let curr = coursesLog.find(x => x.courseTitle == courseTitle);
            if (curr) {
                if (curr.capacity > curr.students.length) {
                    curr.students.push(new Student(username, credits, email));
                }
            }
        }
    }

    coursesLog.sort((a, b) => b.students.length - a.students.length);

    for (const Course of coursesLog) {
        let placesLeft = Course.capacity - Course.students.length;
        console.log(`${Course.courseTitle}: ${placesLeft} places left`);
        Course.students.sort((a, b) => b.credits - a.credits);

        for (const Student of Course.students) {
            console.log(`--- ${Student.credits}: ${Student.username}, ${Student.email}`);
        }
    }
}




// solve(
//     [
//         'JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'
//     ]
// );

solve(
    [
        'JavaBasics: 15',
        'user1[26] with email user1@user.com joins JavaBasics',
        'user2[36] with email user11@user.com joins JavaBasics',
        'JavaBasics: 5',
        'C#Advanced: 5',
        'user1[26] with email user1@user.com joins C#Advanced',
        'user2[36] with email user11@user.com joins C#Advanced',
        'user3[6] with email user3@user.com joins C#Advanced',
        'C#Advanced: 1',
        'JSCore: 8',
        'user23[62] with email user23@user.com joins JSCore'
    ]
);
