import React, { useState } from 'react'
import {IoIosAdd} from "react-icons/io"
function Createarea({submitbtn,onAdd}) {
    const [isExpended,setIsExpended]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    function handleChange(e){
        const{name,value}=e.target
        setNote(preValue=>{
            return{
                ...preValue,
                [name]:value,
            };
        });
    }
    function handleExpeneded(){
        setIsExpended(true)
    }
    function submitbtn(i){
        onAdd(note)
        setNote({
            title:"",
            content:"",
        })
        i.preventDefault();
    }
  return (
    <div>
        <form>
           {isExpended&&(
             <input 
             value={note.title} 
             type="text" 
             placeholder='Title' 
             name='title' 
             onChange={handleChange}/>
           )}
            <p>
                <textarea 
                    value={note.content} 
                    onClick={handleExpeneded}
                    name='content' 
                    placeholder='Take a note...' 
                    onChange={handleChange}>
                        rows={isExpended ? 3:1}
                    </textarea>
            </p>
            <button onClick={submitbtn}><IoIosAdd size={35}/></button>
        </form>
    </div>
  )
}

export default Createarea