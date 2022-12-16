import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createThought} from "./thought-reducer";
import "./index.css";

const ThoughtItem = ({ post }
) => {

    const thoughts = useSelector(state => state.tuits);
    const [thought, setThought] = useState({do: ''});

    const dispatch = useDispatch();

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div class="post-heading"> 
                        <h4>Topic: {post.topic}</h4>  
                        <b>{post.userName} </b> 
                        {post.handle} - {post.time}
                    </div>
                    <div class="post-info">
                        {post.tuit}
                    </div>
                </div>
            </div>
            <hr></hr>
        </li>
    );
};

export default ThoughtItem;