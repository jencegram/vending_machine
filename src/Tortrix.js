import React from 'react';
import { Link } from 'react-router-dom';
import tortrixImage from './images/tortrix.png';

function Tortrix() {
  return (
    <div>
      <h1>Tortrix</h1>
      <img src={tortrixImage} alt="Tortrix" />
      <p>"Ah, corazón, your tastebuds deserve a fiesta, and Tortrix is the life of the party! It's not just a chip, it's a whirlwind romance of spice and crunch. Surrender to the sizzle, and let each bite dance a salsa in your mouth. Vamos, let's turn snacking into a passionate affair!"</p>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default Tortrix;