
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 255).notNullable();
        })
        .createTable('directions', tbl => {
            tbl.increments();
            tbl.integer('step_number').notNullable();
            tbl.string('step_instruction', 255).notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe.id');
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 255).notNullable();
            tbl.integer('ingredient_amount')
                .unsigned()
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe.id');
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
          .dropTableIfExists('ingredients')
          .dropTableIfExists('directions')
          .dropTableIfExists('recipes')
      
  )
};
