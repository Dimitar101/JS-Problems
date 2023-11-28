function solution(age) {
    let result = 'out of bounds';

    if (age >= 0) {
        if (age <= 2) {
            result = 'baby';
        } else if (age <= 13) {
            result = 'child';
        } else if (age <= 19) {
            result = 'teenager';
        } else if (age <= 65) {
            result = 'adult';
        } else if (age >= 66) {
            result = 'elder';
        }
    }
    console.log(result);
}

solution(20);
solution(1);
solution(100);
solution(-1);
