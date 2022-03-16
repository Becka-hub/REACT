import {ChangeEvent, FC,useState} from 'react';
import {User} from './Interfaces';
import { HairColor } from './Enums';
 const Personne:FC<User>= (props)=> {
     const [country,setCountry]=useState<string | null>("");
     const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
         setCountry(e.target.value);
     }
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
      <input placeholder='White down your country...' onChange={handleChange} />
      {country}
      {HairColor.Blonde}
    </div>
  );
}
export default Personne;