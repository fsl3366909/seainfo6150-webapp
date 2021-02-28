import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
          <header>
              <h1>{props.article.title}</h1>
              <p><i>by {props.article.author} (<a href={props.article.authorEmail}>{props.article.authorEmail}</a>)</i><br /></p>
              <p>{props.article.displayDate} </p>
              <p><br /> Published time stamp: {props.article.timeStamp}<br /></p>
          </header>
          <main>
              <HTMLText text={props.article.text} />
          </main>
      </article>
  );
};

export default DynamicArticle;
