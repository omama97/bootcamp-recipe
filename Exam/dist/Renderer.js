class Renderer {
  constructor() {}

  render(recipesData) {
    let source = $("#displayRecipies-template").html();
    let template = Handlebars.compile(source);
    $("#displayRecipies").empty();
    // recipe object
    for (let recipe of recipesData) {
      let newHTML = template(recipe);
      $("#displayRecipies").append(newHTML);
    }
  }
}
