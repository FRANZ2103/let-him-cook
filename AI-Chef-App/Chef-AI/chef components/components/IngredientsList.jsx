export default function IngredientsList(props){
    console.log(props.ingredients)
     const listedIngredients = props.ingredients.map((ingredient) =>(
        <li key={ingredient}> {ingredient} </li>
    ))
    return(
        <section className="recipe-section">
                <h1>Ingredients on Hand:</h1>
                <ul className="ingredients-list">{listedIngredients}</ul>
                 {props.ingredients.length >= 5 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p>
                    </div>
                    {/* <button onClick={props.toggleShowRecipe}>Get a recipe</button> */}
                    <button onClick={props.toggleShowRecipe}>Get a recipe</button>

                </div>}
    
        </section>
    )
}
/**
 * <section className="recipe-section">
                <h1>Ingredients on Hand:</h1>
                <ul className="ingredients-list">{listedIngredients}</ul>
                {ingredients.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p>
                    </div>
                    <button onClick={toggleShowRecipe}>Get a recipe</button>
                </div>}
 */