import ReactMarkdown from "react-markdown";

export default function RecipeAI(props) {
  return (
    <>
      <section>
        <article className="suggested-recipe-container" aria-live="polite">
          <div className="dg-result bg-[#ffffff] dark:bg-[#18181A] dark:text-gray-200 ring-1 ring-black/10 dark:ring-[#FF6B6B]/10">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="dg-result-title " {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="dg-result-title dark:text-[#F0EFE8]"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="dg-result-title dark:text-[#F0EFE8]"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="dg-result-title" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="dg-result-body dark:text-[#F0EFE8] list-disc"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="dg-result-body list-decimal ml-6 dark:text-[#F0EFE8] text-[#1a1a18]"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li
                    className="dg-result-body dark:text-[#F0EFE8]"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="dg-result-body dark:text-[#F0EFE8]"
                    {...props}
                  />
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
