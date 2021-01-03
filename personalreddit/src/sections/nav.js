import React from 'react'

import { Link } from 'react-router-dom';




export const Nav = () => {

    return (
        <nav>
            <h1>Subreddits</h1>
            <Link to='/history' style={{textDecoration:"none"}}>
                <div className="navItem" style={{backgroundColor:"lightgray"}}>
                <div className = "navIcon"><img alt="r/history" src="history.png" /></div>
                <h2>r/history</h2>
                </div>
            </Link>
            <Link to='/Breadit' style={{textDecoration:"none"}}>
                <div className="navItem">
                <div className = "navIcon"><img alt="r/Breadit" src="breadit.jpg" /></div>
                <h2>r/Breadit</h2>
                </div>
            </Link>
            <Link to='/ReactJS' style={{textDecoration:"none"}}>
                <div className="navItem">
                <div className = "navIcon"><img alt="r/ReactJS" src="reactjs.png" /></div>
                <h2>r/ReactJS</h2>
                </div>
            </Link>
            <Link to="/HistoryAnecdotes" style={{textDecoration:"none"}}>
                <div className="navItem">
                <div className = "navIcon"><img alt="r/HistoryAnecdotes" src="historyanecdotes.jpg" /></div>
                <h2>r/History Anecdotes</h2>
                </div>
            </Link>
            
        </nav>
    )
}

