import React, { useState } from 'react';

function VideoArea(props){
    // console.log(props.downvotes)
    const[count, setCount]= useState(props.upvotes)

    let [isVisible, setIsVisible] = useState("Hide")

    function handleClick(){
        setCount(count + 1)
    }

    function hideComments(){
        setIsVisible(isVisible)
        isVisible = isVisible == "Hide" ? "Show" : "Hide" 
        
    }

    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.views} Views | {props.date} </h3>
            <button onClick={handleClick}> {count} </button>
            <button>{props.downvotes}</button><br></br><br></br>
            <button onClick={hideComments} class="comment-btn">{isVisible} Comments </button>
        <hr></hr>
        </div>
    );
}
export default VideoArea;