import styled from "styled-components"

export const HomeWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    gap: 1.5rem;
  }
`

export const RecipeCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  }

  h2 {
    padding: 1rem;
    font-size: 1.3rem;
    color: #333;

    @media (max-width: 600px) {
      font-size: 1.1rem;
      padding: 0.8rem;
    }
  }
`