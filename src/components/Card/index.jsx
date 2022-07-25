import { useEffect, useState } from "react";
import Modal from 'react-modal';


export function Card(props){

  return(
    <>
      <div className="card" onClick={props.handleOpenCharacterModal}>
        <img className="card__img" src={props.characterProps.img}/>
      </div>

    </>
    
  )
}