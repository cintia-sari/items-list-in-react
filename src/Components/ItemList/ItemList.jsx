import React from 'react'

export default function ItemList(props) {

  const delet=(e)=>{
     props.itemDelet(e.target.dataset.id)
     
  }

    const itemList= props.itemList.map(item=>(
               <div> {item.name}
                    <button onClick={delet} data-id={item.id}>delet</button>
                </div>));
    
  return (
    <div>
      {itemList}
    </div>
  )
}
