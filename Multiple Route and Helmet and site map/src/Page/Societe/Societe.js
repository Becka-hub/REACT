import React from 'react'
import { useParams } from 'react-router-dom';

const Societe = () => {

  const {id} = useParams();
  console.log(id);

  return (
    <div>Societe</div>
  )
}

export default Societe