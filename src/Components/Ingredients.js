const ingredientsArray = [
  'lime',
  'brown sugar'
];

const ingredients = ingredientsArray.map(ingredient => {
  const obj = { 'name' : ingredient }
  console.log(obj);
  return obj;
});

//export default ingredients;