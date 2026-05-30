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

  return (
    <section>
      {props.ingredients.length ? (
        <div className="dg-pills">{listedIngredients}</div>
      ) : null}
      <div className="recipe-section">
        <button
          onClick={props.toggleShowRecipe}
          className="dg-generate dark:bg-[#F0EFE8] bg-[#1a1a18] "
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
        {props.recipeGenerated !== 0 && (
          <button
            onClick={props.clearRecipe}
            className="dg-generate m-1 !bg-red-600 !hover:bg-red-700"
          >
            Clear Recipe
          </button>
        )}
      </div>
    </section>
  );
}
