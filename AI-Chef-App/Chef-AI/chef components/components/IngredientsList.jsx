export default function IngredientsList(props){
    console.log(props.ingredients)
     const listedIngredients = props.ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))
    return(
        <section className="recipe-section">
                <h1>{props.ingredients.length > 0 ? "Ingredients on Hand:": null}</h1>
                <ul className="ingredients-list">{listedIngredients}</ul>
                 {props.ingredients.length >= 2 && <div className="get-recipe-container">
                    <div>
                        {props.loading ? "Generating recipe..." : <>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p> </>
                        }
                    </div>

                    <div className="get-recipe-buttons">
                        {/* <button onClick={props.toggleShowRecipe} disabled={props.loading}>
                        {props.recipeGenerated > 0 ?  "Regenerate": "Get a recipe" }</button> */}

                        <button onClick={props.toggleShowRecipe} disabled={props.loading}>
                        {props.loading ? "Generating recipe..." : "Get a recipe"}</button>

                        
                        
                        {props.recipeGenerated > 0? <button className="clr-ingredient-btn" onClick={props.clearRecipe}>Clear Recipe</button> : null}
                    </div>

                </div>}
    
        </section>
    )
}