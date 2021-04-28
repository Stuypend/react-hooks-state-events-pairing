import React, { useState } from 'react';

function VideoArea(props){
    // console.log(props.downvotes)
    const[count, setCount]= useState(props.upvotes)
    const[downCount, setDownCount]= useState(props.downvotes)
    
    let [isVisible, setIsVisible] = useState(false)

    function handleClick(){
        setCount(count + 1)
    }

    function handleDownVote(){
        setDownCount(downCount + 1)
    }

    function hideComments(){
        setIsVisible(!isVisible)
        // isVisible = isVisible == "Hide" ? "Show" : "Hide" 
        
    }

    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.views} Views | {props.date} </h3>
            <button onClick={handleClick}>👍 {count} </button>
            <button onClick ={handleDownVote}>👎{downCount}</button><br></br><br></br>
            <button onClick={hideComments} class="comment-btn">{isVisible ? "Hide" : "Show" } Comments </button>
        <hr></hr>
        </div>
    );
}
export default VideoArea;