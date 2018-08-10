import { GET_ARTICLES } from '../actionTypes';

export function getArticles(articles) {
  return {
    type: GET_ARTICLES,
    articles
  }
}