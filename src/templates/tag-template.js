import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <div>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query getRecipesByTag($jesus: String) {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $jesus } } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        slug
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default TagTemplate
