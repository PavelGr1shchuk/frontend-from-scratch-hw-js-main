/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  const capitaliseEntry = str.split(" ");
  const arr = [];
  for (let index = 0; index < capitaliseEntry.length; index++) {
    const w = capitaliseEntry[index];
    arr.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
  }
  return arr.join(" ");
}