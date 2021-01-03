import React, { useState } from 'react'

import { Link } from 'react-router-dom';




export const Nav = (props) => {

    
    return (
        <nav>
            <h1>Subreddits</h1>
            {props.navItems.map(item => (
                <Link to={item.reddit} key={item.key} onClick={props.onClick} style={{textDecoration:"none"}}>
                    <div className="navItem" key={item.key} style={item.reddit===props.currentReddit ? {backgroundColor:"lightgrey"}: {backgroundColor:"white"}}>
                    <div className ="navIcon"  key={item.key}><img alt={item.redditName} id={item.reddit} src={item.image} /></div>
                <h2 id={item.reddit}>{item.redditName}</h2>
                </div>
                </Link>
          ))}
        </nav>







         
        
    )
}

