import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import { RecipeWrapper } from "../styles/recipeStyles"

const RecipeTemplate = ({ data }) => {
  const recipe = data.contentfulRecipe
  const image = getImage(recipe.imageRecipie)

  return (
  <Layout>
    <RecipeWrapper>
      <h1>{recipe.titleRecipie}</h1>

      <div className="meta">
        <p>Cook time: {recipe.cookTimeRecipie} minutes</p>
        <p>Difficulty: {recipe.difficultyRecipie}</p>
      </div>

      {image && (
        <div className="image">
          <GatsbyImage image={image} alt={recipe.titleRecipie} />
        </div>
      )}

      <h2>Ingredients</h2>
      <div className="ingredients">
        {documentToReactComponents(JSON.parse(recipe.ingredientsRecipe.raw))}
      </div>

      <h2>Instructions</h2>
      <div className="instructions">
        <p>{recipe.instructionsRecipie.instructionsRecipie}</p>
      </div>
    </RecipeWrapper>
  </Layout>
)
}

export const query = graphql`
  query ($slug: String!) {
    contentfulRecipe(slugRecipie: { eq: $slug }) {
      titleRecipie
      cookTimeRecipie
      difficultyRecipie

      imageRecipie {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }

      ingredientsRecipe {
        raw
      }

      instructionsRecipie {
        instructionsRecipie
      }
    }
  }
`

export default RecipeTemplate