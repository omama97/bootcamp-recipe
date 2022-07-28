const express = require("express");
const path = require("path");
const urllib = require("urllib");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

let recipesData;

app.get("/recipes/:ingredient", (req, res) => {
  const param = req.params.ingredient;
  urllib.request(
    `https://recipes-goodness.herokuapp.com/recipes/${param}`,
    function (err, recipeData, response) {
      recipesData = JSON.parse(recipeData).results.map((recipe) => {
        return {
          title: recipe.title,
          thumbnail: recipe.thumbnail,
          href: recipe.href,
          ingredients: recipe.ingredients,
        };
      });
      res.send(recipesData);
    }
  );
});

const PORT = 8080;
app.listen(PORT, console.log("Hi You Are Listening On Port :", PORT));
