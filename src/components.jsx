

const Person = (props) => {
    
console.log(props)
  return (
    <div className="card" style={{
        backgroudColor: props.color
    }}>
        <h2>Bienvenido al Juego {props.nombre}</h2>
        <h3>Tu personaje tiene {props.edad} años</h3>
        <h4>El seudónimo de tu personaes es <b>{props.nickname} de la muerte</b> </h4>
        <p>Caracteristicas del Personaje {props.info.estadoCivil} 
        </p>

        <p>Estado Civil: {props.info.estadoCivil} </p>

        <p>Pareja: {props.info.esposa} </p>
        <p>Hijos: {props.info.hijos} </p>

        <ul> <b>Tus Habilidades son:</b> {props.myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
        <p>Jugador nivel Senior ? {props.senior ? "Super Senior": "Trainee"}</p>
        

    </div>
  )
}

export default Person