const ingredientsArray = [
  'Light rum',        'Applejack',         'Gin',
  'Dark rum',         'Sweet Vermouth',    'Strawberry schnapps',
  'Scotch',           'Apricot brandy',    'Triple sec',
  'Southern Comfort', 'Orange bitters',    'Brandy',
  'Lemon vodka',      'Blended whiskey',   'Dry Vermouth',
  'Amaretto',         'Tea',               'Champagne',
  'Coffee liqueur',   'Bourbon',           'Tequila',
  'Vodka',            'Añejo rum',         'Bitters',
  'Sugar',            'Kahlua',            'demerara Sugar',
  'Dubonnet Rouge',   'Watermelon',        'Lime juice',
  'Irish whiskey',    'Apple brandy',      'Carbonated water',
  'Cherry brandy',    'Creme de Cacao',    'Grenadine',
  'Port',             'Coffee brandy',     'Red wine',
  'Rum',              'Grapefruit juice',  'Ricard',
  'Sherry',           'Cognac',            'Sloe gin',
  'Apple juice',      'Pineapple juice',   'Lemon juice',
  'Sugar syrup',      'Milk',              'Strawberries',
  'Chocolate syrup',  'Yoghurt',           'Mango',
  'Ginger',           'Lime',              'Cantaloupe',
  'Berries',          'Grapes',            'Kiwi',
  'Tomato juice',     'Cocoa powder',      'Chocolate',
  'Heavy cream',      'Galliano',          'Peach Vodka',
  'Ouzo',             'Coffee',            'Spiced rum',
  'Water',            'Espresso',          'Angelica root',
  'Orange',           'Cranberries',       'Johnnie Walker',
  'Apple cider',      'Everclear',         'Cranberry juice',
  'Egg yolk',         'Egg',               'Grape juice',
  'Peach nectar',     'Lemon',             'Firewater',
  'Lemonade',         'Lager',             'Whiskey',
  'Absolut Citron',   'Pisco',             'Irish cream',
  'Ale',              'Chocolate liqueur', 'Midori melon liqueur',
  'Sambuca',          'Cider',             'Sprite',
  '7-Up',             'Blackberry brandy', 'Peppermint schnapps',
  'Creme de Cassis'
];

const ingredients = ingredientsArray.map(ingredient => {
  const obj = { 'name' : ingredient }
  console.log(obj);
  return obj;
});

export default ingredients;