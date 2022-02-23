import React, { Component } from 'react';

class Contact extends Component {


    state = {
        show: false,
    }
    // montreContact = () => {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }
    onDeleteClick=()=>{
        this.props.deleteClickHandler();
    }
    render() {
        return (
            <div className=" card card-body mb-3">
                <h4>{this.props.nom}&nbsp; <button className="btn btn-sm btn-success" onClick={() =>
                    this.setState({
                        show: !this.state.show
                    })}>u</button> &nbsp;<button className="btn btn-danger btn-sm" onClick={this.onDeleteClick} style={{ cursor:'pointer',float:'right',color:'white', }}>X</button></h4>
                {
                    this.state.show ? (<ul className="list-group">
                        <li className="list-group-item">
                            Email: {this.props.email}
                        </li>
                        <li className="list-group-item">
                            Téléphone: {this.props.tel}
                        </li>
                    </ul>) : null
                }

            </div >
        )
    }
}
export default Contact;