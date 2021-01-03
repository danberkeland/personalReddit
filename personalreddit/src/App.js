
import './App.css';
import { Header } from './sections/header'
import { Main } from './sections/main'
import { Nav } from './sections/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React,{ useState } from 'react';
 


function App() {

  

        const navList = [{
          key: 1,
          reddit: "/history",
          redditName:"r/history",
          image: "history.png",
      },
      {
          key: 2,
          reddit: "/Breadit",
          redditName:"r/Breadit",
          image: "breadit.jpg",
      },
      {
          key: 3,
          reddit: "/ReactJS",
          redditName:"r/ReactJS",
          image: "reactjs.png",
      },
      {
          key: 4,
          reddit: "/HistoryAnecdotes",
          redditName:"r/History Anecdotes",
          image: "historyanecdotes.jpg",
      }

      ]

      const [navItems] = useState(navList);
      const [currentReddit,setCurrentReddit ] = useState();


      const handleClick = (event) => {
          setCurrentReddit(() => event.target.id)
          
      }

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="mainmain">
      <Switch>
          <Route path="/" exact render={(props => <Main chosen={"/history"} />)} />
          {navItems.map((item) => (
            <Route path={item.reddit} exact render={(props => <Main chosen={item.reddit} />)} />
          ))}
         
        </Switch>
      <Nav navItems={navItems} currentReddit={currentReddit} onClick={handleClick}/>
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;
