export function Card(props){ 
  return(
    <>
      <div className="card" onClick={()=>props.handleOpenCharacterModal(props.indexCharacter)}>
        <img className="card__img" src={props.characterProps.img}/>
      </div>
    </>
  )
}