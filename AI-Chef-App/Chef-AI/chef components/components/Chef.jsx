import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import PrevIngredients from "./PrevIngredients";
import chefLogo from "../assets/2chef-claude-icon.svg"

export default function Chef(props){
    const jumpToSection = React.useRef(null)
   const [ingredients,setIngredients] = React.useState([])
   const [recipe, setRecipe] = React.useState("")
   const [loading, setLoading] = useState(false)

   
React.useEffect(() => {
    console.log("Updated recipe:", recipe)
}, [recipe])
   

React.useEffect(() => {
    if (recipe) {
        jumpToSection.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
}, [recipe])
function removeIngredient(id){
    console.log("PROPS.ID! "+ id) 
    // const test = setIngredients(prev=>..prev.filter(whichPad))
    setIngredients(prevIngredients => prevIngredients.filter((ingredients)=>ingredients.id != id))
    
}


async function handleRecipe() {
    console.log("TESSSSSSSSSSSSTTT" +IngredientsList.length)
    const values = ingredients.map(item => item.value)
    setLoading(true)

    try {
        const airecipe = await getRecipeFromMistral(values)
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
            setIngredients(prev=>[...prev,{id:crypto.randomUUID(), value:fieldIngredient}])
            // const ingLogger = ingredients.map=>
            console.log(ingredients.map(ingredients =>(ingredients.value)))
            // console.log(recipeShown)
            // Function for adding an ingredient to the listed data
            //added if no ingredient, do not add to the list
            
        }
       }
       
    return(
        <main className="dg-main">
        <a className="btn" href="#games">Jump to GAmes</a>
            <p className="dg-eyebrow">AI-powered recipes</p>
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
                removeIngredient = {removeIngredient}
            />

            </div>
            
            <div id="games" ref={jumpToSection}>
                
          
                
                    <ClaudeRecipe  
                    id="test"
                    generatedRecipe = {recipe}/>
            </div>

        </main>
    )
}

