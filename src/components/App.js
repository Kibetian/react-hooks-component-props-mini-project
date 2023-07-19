import React from "react";
import blogData from "../data/blog";

console.log(blogData);
function Header({ blogName }) {
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

function About({ image, aboutText }) {
  const defaultImage = "https://via.placeholder.com/215";
  const altText = "blog logo";
  const imageUrl = image || defaultImage;

  return (
    <aside>
      <img src={imageUrl} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <Header blogName={blogData.name} />
      <About image={blogData.image} aboutText={blogData.about} />
      <ArticleList articles={blogData.articles} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      
    </div>
    
  );
  
}



export default App;
