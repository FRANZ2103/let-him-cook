export default function IngredientsList(props){
    console.log(props.ingredients)
     const listedIngredients = props.ingredients.map((ingredient) =>(
        <div className="dg-pills">
        <li className="dg-pill" key={ingredient}> {ingredient}
        <button className="dg-pill-x">✕</button> </li>
        {/* // <div className="chckbox-ingredients">
        //     <input type="checkbox" key={ingredient} value={ingredient}/>  
        // <label>{ingredient}</label> */}

          </div>
         
        
    ))
    return(
        <section className="recipe-section">
                {/* <h1>{props.ingredients.length > 0 ? "Ingredients on Hand:": null}</h1> */}
                <ul className="ingredients-list">{listedIngredients}</ul>
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
                        <span id="gen-label">Generate Recipe </span></button>

                        
                        
                        {/* {props.recipeGenerated > 0? <button className="clr-ingredient-btn" onClick={props.clearRecipe}>Clear Recipe</button> : null} */}
                    </div>

                </div>
    
        </section>
    )
}