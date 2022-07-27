import styled  from "styled-components";

export const ModalContainer = styled.div`
  .modal__img{
    border-radius: 3rem 3rem .5rem .5rem;
    width:35rem;
    height:40rem;
  }

  .modal__text__container{
    text-align: center;
    margin-block:2rem;
  }

  .modal__text{
    color: #E9DAC1;
    font-size: 1.5rem;
  }
  .modal__text:nth-child(1){
    font-size: 3rem;
    font-weight: 700;
    color: white;
  }


  .modal__text strong{
    font-size: 1.8rem;
    color: white;
  }

  .modal__text:not(:last-child){
    padding-bottom: .8rem;
  }


  .modal__text.status{
    color : ${(props)=> props.isAlive
     ? 'green'   
     : 'red'
  }
    
  }

  .modal__text.status{
    font-weight: 600;
    letter-spacing: .15rem;
  }
`