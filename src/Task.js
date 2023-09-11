import React from 'react'

function Task({props}) {
  return (
    <div className='task'>
    <h6>id:{props.id}</h6>
    <p className='desc'>des:{props. description}</p>
    <input type='checkbox' checked={props.isdone}/>
    </div>
  )
}

export default Task