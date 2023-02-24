import React from 'react';
import "./AddGroup.css";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';




export default function AddGroup(props) {
  const handleSubmit=(e)=>{
    e.preventDefault();
      props.groupAddition();

  }
  return (
     <div className='add-icon'>
      <AddToPhotosIcon onClick={handleSubmit}/>
     </div>
  )
}
