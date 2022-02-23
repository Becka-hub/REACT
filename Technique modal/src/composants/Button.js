import React, { Component } from 'react'
import './Button.css';
import Modal from './Modal';
 class Button extends Component {
     state={
         visible:false
     }
     visible=()=>{
         this.setState({
            visible: true
         });
     }
     cache=()=>{
         this.setState({
            visible: false
         });
     }
    render() {
        return (
            <div>
                <button className="button" onClick={this.visible}>CLIQUE MOI</button>
                {/* {this.state.visible?(<Modal />):null} */}
                <Modal 
                visible={this.state.visible}
                cache={this.cache}
                />
            </div>
        )
    }
}
export default Button;