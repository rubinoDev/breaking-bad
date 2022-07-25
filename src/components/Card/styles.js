import styled from "styled-components";

export const Container = styled.main` 

  flex-wrap: wrap;
  display:flex;
  justify-content:center;
  align-items:center;

  background-color: #FEFEFE;

  width:100%;

  padding: 5rem;

  transition: background-color ease-in-out 0.3s;

  ${({ darkMode }) => darkMode && `
    background: #2C3333;
  `}

  .card{
    width: 25rem;
    height: 30rem;

    padding: 1rem;

    .card__img{
      width: 100%;
      height: 100%;

      border-radius: 2rem;

      cursor:pointer;

    }

  }
`