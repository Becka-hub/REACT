import React, { useState } from 'react';

const App = () => {
  const [cuisine, setCuisine] = useState([
    {
      "id":1,
      "name":"Italienne",
    },
    {
      "id":2,
      "name":"Famille",
    },
    {
      "id":3,
      "name":"Cannadienne",
    }
  ]);
  const [data,setData]=useState([
    {
      "id":1,
      "name":"Italienne",
      "check":false
    },
    {
      "id":2,
      "name":"Famille",
      "check":false
    },
    {
      "id":3,
      "name":"Cannadienne",
      "check":false
    }
  ]);

  const handleChangeCheck= id =>{
    setData((prev)=>{
   return prev.map((item)=>{
      if(item.id===id){
        return {...item, check:!item.check};
      }else{
        return {...item};
      }
   });
    });
  }

  return (
    <div className="App">
      <div>{data.map((data,index)=>data.check?<div key={index}>{data.name}</div>:'')}</div>
      <br/>
      <br/>
      <br/>
       {cuisine.map((el,index)=>{
        return(
          <div key={index}>
            <input type="checkbox" id={el} onChange={()=>handleChangeCheck(el.id)} />
            <label>{el.name}</label>
          </div>
        );
       })}
    </div>
  )
}

export default App