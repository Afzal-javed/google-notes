import React, { useState } from "react";
import Headers from "./Component/Headers";
import Createarea from "./Component/Createarea";
import Count from "./Component/Count";
import Note from "./Component/Note";
import Footer from "./Component/Footer";
function App(props){
    const [notes,setNotes]=useState([]);
    function addNote(newNote){
        setNotes((preValue)=>{
            return [...preValue,newNote]
        });
    }
    function deleteNotes(id){
        setNotes(preValue=>{
            return [...preValue.filter((note,index)=>
                index!==id )]
        })
    }
    return(
        <div>
            <Headers/>
            <Count count={notes.length===0? "Empty":
            `Showing ${notes.length} Notes in Database`} />
            <Createarea onAdd={addNote}/>
            {notes.map((note,index)=>(
                <Note key={index} 
                      id={index} 
                      title={note.title} 
                      content={note.content}
                      onDelete={deleteNotes}
                      />
                      ))}
                      <Footer/>
        </div>
    )
}
export default App;