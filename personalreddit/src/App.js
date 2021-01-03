
import './App.css';
import { Header } from './sections/header'
import { Main } from './sections/main'
import { Nav } from './sections/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="mainmain">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/history" exact component={Main} />
          <Route path="/Breadit" exact component={Main} />
          <Route path="/ReactJS" exact component={Main} />
          <Route path="/HistoryAnecdotes" exact component={Main} />
        </Switch>
      <Nav />
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;
