import React, { Component } from 'react';
import Contact from './Contact';
 class Contacts extends Component {

    state={
        contacts:[
            {
                id:1,
                nom:"Jack Something",
                email:"jack@gmail.com",
                tel:"000 000 00"
            },
            {
                id:2,
                nom:"Laura smith",
                email:"Laura@gmail.com",
                tel:"111 111 11"
            },            {
                id:3,
                nom:"Tom Watson",
                email:"Tom@gmail.com",
                tel:"333 333 33"
            }
        ]
    }

    deleteContact=(id)=>{
        const newContact=this.state.contacts.filter(contact=>
            contact.id!==id
            );
        this.setState({
            contacts:newContact
        })
    }

    render() {
        return (
            <div>
                 {this.state.contacts.map(contact=>(
                  <Contact 
                   key={contact.id}
                   nom={contact.nom}
                   email={contact.prenom}
                   tel={contact.tel} 
                   deleteClickHandler={this.deleteContact.bind(this,contact.id)}                 
                   />
                 ))}
            </div>
        )
    }
}

export default Contacts;