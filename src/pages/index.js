import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { HomeWrapper, RecipeGrid, RecipeCard } from "../styles/homeStyles"

const HomePage = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
  <Layout>
    <HomeWrapper>
      <h1>Welcome to Taste of Naija</h1>

      <RecipeGrid>
        {recipes.map(recipe => {
          const image = getImage(recipe.imageRecipie)

          return (
            <Link 
              to={`/recipes/${recipe.slugRecipie}`} 
              key={recipe.slugRecipie}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RecipeCard>
                {image && (
                  <GatsbyImage 
                    image={image} 
                    alt={recipe.titleRecipie} 
                  />
                )}
                <h2>{recipe.titleRecipie}</h2>
              </RecipeCard>
            </Link>
          )
        })}
      </RecipeGrid>
    </HomeWrapper>
  </Layout>
)
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        titleRecipie
        slugRecipie
        imageRecipie {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default HomePage