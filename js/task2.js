//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9

function sumPositiveIfWeMulyiplyByThree(arr) {
    const positiveMultiplesOfThree = arr.filter(number => number > 0 && number % 3 === 0);
    return positiveMultiplesOfThree.reduce((sum, number) => sum + number, 0);
}

const inputArray = [3, 5, -9, 7, 2, 8, 10, -6];
console.log(sumPositiveIfWeMulyiplyByThree(inputArray));