// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let fn = (a,b) => {
//     return a * b;
// };
//
// fn(5,5);
// console.log(fn(5,5));

// - створити функцію яка обчислює та повертає площу кола

// let fn = (r) => {
//     let rad = r ** 2;
//     return 3.14 * rad;
// }
//
// console.log(fn(5));

// - створити функцію яка обчислює та повертає площу циліндру

// let fn = (r,h) => {
//     return 2 * 3.14 * r * h;
// }
//
// console.log(fn(5,5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3];
//
// let functionArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// functionArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let textCreator = (text) => {
//     document.write(`<p>${text}</p>`)
// }
//
// textCreator('Okten School')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listCreator = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// listCreator('Hello Okten!')

// - створити функцію яка  створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listCreator = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listCreator('Hello Okten!',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1,2,'Hello','Okten',true,false];
//
// let list = (arr) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// list(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arrObject = [
//     {
//         id: 1,
//         name: 'Oleg',
//         age:17
//     },
//     {
//         id: 2,
//         name: 'Vasya',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Tod',
//         age: 150
//     }
// ]
//
// let fnObjects = (array) => {
//     for (const arrObjectElement of array) {
//         document.write(`<div>${arrObjectElement.id} ${arrObjectElement.name} ${arrObjectElement.age}</div>`)
//     }
// }
//
// fnObjects(arrObject)