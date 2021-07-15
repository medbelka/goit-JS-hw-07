const categoriesRef = document.querySelector("#categories");
console.log(`В списке ${categoriesRef.children.length} категории`);
const navRef = document.querySelectorAll(".item")

console.log('Категория: ', navRef[0].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[0].lastElementChild.children.length);
console.log('Категория: ', navRef[1].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[1].lastElementChild.children.length);
console.log('Категория: ', navRef[2].firstElementChild.textContent);
console.log('Количество элементов: ', navRef[2].lastElementChild.children.length);


// navRef.forEach((ref,idx) =>
//     console.log('Категория: ', ref[idx].firstElementChild.textContent));
    // console.log('Количество элементов: ', navRef[idx].lastElementChild.children.length));






// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4