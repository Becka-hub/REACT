import React,{useState,useEffect,useRef} from 'react'

const Question = ({data,onAnswerUpdate,numberOfQuestion,activeQuestion,onSetActiveQuestion,onSetStep}) => {
    const [selected,setSelected]=useState('');
    const [error,setError]=useState('');
    const radioWrapper =useRef();
    useEffect(()=>{
      const findCheckInput=radioWrapper.current.querySelector('input:checked');
      if(findCheckInput){
          findCheckInput.checked=false;

      }
    },[data]);

    const changeHandler=(e)=>{
        setSelected(e.target.value);
        if(selected !== ''){
           setError('');
        }
    }

    const nextClickHandle=(e)=>{
       if(selected===''){
           return setError('Please select one option');
       }
       onAnswerUpdate(prevState=>[...prevState,{q:data.question,a:selected}]);
       setSelected('');
       if(activeQuestion < numberOfQuestion - 1){
           onSetActiveQuestion(activeQuestion + 1);
       }else{
           onSetStep(3);
       }
    }
  return (
    <div className="card shadow-sm" style={{ width: '30rem' }}>
    <div className="card-body">
      <h2 className='mb-5'>{data.question}</h2>
      <div className='control' ref={radioWrapper}>
         {data.choices.map((choice,i)=>(
            <label className='radio' key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                {choice}
            </label>
         ))}
      </div>
      {error && <div className='text-danger'>{error}</div>}
      <button className='btn btn-info' onClick={nextClickHandle} >Next</button>
    </div>
  </div>
  )
}

export default Question