import React from "react";
import {useSelector} from "react-redux";
import ThoughtItem from "./ThoughtItem";
// import postsArray from "./thoughts.json"
import "./index.css";

const ThoughtsList = () => {
  const postsArray = useSelector(state => state.thoughts)
  
  return(
   <ul>
     {
       postsArray.map(post =>
         <ThoughtItem key={post._id} post={post}/> )
     }
   </ul>
 );
};

export default ThoughtsList;