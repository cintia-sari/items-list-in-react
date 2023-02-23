import React from 'react';
import ItemList from '../ItemList/ItemList';

export default function GroupList(props) {

  //const [dayLeft,setDayLeft]= React.useState('-')

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

  const examDateButton=(e)=>{
    props.setExamDate(e.target.dataset.id)
    }

  const newDate=(e)=>{
    return props.setNewDate(e.target.dataset.id,e.target.value)
  }


  const groupList = props.groupList.map(group=>(
    <div key={group.id}>{ group.rename ?
         <div>
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
            <div> { group.setExamDate ?
                     <label for="examDate" key="examDate">
                      <input type="date" name="exam-date" value={group.examDate} onChange={newDate} data-id={group.id}/>
                      <button onClick={examDateButton} data-id={group.id}>Save</button>
                      </label>
                    :
                    <>
                      <span>{group.dayLeft} day Left</span>
                      <button onClick={examDateButton} data-id={group.id}>Set Date</button>
                    </>
                  }
            </div>
          </div>}
          <ItemList
                    itemList={group.itemsList}
                    itemDelete={props.itemDelete}
                    itemEdit={props.itemEdit}
                    itemRename={props.itemRename}
                    knowledgeChange={props.knowledgeChange}
                    setTheTheorem={props.setTheTheorem}
                    />
     </div>))


  return (
    <>
      {groupList}
    </>
  )
}
