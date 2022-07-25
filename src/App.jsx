import { useEffect, useState } from "react"
import Modal from 'react-modal';
import { MouseResponse } from "easy-react-animation"

import { Card } from "./components/Card"
import { CharacterModal } from "./components/CharacterModal";
import { Header } from "./components/Header"


import './styles/reset.css'
import {Container} from '/src/components/Card/styles.js'


Modal.setAppElement('#root');
function App() {

  const [allCharacters,setAllCharacters] = useState([])
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false)

  const [darkMode,setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  function handleOpenCharacterModal(){
    setIsCharacterModalOpen(true)
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
          if(character.img === "https://static.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20111012055605"){
            return
          }else{
            return(
              <div key={character.char_id}>
              
              <MouseResponse >
                <Card 
                characterProps={character}
                isCharacterModalOpen={isCharacterModalOpen}
                handleOpenCharacterModal={handleOpenCharacterModal}
                handleCloseCharacterModal={handleCloseCharacterModal}
                />
              </MouseResponse>

              <Modal
                isOpen={isCharacterModalOpen}
                onRequestClose={handleCloseCharacterModal}
                >
                <CharacterModal
                  characterProps={character}
                />
              </Modal>
              </div>                  
            )
          }
        }) 
        }
        
      </Container>
     
    </div>
  )
}

export default App
