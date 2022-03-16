import React from 'react'

const Start = ({onQuizStart}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h1>Start the quiz</h1>
        <p>Good luck</p>
        <button className='btn btn-success' onClick={onQuizStart}>Start</button>
      </div>
    </div>
  )
}

export default Start
