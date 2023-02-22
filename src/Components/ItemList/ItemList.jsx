import React from 'react'

export default function ItemList(props) {

  const delet=(e)=>{
     props.itemDelete(e.target.dataset.id)
     
  }

  const rename=(e)=>{
    props.itemRename(e.target.dataset.id,e.target.value)
  }

 const edit=(e)=>{
  props.itemEdit(e.target.dataset.id)
 }

    const itemList= props.itemList.map(item=>(
      <div>{ item.itemrename === true ?
                <div key={item.id} >
                  <label>
                    <input
                    value={item.value}
                    type="text"
                    data-id={item.id}
                    name="item-name"
                    onChange={rename}
                    required
                    />
                    <button onClick={edit} data-id={item.id} >Ok</button>
                  </label>
                </div>
              :
                <div key={item.id}>
                    {item.name}
                    <button onClick={delet} data-id={item.id}>Delete</button>
                    <button onClick={edit} data-id={item.id}>Edit</button>
                </div>
          } 
      </div>
      
      ));
    
  return (
    <div>
      {itemList}
    </div>
  )
}
