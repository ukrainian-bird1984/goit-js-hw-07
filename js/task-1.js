const categoryList = document.getElementById('categories');
const categoryItems = categoryList.querySelectorAll('.item');
console.log(`Number of Categories: ${categoryItems.length}`);
categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('li');
  console.log(`Category:${categoryName}`);
  console.log(`Elements:${categoryItemsCount.length}`);
});