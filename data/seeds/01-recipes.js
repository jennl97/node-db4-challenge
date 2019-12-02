
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_name: '3 Ingredient Peanut Butter Cookies'},
    {recipe_name: 'Cookies And Cream Mousse'}
  ])
};
