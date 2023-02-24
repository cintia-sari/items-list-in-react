import React from 'react';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';




export default function AddGroup(props) {
  const handleSubmit=(e)=>{
    e.preventDefault();
      props.groupAddition();

  }
  return (
     <div>
      <AddToPhotosIcon onClick={handleSubmit}/>
     </div>
  )
}
