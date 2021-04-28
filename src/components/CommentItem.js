import React from "react"


function CommentItem({user, comment})
{
    console.log(user)
    return (
        <div>
            <span>{user}</span><br></br>
            <span>{comment}</span>
    </div>
    );
}

export default CommentItem