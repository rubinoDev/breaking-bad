import { useEffect, useState } from "react"
import Modal from 'react-modal';

import { Card } from "./components/Card"
import { Header } from "./components/Header"

import { MouseResponse } from 'easy-react-animation';

import './styles/global.css'
import {Container} from '/src/components/Card/styles.js'
import { CharacterModal } from "./components/CharacterModal";


Modal.setAppElement('#root');
function App() {

  const [allCharacters,setAllCharacters] = useState([])
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false)
  const [selectedCharacterIndex,setSelectedCharacterIndex] = useState(0)
  const [darkMode,setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  function handleOpenCharacterModal(index){
    setIsCharacterModalOpen(true)
    setSelectedCharacterIndex(index)
  }
  
  function handleCloseCharacterModal(){
    setIsCharacterModalOpen(false)
  }

  useEffect(()=>{
    fetch("https://www.breakingbadapi.com/api/characters")
    .then(res => res.json())
    .then(data => setAllCharacters(data))
  }, [])

  return (
    <div className="App">
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <Container
      darkMode={darkMode}
      >
        {allCharacters.map(character =>{
          if(character.img === "https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605" ||
          character.name === "Eduardo Salamanca"
          ){
            return
          }else{
            return(
              <div key={character.char_id}>
                <MouseResponse depth="medium">
                  <Card 
                  characterProps={character}
                  handleOpenCharacterModal={handleOpenCharacterModal}
                  indexCharacter = {allCharacters.indexOf(character,0)}
                  />
                </MouseResponse>              
              </div>  
            )
          }
        }) 
        }
      </Container>

        <Modal
        isOpen={isCharacterModalOpen}
        onRequestClose={handleCloseCharacterModal}
        overlayClassName = "react-modal-overlay"
        className = "react-modal-content"
        >
          <CharacterModal
            allCharacters = {allCharacters}
            selectedCharacterIndex = {selectedCharacterIndex}
          />
      </Modal>
     
    </div>
  )
}

export default App
