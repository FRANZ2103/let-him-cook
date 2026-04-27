import ReactMarkdown from "react-markdown"

{/* <ReactMarkdown>{recipe}</ReactMarkdown> */}
    export default function ClaudeRecipe(props){
        console.log("ClaudeRecipe component received recipe prop:", props.recipe) // Log the received prop
        

    return(
        <>
        <section>
                    <article className="suggested-recipe-container" aria-live="polite">
                    <ReactMarkdown>{props.generatedRecipe}</ReactMarkdown>
                    </article>
                </section>
        </>
    )
}