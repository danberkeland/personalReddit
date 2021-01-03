import React, { useEffect, useState } from 'react'


import { Karma } from './karma';
import { Footer } from './postfooter';
/* import { Comment } from './comment' */


export const Main = (props) => {

  
  useEffect(() => {
    fetchItems();
  });



  const url = `https://www.reddit.com/r${props.chosen}/new.json`

  const [items,setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      url
    )
    const list = await data.json();
    setItems(list.data.children);


    
  };

  return (
      
    

    <main>
    {items.map(item => (
      <React.Fragment>
        
          <article>
          <Karma karma={item.data.score}/>
            <div className="postInfo">
              <h2>{item.data.title}</h2>
              <p>{item.data.selftext}</p>
              
              <Footer author={item.data.author} timePosted={item.data.created_utc}/>
              {/* <Comment /> */}
            </div>         
          </article>
      
         
        
      </React.Fragment>
          ))}
      {/* <button>BACK TO LIST</button>  */}  
    </main>
       
  )
}