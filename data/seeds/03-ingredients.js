
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'cup peanut butter', ingredient_amount: 1, recipe_id: 1},
    {ingredient_name: 'cup sugar', ingredient_amount: .5, recipe_id: 1},
    {ingredient_name: 'egg', ingredient_amount: 1, recipe_id: 1},
    {ingredient_name: 'chocolate sandwich cookies', ingredient_amount: 8, recipe_id: 2},
    {ingredient_name: 'ccups heavy cream', ingredient_amount: 1.5, recipe_id: 2},
    {ingredient_name: 'cup powdered sugar', ingredient_amount: .5, recipe_id: 2}
  ])
};
