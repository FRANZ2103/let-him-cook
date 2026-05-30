import ReactMarkdown from "react-markdown";

{
}
export default function ClaudeRecipe(props) {
  console.log("ClaudeRecipe component received recipe prop:", props.recipe); // Log the received prop
  console.log("Generated Recipe:", props.generatedRecipe); // Log the generated recipe

  return (
    <>
      <section>
        <article className="suggested-recipe-container" aria-live="polite">
          {/* <ReactMarkdown>{props.generatedRecipe}</ReactMarkdown> */}

          <div className="dg-result bg-[#ffffff] dark:bg-[#18181A] dark:text-gray-200">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="dg-result-title" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="dg-result-title" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="dg-result-title" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="dg-result-title" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="dg-result-body" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="dg-result-body list-decimal ml-6" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="dg-result-body" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="dg-result-body" {...props} />
                ),
              }}
            >
              {props.generatedRecipe}
            </ReactMarkdown>
          </div>
        </article>
      </section>
    </>
  );
}
