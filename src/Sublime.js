import React from 'react';
import { Link } from 'react-router-dom';
import sublimeImage from './images/sublime.png';

function Sublime() {
  return (
    <div>
      <h1>Sublime</h1>
      <img src={sublimeImage} alt="Sublime" />
      <p>"Mi tesoro, elevate your chocolate experience with Sublime. Each piece is a tender tango of rich chocolate and crunchy nuts, a symphony of taste that cherishes your refined palate. Indulge in this embrace, and let the smooth, creamy whispers of Sublime seduce your senses. It's not just chocolate; it's a love story wrapped in gold."</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Sublime;