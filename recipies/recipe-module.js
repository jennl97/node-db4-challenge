const db = require('../data/db-config');

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db(ingredients).where({recipe_id});
}

function getInstructions(recipe_id){
    return db(directions).where({recipe_id});
}