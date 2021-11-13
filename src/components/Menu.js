import React from 'react'
import "../styles/menu.css"
export default function Menu({toggleMenu}) {
    return (
        
            <div className="menu">
                <section onClick={toggleMenu} className="menu-overlay"> </section>
                <div className="menu-content">
            <button onClick={toggleMenu}>X</button>
           
            <div className="nav-menu-text">
                        <h2>Collection</h2>
                        <h2>Men</h2>
                        <h2>Women</h2>
                        <h2>About</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
            </div>
       
    )
}
