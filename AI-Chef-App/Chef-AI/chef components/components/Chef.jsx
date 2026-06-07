// https://headlessui.com/react/dialog
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import PrevIngredients from "./PrevIngredients";
import chefLogo from "../assets/2chef-claude-icon.svg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { getRecipeFromMistral } from "./ai";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
import Modal from "./Modal";
export default function Chef(props) {
  const notify = () =>
    toast.warn("Please enter an ingredient before adding", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const success = () =>
    toast.success("Recipe Generated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const jumpToSection = React.useRef(null);
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    console.log("Updated recipe:", recipe);
  }, [recipe]);

  React.useEffect(() => {
    if (recipe) {
      success();
      jumpToSection.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [recipe]);
  function removeIngredient(id) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredients) => ingredients.id != id),
    );
  }

  async function handleRecipe() {
    // console.log("TESSSSSSSSSSSSTTT" + IngredientsList.length);
    console.log("HERE ARE YOUR LENGTH");
    console.log(ingredients.length !== 0);
    if (ingredients.length !== 0) {
      const values = ingredients.map((item) => item.value);
      setLoading(true);

      try {
        const airecipe = await getRecipeFromMistral(values);
        setRecipe(airecipe);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      notify();
    }
  }
  function clearRecipe() {
    setRecipe("");
    toast.success("Recipe Cleared!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const fieldIngredient = formData.get("ingredient");
    if (fieldIngredient === "") {
      // alert("Please enter an ingredient before adding.")
      notify();
    } else {
      setIngredients((prev) => [
        ...prev,
        { id: crypto.randomUUID(), value: fieldIngredient },
      ]);
      console.log(ingredients.map((ingredients) => ingredients.value));
      // Function for adding an ingredient to the listed data
      //added if no ingredient, do not add to the list
    }
  }

  return (
    <>
      <main className="dg-main dark:bg-[#2c2b2f] dark:text-gray-200 pt-32">
        <p className="dg-eyebrow dark:text-[#F0EFE8]">AI-powered recipes</p>
        {/* <p>{ingredients.length} ingredients entered</p> */}
        <h1 className="dg-headline">What's in your kitchen?</h1>
        <p className="dg-subline dark:text-[#fdfdfe]">
          Add your ingredients and we'll craft the perfect recipe.
        </p>
        <div className="dg-card dark:bg-[#222220] border-0.9 border-[#e5e5e0] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          <form
            className="dg-input-row dark:bg-[#222220] "
            action={addIngredient}
          >
            <input
              className="dg-input border-8 border-indigo-600 dark:bg-[#222]"
              name="ingredient"
              type="text"
              placeholder="e.g. eggs, garlic, pasta..."
            />
            <button className="dg-add-btn dark:text-[#fdfdfe] bg-[#F0EFE8] dark:bg-[#2d2d2d] text-[#18181A] border border-[#1a1a18] dark:border-[#F0EFE8] ">
              {/* dark:bg-[#F0EFE8] bg-[#1a1a18] */}+ Add Ingredient
            </button>
          </form>

          <IngredientsList
            ingredients={ingredients}
            toggleShowRecipe={handleRecipe}
            recipeGenerated={recipe.length}
            clearRecipe={clearRecipe}
            loading={loading}
            removeIngredient={removeIngredient}
          />
        </div>

        <ToastContainer />

        <div ref={jumpToSection} className="pb-24">
          {recipe && <ClaudeRecipe id="test" generatedRecipe={recipe} />}
        </div>
      </main>
      <Footer />
    </>
  );
}
