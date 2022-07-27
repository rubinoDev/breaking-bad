import styled from "styled-components";

export const Container = styled.main` 

  flex-wrap: wrap;
  display:flex;
  justify-content:center;
  align-items:center;

  background-color: #F0EBE3;

  width:100%;

  padding: 5rem;

  transition: background-color ease-in-out 0.3s;


  ${({ darkMode }) => darkMode && `
    background: #2C3639;
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

      box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
    }

  }
`