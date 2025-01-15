/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade

switch (true) {
    case (score >= 0 && score < 50):
        grade = "F"
        break;
    case (score >= 50 && score < 70):
        grade = "D"
    case (score >= 70 && score < 80):
        grade = "C"
    case (score >= 80 && score < 90):
        grade = "B"
    case (score >= 90 && score <= 100):
        grade = "A"
    default:
        break;
}
// your code