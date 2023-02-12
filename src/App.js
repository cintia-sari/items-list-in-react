import { useState } from 'react';
import './App.css';
import AddGroup from './Components/AddGroup/AddGroup';
import GroupList from './Components/GroupList/GroupList';

function App() {
  const [state,setState]= useState(
    {
      group:[{
        title : "New Item",
        rename: false,
        id : 0 
      }
      ],
      nextId:1 ,

    }
  );

  function groupAddition(){
    setState({
      group:[...state.group,{
        title: "New Item",
        rename:false,
        id: state.nextId
      }],
      nextId: state.nextId +1,
    })
  }

  function handleDelet(id){
      const newGroup= state.group.filter(group=>String(group.id) !== id);
      setState({
        group:newGroup
      })
  }

  function renameButton(id){//Eza f
     const changeGroupName= state.group.map(item=>{
        if(String(item.id) === id){
          item.rename = !item.rename;
        }
        return item
     })

    setState({
      group: changeGroupName,
      //nextId: state.nextId
    })
    
  }

  return (
    <div className="App">
      <AddGroup groupAddition={groupAddition} />
      <GroupList 
          groupList={state.group}
          handleDelet={handleDelet}
          renameButton={renameButton}/>
    </div>
  );
}

export default App;
