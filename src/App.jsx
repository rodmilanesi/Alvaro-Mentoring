import { useState } from 'react'
import reactLogo from './assets/evel.svg'
import './App.css'
import Person from './components'

function App() {
  

  return (
    <>
      <div>
        <a href="https://yandex.com/games/app/179612?utm_medium=search&utm_source=google&utm_campaign=en-tier2_games_category_all_google_search%7C17880492422&utm_term=arcade%20games#app-id=179612&catalog-session-uid=catalog-0db72d1a-de42-584e-8bde-b44c27ddeca3-1683342819810-7f8f&rtx-reqid=557466801891274810&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22arcade%22%7D" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className = "titleGame">Juego del Dev.</h1>
        <Person nombre="Álvaro" edad="33" nickname="Peluca" info={{estadoCivil: 'Casado', esposa:'Karina', hijos:'El gato'}} myArray = {["Programar", "Desarrollar", "Tener Peluca", "El Niño de las 4 A"]}/>
        <Person nombre="Rodrigo" edad="33" nickname="Vairax" info={{estadoCivil: 'Casado', esposa:'Ángela', hijos:'Abby'}} myArray = {["Programar", "Desarrollo Trainee", "Piloto Karting", "Tener Pasaporte Italiano"]}/>

        
    
      <p className="read-the-docs">
        Click on the logo to play de game
      </p>
    </>
  )
}

export default App
