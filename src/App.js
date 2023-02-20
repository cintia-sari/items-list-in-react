import { useState } from 'react';
import React from "react";
import './App.css';
import AddGroup from './Components/AddGroup/AddGroup';
import GroupList from './Components/GroupList/GroupList';

function App() {
  const [state,setState]= useState(
    {
      group:[{
        title : "New Group",
        rename: false,
        id : 0, 
        itemsList:[{
          name :"Title name",
          itemrename:false,
          id:0
        }]
      }
      ],
      nextId:1 ,

    }
  );

  function groupAddition(){
    setState({
      group:[...state.group,{
        title: "New Group",
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

  function editingButton(id){//Eza f
     const chooseItem= state.group.map(item=>{
        if(String(item.id) === id){
          item.rename = !item.rename;
        }
        return item
     })

    setState({
      group: chooseItem,
      nextId: state.nextId
    })
    
  }

  function renameButton(newName,id){
    const rename = state.group.map(item=>{
      if( String(item.id) === id){
        item.title= newName
      }
    return item 
  })
    setState({
      group: rename,
      nextId: state.nextId
    })
      
    
  }

  function newItem(id){

  }

  return (
    <div className="App">
      <AddGroup groupAddition={groupAddition} />
      <GroupList 
          groupList={state.group}
          handleDelet={handleDelet}
          editingButton={editingButton}
          renameButton={renameButton}
          newItem={newItem}/>
      <ItemList/>
    </div>
  );
}

export default App;
