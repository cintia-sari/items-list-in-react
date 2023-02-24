import React from 'react';
import "./GroupList.css";

import ItemList from '../ItemList/ItemList';
import Delet from '@mui/icons-material/DeleteForeverRounded';
import AddIcon from '@mui/icons-material/Add';
import Calendar from '@mui/icons-material/CalendarMonthRounded';
import OkCalendar from '@mui/icons-material/EventAvailableRounded';
import Save from '@mui/icons-material/TaskAltRounded';

export default function GroupList(props) {

  //const [dayLeft,setDayLeft]= React.useState('-')

  const delet=(e)=>{
     props.handleDelet(e.target.dataset.id);
     console.log(e.target.dataset.id)
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
    <div key={group.id} className="examName">{ group.rename ?
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
              <Save
              onClick={editing}
              data-id={group.id}
              type='submit' />
            </label>
         </div>
         : 
         <div key={group.id}>
            <div onDoubleClick={editing} data-id={group.id}>
              {group.title} 
              <Delet onClick={delet} data-id={group.id}/>
            </div>
            <div>All knowledge: {group.allKnowledge}% </div>
            <AddIcon onClick={addItem} data-id={group.id}/>
            <div> { group.setExamDate ?
                     <label for="examDate" key="examDate">
                      <input type="date" name="exam-date" value={group.examDate} onChange={newDate} data-id={group.id}/>
                      <OkCalendar button onClick={examDateButton} data-id={group.id}/>
                     </label>
                    :
                    <>
                      <span>{group.dayLeft} day Left</span>
                      <Calendar onClick={examDateButton} data-id={group.id}/>
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
