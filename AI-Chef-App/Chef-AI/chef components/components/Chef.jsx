import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import PrevIngredients from "./PrevIngredients";
import chefLogo from "../assets/2chef-claude-icon.svg"
export default function Chef(props){
   const [ingredients,setIngredients] = React.useState([])
   const [recipe, setRecipe] = React.useState("")
   const [loading, setLoading] = useState(false)

   
React.useEffect(() => {
    console.log("Updated recipe:", recipe)
}, [recipe])
   
async function handleRecipe() {
    setLoading(true)

    try {
        const airecipe = await getRecipeFromMistral(ingredients)
        setRecipe(airecipe)
    } catch (err) {
        console.error(err)
    } finally {
        setLoading(false)
    }
}
function clearRecipe(){
    setRecipe("")
    setIngredients([])
    // alert("Recipe cleared!")
}
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleShowRecipe(){
        setRecipeShown(prevValue=>!prevValue)
        // Boolean function for changing Get Recipe Value
    }

    function addIngredient(formData){ 
        const fieldIngredient = formData.get("ingredient")
        if(fieldIngredient === ""){
            alert("Please enter an ingredient before adding.")       
        }else{
            setIngredients(()=>[...ingredients,fieldIngredient])
            console.log(ingredients)
            console.log(recipeShown)
            // Function for adding an ingredient to the listed data
            //added if no ingredient, do not add to the list
            
        }
       }
       
    return(
        <main className="dg-main">
            <p className=".dg-eyebrow">AI-powered recipes</p>
            <h1 className="dg-headline">What's in your kitchen?</h1>
            <p className="dg-subline">Add your ingredients and we'll craft the perfect recipe.</p>
            <div className="dg-card">
            <form className="dg-input-row" action={addIngredient} >
                <input className="dg-input" name="ingredient" type="text" placeholder="e.g. eggs, garlic, pasta..."/>
                <button className="dg-add-btn" >+ Add Ingredient</button>
                {/* {recipe.length > 0 ? <button type="button" className="clr-ingredient-btn" onClick={clearRecipe}>Clear Recipe</button> : null} */}
              
            </form>
                  
             <IngredientsList 
                ingredients= {ingredients}  
                toggleShowRecipe ={handleRecipe}
                recipeGenerated = {recipe.length}
                clearRecipe = {clearRecipe}
                loading = {loading}
            />

            </div>
            
            
          
                
                    <ClaudeRecipe  generatedRecipe = {recipe}/>
        </main>
    )
}

