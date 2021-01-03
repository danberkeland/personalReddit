import React from 'react'




export const Karma = (props) => {
  
    return (
        <div className="karmaAdjust">
          <img className="upVote" alt="Up Vote" src="upArrow.png" />
          <div className="karmaCount">{props.karma}</div>
          <img className="downVote" alt="Down Vote" src="downArrow.png" />
        </div>
    )
    
}
