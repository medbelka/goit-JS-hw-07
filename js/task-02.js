const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  
  const products = ingredients.map(ingredient => {
    const makeIngredientEl = document.createElement('li');
    makeIngredientEl.textContent = ingredient;
    return makeIngredientEl;
  });

  console.log(products);
  const parentNode = document.querySelector("#ingredients");
  parentNode.append(...products);


  // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
  // Для создания DOM-узлов используй document.createElement()