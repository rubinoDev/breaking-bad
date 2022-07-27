import { ModalContainer } from "./style"

export function CharacterModal(props){
  const characterProps = props.allCharacters[props.selectedCharacterIndex]
  const characterOccupations = characterProps.occupation

  return(

      <ModalContainer
      isAlive ={characterProps.status === "Alive"}
      >
        <img className="modal__img" src={characterProps.img}/>

        <div className="modal__text__container">
          <p className="modal__text">{characterProps.name}</p>
          <p className="modal__text"><strong>Nickname : </strong>{characterProps.nickname}</p>
          <p className="modal__text"><strong>Occupation(s) : </strong> 
          {characterOccupations.map(occ=>{
            if(characterOccupations.indexOf(occ,0) === characterOccupations.length-1){
              return(
                occ
              )
            }else{
              return(
                occ + ", "
              )
            }   
          })
          }</p>
          <p className="modal__text"><strong>Portrayed : </strong>{characterProps.portrayed}</p>
          <p className="modal__text"><strong>Status : </strong><span className="modal__text status">{characterProps.status}</span></p>

        </div>

      </ModalContainer>

  )
}