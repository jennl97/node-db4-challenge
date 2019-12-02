
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directions').insert([
    {step_number: 1, step_instruction:'Preheat oven to 350ºF (180ºC).', recipe_id: 1},
    {step_number: 2, step_instruction:'In a large bowl, mix together the peanut butter, sugar, and egg.', recipe_id: 1},
    {step_number: 3, step_instruction:'Scoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet.', recipe_id: 1},
    {step_number: 4, step_instruction:'For extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern.', recipe_id: 1},
    {step_number: 5, step_instruction:'Bake for 8-10 minutes or until the bottom of the cookies are golden brown.', recipe_id: 1},
    {step_number: 6, step_instruction:'Remove from baking sheet and cool.', recipe_id: 1},
    {step_number: 1, step_instruction:'Separate the cream from the chocolate sandwich cookies. Place the cookies in a plastic bag and the cream in a small bowl.', recipe_id: 2},
    {step_number: 2, step_instruction:'Using a rolling pin, crush the cookies until they are finely ground.', recipe_id: 2},
    {step_number: 3, step_instruction:'Microwave the cream from the chocolate sandwich cookies for 2 minutes.', recipe_id: 2},
    {step_number: 4, step_instruction:'In a chilled medium bowl, beat the heavy cream using a hand mixer until thick and frothy.', recipe_id: 2},
    {step_number: 5, step_instruction:'Add the cream from the cookies and the powdered sugar. Beat until stiff peaks form.', recipe_id: 2},
    {step_number: 6, step_instruction:'Fold in the chocolate sandwich cookie crumbs, saving some as topping for later.', recipe_id: 2},
    {step_number: 7, step_instruction:'Spoon into a piping bag or plastic bag with a piping tip. Pipe into serving bowls or glasses.', recipe_id: 2},
    {step_number: 8, step_instruction:'Top with remaining chocolate sandwich cookie crumbs and half of a chocolate sandwich cookie, if desired.', recipe_id: 2},
    {step_number: 9, step_instruction:'Serve immediately or refrigerate until ready to serve.', recipe_id: 2},
    {step_number: 10, step_instruction:'Enjoy!', recipe_id: 2}
    
  ])
};
