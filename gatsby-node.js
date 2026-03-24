exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulRecipe {
        nodes {
          slugRecipie
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    createPage({
      path: `/recipes/${recipe.slugRecipie}`,
      component: require.resolve("./src/templates/recipe-template.js"),
      context: {
        slug: recipe.slugRecipie,
      },
    })
  })
}