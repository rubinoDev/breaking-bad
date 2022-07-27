import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #369457;

    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    padding-block: 2rem;

    position: relative;

    transition: background-color ease-in-out 0.3s;

    ${({ darkMode }) => darkMode && `
    background: #2C3333;
    `}

    .logoSvg{
      width:10rem;

      path{
        transition: background-color ease-in-out 0.3s;

        ${({ darkMode }) => darkMode && `
      fill: #FEFEFE;
      `}
      }
    }

    .toggler {
    position: absolute;
    right: 18rem;
    display: flex;
    align-items: center;
  }
  
  .toggler p {
    font-size: 1rem;
    font-weight: 600;
  }

  .toggler--slider {
    width: 25px;
    height: 13px;
    background-color: #2B283A;
    border-radius: 2rem;
    margin-inline: 7px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    box-sizing: content-box;
    transition: ease-in-out 500ms;
    ${({ darkMode }) => darkMode && `
    border-color: white;
    background-color: #F5F5F5;
    justify-content: flex-end;
    `}
  }

    .toggler--slider--circle {
    height: 13px;
    width: 13px;
    background-color: white;
    border-radius: 50%;

    ${({ darkMode }) => darkMode && `
      background-color:black;
    `}
  }

    .toggler--light {
    color: #4E4E4E;
  }

    .toggler--dark {
    color: #D5D4D8;
  }

  @media(max-width:850px) {
    .toggler{
      right:5rem;
    }
  }
`