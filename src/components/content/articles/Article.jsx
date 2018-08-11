import React from 'react';
import { connect } from "react-redux";
import View from './View';

function Article(props) {
  console.log(props);
  const articles = props.articles.map(article => {
    return (<View 
      key={article.heading}
      image={article.img_path}
      heading={article.heading}
    />)
  })

  return (
    <div className="articles">
      <section className="wrapper">
        {articles}
      </section>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles
  }
}

export default connect(mapStateToProps)(Article);