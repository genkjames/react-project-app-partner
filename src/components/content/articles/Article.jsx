import React from 'react';
import { connect } from "react-redux";
import View from './View';

function Article(props) {
  const articles = props.articles.map(article => {
    return (<View 
      key={article.heading}
      image={article.img}
      heading={article.heading}
    />)
  })

  return (
    <section className="articles">
      {articles}
    </section>
  )
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles
  }
}

export default connect(mapStateToProps)(Article);