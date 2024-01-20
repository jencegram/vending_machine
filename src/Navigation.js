import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navigation.css'

function Navigation() {
  return (
    <nav className="nav-bar">
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/tortrix">Tortrixs</NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/jarito">Jarritos</NavLink>
      <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} to="/sublime">Sublimes</NavLink>
    </nav>
  );
}

export default Navigation;
