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
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p>
                    </div>
                    
                    <button onClick={props.toggleShowRecipe}>{props.recipeGenerated > 0 ?  "Regenerate": "Get a recipe" }</button>
                    

                </div>}
    
        </section>
    )
}