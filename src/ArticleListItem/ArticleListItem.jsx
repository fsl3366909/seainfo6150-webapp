import React from "react";

const ArticleListItem = ({ article }) => {
    return (
        <article>
            <h1>{article.title}</h1>
            <p>{article.displayDate}</p>
            <p>{article.shortText}</p>
        </article>
    );
};

export default ArticleListItem;