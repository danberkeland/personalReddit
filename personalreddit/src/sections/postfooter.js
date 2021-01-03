import React from 'react'




export const Footer = (props) => {
    

    return (
        <div className = "postFooter">
              <h3>{props.author}</h3>
              <div className = "timePosted">{props.timePosted}</div>
              <div className = "commentCount">{props.commentCount}</div>             
        </div>
    )
}
