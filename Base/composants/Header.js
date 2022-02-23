import React,{Component} from "react";
import './header.css';
class Header extends Component{
    render(){
        return this.props.nom.map((pre)=>
        <h1 key={pre.id}>
            Salut {pre.nom} {pre.prenom} {pre.age}
            Salut {this.props.prenom}
        </h1>
        );
    }
}

export default Header;