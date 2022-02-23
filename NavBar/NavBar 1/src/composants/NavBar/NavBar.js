import React, { Component } from "react";
import MenuItems from './MenuItems';
import './NavBar.css';
class NavBar extends Component {
    state = {
        cliked: false
    }
    handleClick=()=>{
        this.setState(
            {
                cliked: !this.state.cliked
            }
        );
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <button className="btn_bars">{this.state.cliked?"X":"="}</button>
                </div>
                <ul className={this.state.cliked ?'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
}
export default NavBar;