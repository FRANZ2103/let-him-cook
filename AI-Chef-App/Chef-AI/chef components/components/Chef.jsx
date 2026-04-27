import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import PrevIngredients from "./PrevIngredients";

export default function Chef(props){
   const [ingredients,setIngredients] = React.useState(["Chicken", "Rice", "Broccoli", "Garlic", "Olive Oil"])

   
   const [recipe, setRecipe] = React.useState()
   console.log(recipe) // Initial recipe state

   
React.useEffect(() => {
    console.log("Updated recipe:", recipe)
}, [recipe])
   
async function handleRecipe() {
    const airecipe = await getRecipeFromMistral(ingredients)
    // console.log("Mistral" + airecipe) //Actual recipe data from Mistral
    setRecipe(airecipe)
    // console.log(recipe) //Recipe state after setting it to the generated recipe
    
}
function clearRecipe(){
    setRecipe("")
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
    // console.log(import.meta.env.VITE_HF_API_KEY)
       
    return(
        <main>
            <center><p>Enter your Ingredients in the field below:</p></center>
            <form className="input-section" action={addIngredient} >
                <input className="input-field" type="text" placeholder="e.g. oregano" name="ingredient"/>
                <button className="add-ingredient-btn">Add Ingredient</button>
                <button type="button" className="clr-ingredient-btn" onClick={clearRecipe}>Clear Recipe</button>
              
            </form>

            <PrevIngredients/>
            {ingredients.length > 0 && <IngredientsList ingredients= {ingredients} toggleShowRecipe ={handleRecipe}/>}

          
                
                    <ClaudeRecipe  generatedRecipe = {recipe}/>
        </main>
    )
}

