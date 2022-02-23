import React, { Component } from 'react'
import List from './List';
import TestForm from './TestForm';
class Home extends Component {
    state = {
        nameList: [
            { id: 1, name: 'Alex', age: 26, sexe: 'Masculin' },
            { id: 2, name: 'Beckas', age: 23, sexe: 'Masculin' },
            { id: 3, name: 'Mine', age: 11, sexe: 'Fémin' }
        ]
    }

    addUser = (user) => {
        user.id = Math.random();
        this.setState({
            nameList: [...this.state.nameList, user]
        })
    }
    deleteUser = (id) => {
        let users = this.state.nameList.filter((user) => user.id != id);
        this.setState({
            nameList:users
        });
    }
    //cycle de vie
    // componentDidMount(){
    //     console.log("le composant fonction");
    // }
    render() {
        return (
            <div>
                <h1 className="text-center">Bienvenue dans mon Apps</h1>
                <List nameList={this.state.nameList} deleteUser={this.deleteUser} />
                <TestForm addUser={this.addUser}/>
            </div>
        )
    }

}
export default Home;