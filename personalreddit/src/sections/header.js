import React from 'react'




export const Header = () => {

    const logoStyle = {
        color: "rgb(243, 79, 3)",
        fontSize: "1em"
      }

    return (
        <header>
            <div className="logo"><img alt="Reddit icon" src="Reddit-Icon.png" /><span><span style={logoStyle}>Dan's</span>Reddit</span></div>
            <div className="search">
            <input type="text" placeholder="search..." />
            </div>
        </header>
    )
}