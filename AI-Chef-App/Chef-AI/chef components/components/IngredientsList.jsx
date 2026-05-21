export default function IngredientsList(props){
    console.log(props.ingredients)
     const listedIngredients = ( 
        <ul className="dg-pills" >
            {props.ingredients.map(ingredient =>(  
                <li className="dg-pill" key={ingredient.id} > 
                    {ingredient.value}
                    <button onClick={()=>props.removeIngredient(ingredient.id)} className="dg-pill-x">✕</button> 
                </li>
            ))}

          </ul>
         )
        
    
    return(
        <section className="recipe-section">
                {/* <h1>{props.ingredients.length > 0 ? "Ingredients on Hand:": null}</h1> */}
                <div className="dg-pills">{listedIngredients}</div>
              <div className="get-recipe-container">
                    <div>
                        {/* {props.loading ? "Generating recipe..." : <>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe for your list of ingredients</p> </>
                        } */}
                    </div>

                    <div className="dg-generate">
                        {/* <button onClick={props.toggleShowRecipe} disabled={props.loading}>
                        {props.recipeGenerated > 0 ?  "Regenerate": "Get a recipe" }</button> */}

                        <button onClick={props.toggleShowRecipe} className="dg-generate" disabled={props.loading}>
                        {props.loading ? <span className="dg-generating">
                        <span className="dg-dot"></span>
                        <span className="dg-dot"></span>
                        <span className="dg-dot"></span>
                        Generating Recipe... </span>: <span id="gen-label">Generate Recipe </span>}
                        </button>

                        
                        
                        {/* {props.recipeGenerated > 0? <button className="clr-ingredient-btn" onClick={props.clearRecipe}>Clear Recipe</button> : null} */}
                    </div>

                </div>
    
        </section>
    )
}