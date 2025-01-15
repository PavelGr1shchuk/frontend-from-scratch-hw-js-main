/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 55 // тестовое значение, можно изменять
let grade = "F"

// switch (true) {
//     case (score >= 0 && score < 50):
//         grade = "F"
//         console.log('1');
//         break;
//     case (score >= 50 && score < 70):
//         grade = "D"
//         console.log('2');
//         break;
//     case (score >= 70 && score < 80):
//         grade = "C"
//         console.log('3');
//         break;
//     case (score >= 80 && score < 90):
//         grade = "B"
//         console.log('4');
//         break;
//     case (score >= 90 && score <= 100):
//         grade = "A"
//         console.log('5');
//         break;
//     default:
//         console.log('6');
//         break;
// }

if (score >= 0 && score < 50) {
    grade = "F"
} else if (score >= 50 && score < 70) {
    grade = "D"
} else if (score >= 70 && score < 80) {
    grade = "C"
} else if (score >= 80 && score < 90) {
    grade = "B"
} else if (score >= 90 && score <= 100) {
    grade = "A"
}
// your code