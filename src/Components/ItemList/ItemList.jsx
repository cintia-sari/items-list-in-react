import React from 'react';
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
      <div key={item.id}>{ item.itemrename === true ?
                <div>
                  <label>
                    <input
                    value={item.name}
                    type="text"
                    data-id={item.id}
                    name="item-name"
                    onChange={rename}
                    required
                    />
                    <Save onClick={edit} data-id={item.id}/>
                  </label>
                </div>
              :
                <div key={item.id}>
                  <Delet onClick={delet} data-id={item.id}/>
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
