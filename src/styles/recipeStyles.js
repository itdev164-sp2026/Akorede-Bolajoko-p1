import styled from "styled-components"

export const RecipeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media (max-width: 600px) {
    padding: 0 1rem 3rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 1.8rem;
    }
  }

  .meta {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: #555;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .image {
    margin-bottom: 2rem;
    border-radius: 10px;
    overflow: hidden;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  .ingredients,
  .instructions {
    font-size: 1.1rem;
    line-height: 1.7;

    @media (max-width: 600px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  ul {
    padding-left: 1.5rem;
  }
`