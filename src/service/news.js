import {
  article_url,
  api_key,
  //category,
  country_code,
} from '../config/restConfig';

export async function getArticles({category}) {
  
  try {
    let articles = await fetch(
      `${article_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          'X-API-KEY': api_key,
        },
      });
      let result = await articles.json();
      articles = null;
      return result.articles;
  } catch(error) {
    throw error;
  }
}
