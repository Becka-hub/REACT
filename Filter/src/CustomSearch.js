import React, { useState, useEffect } from 'react'

function CustomSearch() {
    const [userData, setUserData] = useState([]);
    const [userSearchData, setUserSearchData] = useState([]);

    const [name, setName] = useState('');
    const [profession, setProfession] = useState([]);
    useEffect(() => {
        const data = [
            { name: "Manoj", age: "29", profession: "SE" },
            { name: "Virat", age: "32", profession: "Batsman" },
            { name: "Rohit", age: "28", profession: "Batsman" },
            { name: "Shami", age: "31", profession: "Bowler" },
            { name: "Bumrah", age: "30", profession: "Bowler" },
        ];
        setUserData(data);
        setUserSearchData(data);
    }, [])

    const handleSearch = () => {
        const newData = userData.filter(x =>
            x.name == (name == '' ? x.name : name)
        ).filter(y =>
            y.profession == (profession == '' ? y.profession : profession)
        )
        setUserSearchData(newData);

    }
    return (
        <div className="mt-5">
            <table>
                <tr>
                    <td>
                        <input type="text" className="form-control" placeholder="Enter name..." onChange={(e) => setName(e.target.value)} />
                    </td>
                    <td>
                        <select className="form-control" onChange={(e)=>setProfession(e.target.value)}>
                            <option value=''>-Select-</option>
                            <option value='Batsman'>Batsman</option>
                            <option value='SE'>SE</option>
                            <option value='Bowler'>Bowler</option>
                        </select>
                    </td>
                    <td>
                        <button className="btn btn-success btn-sm" onClick={handleSearch}>Recherche</button>
                    </td>
                </tr>
            </table>
            <table className="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Profession</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userSearchData && userSearchData.length > 0 ?
                            userSearchData.map((item) =>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.profession}</td>
                                </tr>
                            ) :
                            <tr>
                                <td>User not Fond</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomSearch;