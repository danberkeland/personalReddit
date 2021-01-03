import React, { useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';


import { Karma } from './karma';
import { Footer } from './postfooter';
/* import { Comment } from './comment' */


export const Main = (props) => {

  
  useEffect(() => fetchItems(), [props.chosen]);



  const url = `https://www.reddit.com/r${props.chosen}/new.json`

  const [items,setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      url
    )
    const list = await data.json();
    setItems(list.data.children);  
  };


  const translate = (text) => {

    let fin = text.replace('&lt;!-- SC_OFF --&gt;','').replace('&lt;!-- SC_ON --&gt;','').replace('class="md"','');
    let finfin = ReactHtmlParser(fin)
    return finfin[0]
  }



  return (
      
    

    <main>
    {items.map(item => (
      <React.Fragment>
        
          <article>
          <Karma karma={item.data.score}/>
            <div className="postInfo">
              <h2>{item.data.title}</h2>
              {item.data.selftext_html ? <React.Fragment>{ReactHtmlParser (translate(item.data.selftext_html))}</React.Fragment> : <p>{item.data.selftext}</p>}
              
              <Footer author={item.data.author} commentCount={item.data.num_comments} timePosted={item.data.created_utc}/>
              {/* <Comment /> */}
            </div>         
          </article>
      
         
        
      </React.Fragment>
          ))}
      {/* <button>BACK TO LIST</button>  */}  
    </main>
       
  )
}