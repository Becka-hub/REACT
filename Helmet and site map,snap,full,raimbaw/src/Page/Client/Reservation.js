import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
const Reservation = () => {
  const [url, setUrl] = useState('');
  const [id, setId] = useState(0);
  const [radio, setRadio] = useState('');
  const [select, setSelect] = useState([]);
  const [item, setItem] = useState([]);

  const change = (e) => {
    setSelect(...select, e.target.value);
  }
  const changeRadio = (e) => {
    setRadio(e.target.value);
  }

  const handleAdd = () => {
    setItem([...item, { id, url }]);
  }
  // const handleAdd = () => {
  //   setItem([...item, value]);
  // }
  
  const json=item;
  const donner={radio,json};
  console.log(donner);
  return (
    <>
      <Helmet>
        <title>Reservation client</title>
        <meta name='description' content='Reservation client.' />
        <link rel='canonical' href="/client/reservation" />
      </Helmet>
      <div>
        <div className='form-group'>
          <input type="text" value={url}  onChange={(e) => setUrl(e.target.value)} className='form-control' placeholder='url' />
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} className='form-control' placeholder='id' />
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="1" onChange={change} id="inlineCheckbox1" />
              <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="2" onChange={change} id="inlineCheckbox2" />
              <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="3" onChange={change} id="inlineCheckbox2" />
              <label className="form-check-label" htmlFor="inlineCheckbox2">3</label>
            </div>
          </div>
          <label>Odin  <input type="radio" checked={radio==="odin"}  value="odin" onChange={changeRadio} /></label>
            <label>Thor  <input type="radio" checked={radio==="thor"} value="thor" onChange={changeRadio} /></label>
          <button className='btn btn-primary mt-2 w-100' onClick={handleAdd}>Ajouter</button>
        </div>
      </div>
    </>
  )
}

export default Reservation