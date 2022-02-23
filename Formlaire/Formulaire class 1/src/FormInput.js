import React, { Component } from 'react'

class FormInput extends Component {
    state = {
        nom: '',
        age: '',
        ville: '',
        items: []
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        // alert(this.state.nom+" "+this.state.age+" "+this.state.ville)
        this.setState({
            items: [...this.state.items, { nom: this.state.nom, age: this.state.age, ville: this.state.ville }],
            nom: '',
            age: '',
            ville: '',
        });
    }
    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <div className="body">
                       <h2>{item.nom}</h2>
                       <hr/>
                       <p>Tu a l'age {item.age}</p>
                       <p>Tu vis à {item.ville}</p>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                <div className="card my-3">
                    <div className="card-header">
                        <h5 className="text-center">Ajoute Personne</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" className="form-control form-control-sm" onChange={this.onChange} name="nom" value={this.state.nom} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="text" className="form-control form-control-sm" onChange={this.onChange} value={this.state.age} name="age" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input type="text" className="form-control form-control-sm" onChange={this.onChange} value={this.state.ville} name="ville" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary btn-sm btn-block" type="submit">Créer votre Fiche</button>
                            </div>
                        </form>
                    </div>
                </div>
                {this.renderCard()}
            </div>
        );
    }
}
export default FormInput;