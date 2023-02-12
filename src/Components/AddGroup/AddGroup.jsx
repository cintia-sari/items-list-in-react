import React from 'react'

export default function AddGroup(props) {
  const handleSubmit=(e)=>{
    e.preventDefault();
      props.groupAddition();

  }
  return (
    <>
      <form
          action="#"
          method='GET'
          onSubmit={handleSubmit}
          >
            <div>
              <button>Add New Group</button>
            </div>

      </form>
    </>
  )
}
