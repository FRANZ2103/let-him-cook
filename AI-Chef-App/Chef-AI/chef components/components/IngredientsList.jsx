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
    <section className="recipe-section">
      {props.ingredients.length ? (
        <div className="dg-pills">{listedIngredients}</div>
      ) : null}
      <div className="get-recipe-container">
        <div></div>

        <div className="dg-generate">
          <button
            onClick={props.toggleShowRecipe}
            className="dg-generate"
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
              <span id="gen-label">Generate Recipe </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
