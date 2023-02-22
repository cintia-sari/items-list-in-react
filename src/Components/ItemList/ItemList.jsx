import React from 'react'

export default function ItemList(props) {

  const delet=(e)=>{
     props.itemDelete(e.target.dataset.id)
     
  }

 

    const itemList= props.itemList.map(item=>(
               <div> {item.name}
                    <button onClick={delet} data-id={item.id}>delete</button>
                    
                </div>));
    
  return (
    <div>
      {itemList}
    </div>
  )
}
