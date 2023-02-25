import React from 'react';
import "./ItemList.css";

import Save from '@mui/icons-material/TaskAltRounded';
import Delet from '@mui/icons-material/DeleteForeverRounded';

export default function ItemList(props) {



const setTheorem=(e)=>{
  props.setTheTheorem(e.target.dataset.id)
}

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
      <div key={item.id} className="item-list-group">{ item.itemrename === true ?
                <div className='item-title-group'>
                  <label>
                    <input
                    value={item.name}
                    type="text"
                    data-id={item.id}
                    name="item-name"
                    onChange={rename}
                    required
                    />
                  </label>
                  <Save className='icon' onClick={edit} data-id={item.id}/>
                </div>
              :
                <div key={item.id}>
                  <div className='delet-icon-div'><Delet className='icon' onClick={delet} data-id={item.id}/></div>
                  <h3 className='item-title' onDoubleClick={edit} data-id={item.id}>{item.name}</h3>
                  
                    <div>
                      <label>
                       <div>level of knowledge : {item.knowledge}%</div> 
                        <input 
                            value={item.knowledge}
                            data-id={item.id}
                            onChange={setValue}
                            type="range"
                            min="0"
                            max="100"
                            step="5" />
                        </label>
                        <div>
                        </div>
                      <label>
                        <input
                          type="checkbox"
                          checked={item.theorem}
                          onChange={setTheorem}
                          data-id={item.id}
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
