
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState =(props)=>{
   const notesInitial=[
    {
      "_id": "61d9737a37a93ba3ce8085343",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:26.101Z",
      "__v": 0
    },
    {
      "_id": "61d9737d37a93ba3ce8085635",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:29.973Z",
      "__v": 0
    },
    {
      "_id": "61d9737e37a93ba3ce8086537",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:30.637Z",
      "__v": 0
    },
    {
      "_id": "61d9738037a93ba3ce8084539",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:32.998Z",
      "__v": 0
    },
    {
      "_id": "61d9738037a93ba3ce8087539",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:32.998Z",
      "__v": 0
    },
    {
      "_id": "61d9738037a93ba3ce80768539",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:32.998Z",
      "__v": 0
    },
    
  ]
  
  const [notes, setNotes] = useState(notesInitial)

  //ADD a note
  const addNote=(title,description,tag)=>{
    //TODO api call
   note={
    "_id": "61d9738037a93ba3ce80768539",
    "user": "61d433912443f78d930d59e4",
    "title": "My Title TODO",
    "description": "Please wake up {ADDED} ",
    "tag": "personal",
    "date": "2022-01-08T11:20:32.998Z",
    "__v": 0
  };
  setNotes(notes.push(note));
  }
  
  //Delete a note
  const deleteNote=(id)=>{
    
  }
  
  //Edit a note
  const editNote=(id)=>{
    
  }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
         { props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;