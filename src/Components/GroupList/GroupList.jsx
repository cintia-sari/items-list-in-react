import React, { useState } from 'react'

export default function GroupList(props) {

  const delet=(e)=>{
     props.handleDelet(e.target.dataset.id);
  }

  const rename=(e)=>{
      props.renameButton(e.target.dataset.id)
  }
  
  const beállít = 
  <div>Valami</div>;

  const alap = `
  <div key={group.id}>
  {group.title}
  <button onClick={delet} data-id={group.id}>Töröl</button>
  <button onClick={rename} data-id={group.id}>{group.rename ? "beállít" : "Átnevez"}</button>
  <button>Tétel hozzáadása</button>
</div>);`

  const groupList = props.groupList.map(group=>(
    <div key={group.id}>
    {group.title}
    <button onClick={delet} data-id={group.id}>Töröl</button>
    <button onClick={rename} data-id={group.id}>{group.rename ? "beállít" : "Átnevez"}</button>
    <button>Tétel hozzáadása</button>
  </div>))
  return (
    <>
      {groupList}
    </>
  )
}
