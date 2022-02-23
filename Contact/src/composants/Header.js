import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                     <div className="container">
                       <a href="/" className="navbar-brand">Liste de contacts</a>

                     </div>
                     <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                           <a href="/" className="nav-link">Accueil</a>
                        </li>
                     </ul>
                </nav>
            </div>
        )
    }
}
export default Header;