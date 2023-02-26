import { useState } from 'react';
import React from "react";
import './App.css';
import AddGroup from './Components/AddGroup/AddGroup';
import GroupList from './Components/GroupList/GroupList';


function App() {
  const [state,setState]= useState(
    {
      group:[{
        title : "Exam name...",
        rename: false,
        examDate:null,
        dayLeft:"-",
        setExamDate: false,
        allKnowledge:0,
        id : 0, 
        itemsList:[{
          name :"Topic name...",
          itemrename:false,
          knowledge: 0,
          topic: false,
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
        title: "Exam name...",
        rename:false,
        id: state.nextId,
        examDate:null,
        dayLeft:"-",
        setExamDate: false,
        allKnowledge:0,
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
      nextId: state.nextId,
      nextItemId:state.nextItemId
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
      nextId: state.nextId,
      nextItemId:state.nextItemId
    })
       }

  function addNewItem(id){
   const newItem= state.group.map(item=>{
      if(String(item.id)=== id){
        item.itemsList = [...item.itemsList,{
          name :"Topic name...",
          itemrename:false,
          knowledge: 0,
          topic: false,
          id:state.nextItemId
        }]
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
 
     const newItem = state.group.map(group=>{
      return {
        title: group.title,
        rename:group.rename,
        examDate:group.examDate,
        dayLeft:group.dayLeft,
        setExamDate: group.setExamDate,
        allKnowledge:group.allKnowledge,
        id:group.id,
        itemsList:group.itemsList.filter(item=>String(item.id) !==id)
      
        } 
      }) 
        setState({
        group:newItem,
        nextId: state.nextId ,
        nextItemId:state.nextItemId})

        allKnowledge()
      }

      function itemEdit(id){
        const itemEdited = state.group.map(group=>{
        
          return {
            title: group.title,
            rename:group.rename,
            examDate:group.examDate,
            dayLeft:group.dayLeft,
            setExamDate: group.setExamDate,
            allKnowledge:group.allKnowledge,
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
            examDate:group.examDate,
            dayLeft:group.dayLeft,
            setExamDate: group.setExamDate,
            allKnowledge:group.allKnowledge,
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

    function knowledgeChange(id,newValue){
      const itemEdited = state.group.map(group=>{
        
        return {
          title: group.title,
          rename:group.rename,
          examDate:group.examDate,
          dayLeft:group.dayLeft,
          setExamDate: group.setExamDate,
          allKnowledge:group.allKnowledge,
          id:group.id,
          itemsList:group.itemsList.map(item=> {
            if(String(item.id) === id){
              item.knowledge = newValue;
            }
            return item;
                })
              }})
        setState({
        group:itemEdited,
        nextId: state.nextId ,
        nextItemId:state.nextItemId}) 

        allKnowledge()
    }

    function setTheTopic( id){
      const itemEdited = state.group.map(group=>{
        
        return {
          title: group.title,
          rename:group.rename,
          examDate:group.examDate,
          dayLeft:group.dayLeft,
          setExamDate: group.setExamDate,
          allKnowledge:group.allKnowledge,
          id:group.id,
          itemsList:group.itemsList.map(item=> {
            if(String(item.id) === id){
              item.topic = !item.topic;
            }
            return item;
                })
              }})
     
        setState({
        group:itemEdited,
        nextId: state.nextId ,
        nextItemId:state.nextItemId}) 
    }

    function setExamDate(id){
      const setDate= state.group.map(item=>{
        if(String(item.id) === id){
          item.setExamDate = !item.setExamDate;
        }
        return item
     })

    setState({
      group: setDate,
      nextId: state.nextId,
      nextItemId:state.nextItemId
    })
    }
  
    function setNewDate(id,newDate){
      const setNewDate = state.group.map(item=>{
        if(String(item.id) === id){
          item.examDate= newDate
        }
        dayLeft();
        return item
      })

      setState({
        group: setNewDate,
        nextId: state.nextId,
        nextItemId:state.nextItemId
      })
    }
    function dayLeft(){
      const day1 = new Date();
      const dayLeft= state.group.map(item=>{
        const day2=new Date(item.examDate);
        if(item.examDate !== null){
          item.dayLeft = Math.round((Math.abs(day2-day1))/1000/60/60/24);
        }
        return item;
      })

      setState({
        group: dayLeft,
        nextId: state.nextId,
        nextItemId:state.nextItemId
      });
    }

   function allKnowledge(){
    const setAllKnowledge = state.group.map(group=>{
      
      const knowledge= group.itemsList.map(item=>{const knowledge= item.knowledge;
                                            return knowledge})
      const knowledgeBlock=[];
            knowledgeBlock.push(knowledge);
      const addKnowledgeBlock=knowledgeBlock.reduce((a,b)=> a+b);
      const NumConversion= addKnowledgeBlock.map(szam=>parseInt(szam));
      const setAllKnowledge=parseInt((NumConversion.reduce((a,b)=>a+b))/NumConversion.length);
      group.allKnowledge =setAllKnowledge;
      return group}
      );

    setState({
      group: setAllKnowledge,
      nextId: state.nextId,
      nextItemId:state.nextItemId,
    });
   }

  return (
    <>
    <h1 className='title'> Exam Preparation List</h1>
    <span className='description'>This app will help you understand how you're progressing in your learning. This will help you plan more efficiently.</span>
    <AddGroup groupAddition={groupAddition} />
    <div className="App">
      <GroupList 
          groupList={state.group}
          handleDelet={handleDelet}
          editingButton={editingButton}
          renameButton={renameButton}
          addNewItem={addNewItem}
          itemDelete={itemDelete}
          itemEdit={itemEdit}
          itemRename={itemRename}
          knowledgeChange={knowledgeChange}
          setTheTopic={setTheTopic}
          setExamDate={setExamDate}
          setNewDate={setNewDate}
        />
    </div>
    </>
  );
}

export default App;