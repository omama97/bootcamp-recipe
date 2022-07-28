const renderRecipiesData = new Renderer();

const addEventListener = () => {
  $(".recipeImage").on("click", function () {
    let firstIngredient = $(this)
      .closest(".displayRecipiesData")
      .find("ul")
      .find("li:first-child")
      .text();

    alert(firstIngredient);
  });
};

const fetchRecipesData = (ingredients) => {
  $.get(`/recipes/${ingredients}`, (recipesData) => {
    renderRecipiesData.render(recipesData);
    addEventListener();
  });
  $("#input").val("");
};

const displayRecipiesBtn = () => {
  let input = $("#input").val();
  let ingredients = input.toLowerCase();
  fetchRecipesData(ingredients);
};
