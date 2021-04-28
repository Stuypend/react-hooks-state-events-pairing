import React from "react"
import CommentItem from "./CommentItem"

function CommentList(comments)
{
    //console.log(comments.comments)
    // passed a list of comments

    // we need make a comment comp of each one
   let list =  comments.comments.map(com => {
       // pass the info to the child item
        return (<CommentItem user = {com.user} comment = {com.comment}></CommentItem>)
    })
    console.log(list)
    return (<div>{list}</div>)


}

export default CommentList