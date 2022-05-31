import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export function Navbar() {
    const [selected, setSelected] = useState(0);

    const isSelected = (id) => selected === id ? 'selected' : '';

    return (
        <div className='navbar'>
            <span> Favorites Image Manager </span>
            <div className='links'>
                <Link to="/" className={isSelected(0)} onClick={() => setSelected(0)}>Gallery</Link>
                <Link to="/favorites" className={isSelected(1)} onClick={() => setSelected(1)}>Favorites</Link>
            </div>
        </div>
    );
}
