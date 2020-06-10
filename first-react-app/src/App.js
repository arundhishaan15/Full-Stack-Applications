import React, { useState } from 'react';
import './App.css';
import Article from './article'

function App() {
  const [articles, setArticles] = useState(["Test 1","Test 2","Test 3","Test 4"]);
  
  return (
    <div className="App">
      <h2>Blogger</h2>
      <div className="container">
        {articles.map((article, index) => {
          return <Article text="This is an article" header={`${index + 1}. ${article}`}/>
        })} 
      </div>
    </div>
  );
}

export default App;



