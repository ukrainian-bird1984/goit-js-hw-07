const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Category quantity:', categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  const categoryElements = categoryItem.querySelectorAll('ul li');
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements quantity: ${numberOfElements}`);
});

