import React from 'react';
import { Link } from 'react-router-dom';
import jarritosImage from './images/jarritos.png'

function Jarritos() {
  return (
    <div>
      <h1>Jarritos</h1>
      <img src={jarritosImage} alt="Jarritos" />
      <p>"Mi amor, why whisper sweet nothings when you can sing a love song with Jarritos? This isn't just a soda; it's the rhythm of life in a bottle, a bubbly serenade to your senses. Sip the vibrant joy, feel the fizz, and let your heart beat to the vibrant pulse of flavor. ¡Salud to the romance in every gulp!"</p>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default Jarritos;
