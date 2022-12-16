import React, {useState} from "react";
import { createThought } from "./tuits/thought-reducer";
import {useDispatch} from "react-redux";

const Thoughts = () => {
 let [newThought, setNewThought] = useState('');
 const dispatch = useDispatch();
 const thoughtClickHandler = () => {
    const newThought = {
        thought: newThought
    }
    dispatch(createThought(newThought));
 }
 return (
   <div className="row">
     <div className="col-10">
       <textarea value={newThought} placeholder="Thought or Comments?"
               className="form-control border-0"
               onChange={(event) => setNewThought(event.target.value)}>
       </textarea>
       <div>
        {/* onClick={tuitClickHandler} */}
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 >
           Share
         </button>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default Thoughts;