
import './App.css';

const logoStyle = {
  color: "rgb(243, 79, 3)",
  fontSize: "1em"
}

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo"><img alt="Reddit icon" src="Reddit-Icon.png" /><span><span style={logoStyle}>Dan's</span>Reddit</span></div>
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
      </header>
      <div className="mainmain">
      <main>
        <article>
          <div className="karmaAdjust">
          <img className="upVote" alt="Up Vote" src="upArrow.png" />
          <div className="karmaCount">234</div>
          <img className="downVote" alt="Down Vote" src="downArrow.png" />
          </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className = "postFooter">
              <h3>Contributor</h3>
              <div className = "timePosted">1 hr ago</div>
              <div className = "commentCount">123</div>             
            </div>
            <div className = "commentContainer">
              <h3>Commenting User</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <div className = "timePosted">1 hr ago</div>
            </div>
            <div className = "commentContainer">
              <h3>Commenting User</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <div className = "timePosted">1 hr ago</div>
            </div>
            <div className = "commentContainer">
              <h3>Commenting User</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
              <div className = "timePosted">1 hr ago</div>
            </div> 
          </div>         
        </article>
        <article>
        <div className="karmaAdjust">
          <img className="upVote" alt="Up Vote" src="upArrow.png" />
          <div className="karmaCount">234</div>
          <img className="downVote" alt="Down Vote" src="downArrow.png" />
        </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            
            <div className = "postFooter">
              <h3>Contributor</h3>
              <div className = "timePosted">1 hr ago</div>
              <div className = "commentCount">123</div>             
            </div>
          </div>         
        </article>
        <article>
        <div className="karmaAdjust">
          <img className="upVote" alt="Up Vote" src="upArrow.png" />
          <div className="karmaCount">234</div>
          <img className="downVote" alt="Down Vote" src="downArrow.png" />
        </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
           
            <div className = "postFooter">
              <h3>Contributor</h3>
              <div className = "timePosted">1 hr ago</div>
              <div className = "commentCount">123</div>             
            </div>
          </div>         
        </article>
        <button>BACK TO LIST</button>
      </main>
      <nav>
        <h1>Subreddits</h1>
        <div className="navItem">
          <div className = "navIcon"><img alt="Reddit icon" src="Reddit-Icon.png" /></div>
          <h2>Nav Title</h2>
        </div>
        <div className="navItem">
          <div className = "navIcon"><img alt="Reddit icon" src="Reddit-Icon.png" /></div>
          <h2>Nav Title</h2>
        </div>
        <div className="navItem">
          <div className = "navIcon"><img alt="Reddit icon" src="Reddit-Icon.png" /></div>
          <h2>Nav Title</h2>
        </div>
        <div className="navItem">
          <div className = "navIcon"><img alt="Reddit icon" src="Reddit-Icon.png" /></div>
          <h2>Nav Title</h2>
        </div>
        <div className="navItem">
          <div className = "navIcon"><img alt="Reddit icon" src="Reddit-Icon.png" /></div>
          <h2>Nav Title</h2>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default App;
