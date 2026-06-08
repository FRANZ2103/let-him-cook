import { useState } from "react";

export default function IngredientsList(props) {
  console.log(props.ingredients);
  const listedIngredients = (
    <ul className="dg-pills">
      {props.ingredients.map((ingredient) => (
        <li className="dg-pill" key={ingredient.id}>
          {ingredient.value}
          <button
            onClick={() => props.removeIngredient(ingredient.id)}
            className="dg-pill-x"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
  function Test() {
    if (confirm("Press a button!") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
  }
  return (
    <section>
      {props.ingredients.length ? (
        <div className="dg-pills">{listedIngredients}</div>
      ) : null}
      <div className="recipe-section">
        <button
          //   onClick={
          //     props.recipeGenerated !== 0 //Is there already a recipe generated?
          //       ? () =>
          //           // If so, confirm before generating a new recipe
          //           confirm(
          //             "Are you sure you want to generate a new recipe? Your current recipe will be lost.",
          //           ) && props.toggleShowRecipe()
          //       : () => props.toggleShowRecipe() // If not, just generate the recipe
          //   }
          onClick={props.toggleShowRecipe}
          className="dg-generate dark:bg-[#FF6B6B] bg-[#1a1a18] "
          disabled={props.loading}
        >
          {props.loading ? (
            <span className="dg-generating">
              <span className="dg-dot"></span>
              <span className="dg-dot"></span>
              <span className="dg-dot"></span>
              Generating Recipe...{" "}
            </span>
          ) : (
            <span id="gen-label" className="text-[#fafaf8] dark:text-[#18181A]">
              Generate Recipe
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
