import React from 'react'

export default function ItemList(props) {

    const itemList= props.itemList.map(item=>(
                <div key={item.id}>
                    {item.name}
                    <button>Edit</button>

                </div>
    ));
    
  return (
    <div>
      {itemList}
    </div>
  )
}
