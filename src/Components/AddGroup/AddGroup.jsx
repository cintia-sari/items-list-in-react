import React from 'react'

export default function AddGroup(props) {
  const handleSubmit=(e)=>{
    e.preventDefault();
      props.groupAddition();

  }
  return (
     <div>
        <button onClick={handleSubmit}>Add New Group</button>
     </div>
  )
}
