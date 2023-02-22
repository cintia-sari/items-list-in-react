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
          id:0,
            }  
        ], 
      }
      ],
      nextId:1 ,
      nextItemId:1,
    }
  );


  function groupAddition(){
    setState({
      group:[...state.group,{
        title: "New Group",
        rename:false,
        id: state.nextId,
        itemsList:[],
      }],
      nextId: state.nextId +1,
      nextItemId: state.nextItemId 
    })
  }

  function handleDelet(id){
 
      const newGroup= state.group.filter(group=>{
        return String(group.id) !== id});

      setState({
        group:newGroup,
        nextId: state.nextId ,
        nextItemId:state.nextItemId
      })
  }


  function editingButton(id){
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

  function addNewItem(id){
   const newItem= state.group.map(item=>{
      if(String(item.id)=== id){
        item.itemsList = [...item.itemsList,{
          name :"Title name",
          itemrename:false,
          id:state.nextItemId}]
        }
        return item
      })
      setState({
      group:newItem,
      nextId: state.nextId ,
      nextItemId:state.nextItemId +1
      })
    }

    function itemDelete(id){
 
      //const newItem = state.group.map(group => Object.values(group.itemsList).filter(item=> item.id != id));
     const newItem = state.group.map(group=>{
      return {
        title: group.title,
        rename:group.rename,
        id:group.id,
        itemsList:group.itemsList.filter(item=>String(item.id) !==id)
      
        } 
      }) 
     
        setState({
        group:newItem,
        nextId: state.nextId ,
        nextItemId:state.nextItemId}) 
       
      }

      function itemEdit(id){
        const itemEdited = state.group.map(group=>{
        
          return {
            title: group.title,
            rename:group.rename,
            id:group.id,
            itemsList:group.itemsList.map(item=> {
              if(String(item.id) === id){
                item.itemrename = !item.itemrename;
              }
              return item;
                  })
                }})
       
          setState({
          group:itemEdited,
          nextId: state.nextId ,
          nextItemId:state.nextItemId}) 
      }

      function itemRename(id,newName){
        const itemEdited = state.group.map(group=>{
        
          return {
            title: group.title,
            rename:group.rename,
            id:group.id,
            itemsList:group.itemsList.map(item=> {
              if(String(item.id) === id){
                item.name = newName;
              }
              return item;
                  })
                }})
       
          setState({
          group:itemEdited,
          nextId: state.nextId ,
          nextItemId:state.nextItemId}) 
      
      }
console.log(state.group)
  return (
    <div className="App">
      <AddGroup groupAddition={groupAddition} />
      <GroupList 
          groupList={state.group}
          handleDelet={handleDelet}
          editingButton={editingButton}
          renameButton={renameButton}
          addNewItem={addNewItem}
          itemDelete={itemDelete}
          itemEdit={itemEdit}
          itemRename={itemRename}
        />
    </div>
  );
}

export default App;