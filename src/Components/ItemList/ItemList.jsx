import React from 'react';

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

 const setValue=(e)=>{
  props.knowledgeChange(e.target.dataset.id, e.target.value)
 }

    const itemList= props.itemList.map(item=>(
      <div>{ item.itemrename === true ?
                <div key={item.id} >
                  <label>
                    <input
                    value={item.name}
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
                    <div>
                      <label>
                       <div>level of knowledge :</div> 
                        <input 
                            value={item.knowledge}
                            data-id={item.id}
                            onChange={setValue}
                            type="range"
                            min="0"
                            max="100"
                            step="5" />
                        </label>
                        <div><span>{item.knowledge}%</span>
                        </div>
                      <label>
                        <input 
                          type="checkbox"
                          />
                          i have theorem
                      </label>
                    </div>
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
