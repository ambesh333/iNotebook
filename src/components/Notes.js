import React,{useContext} from "react";
import addNote from './addNote';
import noteContext from "../context/notes/NoteContext"
import NoteItem from "./NoteItem"
const Notes = () => {
    const context = useContext(noteContext)
    const {notes,addNote} = context;
    return (
        <>
        <addNote/>
        <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note)=>{
          return <NoteItem  key={note._id} note={note}/>
        })}
        </div>
        </>
    )
}

export default Notes
