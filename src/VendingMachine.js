import React from 'react';
import { Link } from 'react-router-dom';
import vendingMachineImage from './images/vendingmachine.png';


const snacks = [
  { id: 1, name: "Tortrix", description: "Delicious Tortrix snack." },
  { id: 2, name: "Jarito", description: "Refreshing Jarito beverage." },
  { id: 3, name: "Sublime", description: "Tasty Sublime treat." },
];

function VendingMachine() {
  return (
    <div>
      <h3>Bienvenidos.</h3>
      <h4>Me haces falta, y tengo lo que te falta</h4>
      <h5>A snack for my snack - Please choose a snack 💖:</h5>
      <img src={vendingMachineImage} alt="Vending Machine" style={{ width: '300px', height: '300px' }} />

      <p>Snacks available:</p>
      <ul style={{ listStyleType: 'disc' }}>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/${snack.name.toLowerCase()}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendingMachine;
