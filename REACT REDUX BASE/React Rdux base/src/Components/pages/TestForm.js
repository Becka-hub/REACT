import React, { Component } from 'react'

class TestForm extends Component {

    state={
        name:null,
        age:null,
        gender:null
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.addUser(this.state);
    }
    render() {
        return (
            <div className="my-3">
                  <form onSubmit={this.submit}>
                      <lable htmlFor="name">Nom:</lable>
                      <input type="text" id="name" onChange={(e)=>this.setState({name:e.target.value})}/>
                      <lable htmlFor="age">Age:</lable>
                      <input type="text" id="age" onChange={(e)=>this.setState({age:e.target.value})}/>
                      <lable htmlFor="sexe">Sexe:</lable>
                      <input type="text" id="sexe" onChange={(e)=>this.setState({sexe:e.target.value})}/>
                      <button>Envoyer</button>
                  </form>
            </div>
        )
    }
}
export default TestForm;