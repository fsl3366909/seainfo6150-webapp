import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem.jsx'


const ArticleList = ({articleList}) => {
    if (articleList.length === 0) {
        return 'You have no data!';
    }

    return (
         <ul>
                {articleList.map(article => <li key={article.slug}><ArticleListItem article={article} /></li>)}
         
        </ul>
       
    );
  };
  

  export default ArticleList;