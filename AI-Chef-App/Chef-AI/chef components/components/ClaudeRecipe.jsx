import ReactMarkdown from "react-markdown";

{
}
export default function ClaudeRecipe(props) {
  console.log("ClaudeRecipe component received recipe prop:", props.recipe); // Log the received prop

  return (
    <>
      <section>
        <article className="suggested-recipe-container" aria-live="polite">
          {/* <ReactMarkdown>{props.generatedRecipe}</ReactMarkdown> */}
          <div className="dg-result">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="dg-result-title" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="dg-result-body" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="dg-result-body" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="dg-result-body" {...props} />
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
