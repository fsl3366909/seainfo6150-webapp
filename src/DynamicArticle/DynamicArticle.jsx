import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";

const DynamicArticle = ({article}) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
          <header>
              <Link to="/articlelist">Back</Link>
              <h1>{article.title}</h1>
              <p><i>by {article.author} (<a href={article.authorEmail}>{article.authorEmail}</a>)</i><br /></p>
              <p>{article.displayDate} </p>
              <p><br /> Published time stamp: {article.timeStamp}<br /></p>
          </header>
         
              <HTMLText text={article.text} />
         
      </article>
  );
};

export default DynamicArticle;
