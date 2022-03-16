import React,{useEffect,useState} from 'react'
import FormatTime from '../utils/Format';
const End = ({results,data,onReset,time}) => {
    const [correctAnswers,setCorrectAnswers]=useState(0);
    useEffect(()=>{
        let correct=0;
        results.forEach((result,index)=>{
            if(result.a===data[index].answer){
                correct++;
            }
        })
        setCorrectAnswers(correct);
    })
  return (
    <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
    <h3>Your resulat</h3>
    <p>{correctAnswers} of {data.length}</p>
    <p><strong>{Math.floor((correctAnswers/data.length)*100)}%</strong></p>
    <p><strong>Your time:</strong>{FormatTime(time)}</p>
    <button className='btn btn-danger' onClick={onReset}>Try again</button>
    </div>
  </div>
  )
}
export default End