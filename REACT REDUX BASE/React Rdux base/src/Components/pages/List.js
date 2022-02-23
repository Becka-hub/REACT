import React from 'react'
function List(props) {
    let data = props.nameList.map((name) => {
        // if (name.age >= 18) {
        //     return (
        //         <div className="list d-flex" key={name.id}>
        //             <h4>{name.name}</h4>
        //             <h4 className="mx-2">{name.age}</h4>
        //             <h4 className="mx-2">{name.sexe}</h4>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <h3 className="text-danger">Les Mineurs:</h3>
        //             <div className="list d-flex" key={name.id}>
        //                 <h4 className="mx-2">{name.name}</h4>
        //                 <h4 className="mx-2">{name.age}</h4>
        //                 <h4 className="mx-2">{name.sexe}</h4>
        //             </div>
        //         </div>
        //     );
        // }

        //OU operation ternaire

        return name.age >= 12 ? (
            <div className="list d-flex" key={name.id}>
                <h4>{name.name}</h4>
                <h4 className="mx-2">{name.age}</h4>
                <h4 className="mx-2">{name.sexe}</h4>
                <button onClick={()=>props.deleteUser(name.id)}>Suprimer</button>
            </div>
        ) : (
            <div>
                <h3 className="text-danger">Les Mineurs:</h3>
                <div className="list d-flex" key={name.id}>
                    <h4 className="mx-2">{name.name}</h4>
                    <h4 className="mx-2">{name.age}</h4>
                    <h4 className="mx-2">{name.sexe}</h4>
                    <button onClick={()=>props.deleteUser(name.id)}>Suprimer</button>
                </div>
            </div>
        )

    });
    return (
        <div className="my-3">
            <h1>List des Personnes</h1>
            <div className="dataList">{data}</div>
        </div>
    )
}

export default List;