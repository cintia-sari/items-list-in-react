import React from 'react';
import ItemList from '../ItemList/ItemList';

export default function GroupList(props) {

  const delet=(e)=>{
     props.handleDelet(e.target.dataset.id);
  }

  const editing=(e)=>{
      props.editingButton(e.target.dataset.id)
  }
  
  const rename= (e)=>{
      props.renameButton(e.target.value, e.target.dataset.id)
  }

  const addItem=(e)=>{
    props.addNewItem( e.target.dataset.id)
  }


  const groupList = props.groupList.map(group=>(
    <div>{ group.rename ?
         <div key={group.id}>
            <label>
              <input 
              type="text"
              onChange={rename}
              name="item-name"
              value={group.title}
              data-id={group.id}
              required
              />
              <button 
                onClick={editing}
                data-id={group.id}
                type='submit'>Save</button>
            </label>
         </div>
         : 
         <div key={group.id}>
            {group.title}
            <button onClick={delet} data-id={group.id}>Delet</button>
            <button onClick={editing} data-id={group.id}>Edit</button>
            <button onClick={addItem} data-id={group.id}>Add Item</button>
          </div>}
          <ItemList itemList={group.itemsList}
                    itemDelet={props.itemDelet}/>
     </div>))


  return (
    <>
      {groupList}
    </>
  )
}
