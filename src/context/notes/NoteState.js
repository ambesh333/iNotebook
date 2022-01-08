
import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState =(props)=>{
   const notesInitial=[
    {
      "_id": "61d9737a37a93ba3ce808533",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:26.101Z",
      "__v": 0
    },
    {
      "_id": "61d9737d37a93ba3ce808535",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:29.973Z",
      "__v": 0
    },
    {
      "_id": "61d9737e37a93ba3ce808537",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:30.637Z",
      "__v": 0
    },
    {
      "_id": "61d9738037a93ba3ce808539",
      "user": "61d433912443f78d930d59e4",
      "title": "My Title",
      "description": "Please wake up ",
      "tag": "personal",
      "date": "2022-01-08T11:20:32.998Z",
      "__v": 0
    },
    
  ]
  const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={notes,setNotes}>
         { props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;