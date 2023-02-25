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
    <div key={group.id} className="examTable">{ group.rename ?
        <div className='group-title-edit'>
            <label>
              <input 
              type="text"
              onChange={rename}
              name="item-name"
              value={group.title}
              data-id={group.id}
              required
              />
              </label>
              <Save
              className='icon'
              onClick={editing}
              data-id={group.id}
              type='submit' />
        </div>
        : 
        <div key={group.id}>
           <div className='delet-icon-div'><Delet onClick={delet} data-id={group.id} fontSize="inherit" className='icon'/></div>
            <div>
              <h2 onDoubleClick={editing} data-id={group.id} className="group-title" >
                {group.title} 
              </h2>
    
            </div>
            <div className='all-knowledge-div'>All knowledge: {group.allKnowledge}% </div>
            
            <div className='exam-date'> { group.setExamDate ?
              <label for="examDate" key="examDate">
                <input type="date" className='exam-date'value={group.examDate} onChange={newDate} data-id={group.id}/>
                <OkCalendar className='icon calendar-icon' fontSize="inherit" button onClick={examDateButton} data-id={group.id}/>
              </label>
           
              :
              <label>
                {group.dayLeft} day Left
                <Calendar fontSize="inherit" className='icon calendar-icon' onClick={examDateButton} data-id={group.id}/>
              </label>
              }
            </div>
            <div className='add-icon-div'><AddIcon className='icon' onClick={addItem} data-id={group.id} fontSize="inherit"/></div> 
    </div>}
          <ItemList
                    itemList={group.itemsList}
                    itemDelete={props.itemDelete}
                    itemEdit={props.itemEdit}
                    itemRename={props.itemRename}
                    knowledgeChange={props.knowledgeChange}
                    setTheTheorem={props.setTheTheorem}
                    />
     </div>
  ))


  return (
    <>
      {groupList}
    </>
  )
}
