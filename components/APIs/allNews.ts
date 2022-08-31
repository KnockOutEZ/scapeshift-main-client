import axios from 'axios';
export async function allNews() {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=bitcoin&" +
    "from=2022-08-25&" +
    "sortBy=popularity&" +
    "apiKey=b5a5fc74e2864be48029772c874ce911";

    const {data:res} = await axios.get(url);
    console.log(res.articles)
    return(res.articles)
  }

export async function trendingNews() {
  var url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=b5a5fc74e2864be48029772c874ce911"
      const {data:res} = await axios.get(url);
      console.log(res.articles)
      return(res.articles)
}

export async function weekly() {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=bitcoin&" +
    "from=2022-08-29&" +
    "sortBy=popularity&" +
    "apiKey=b5a5fc74e2864be48029772c874ce911";

    const {data:res} = await axios.get(url);
    console.log(res.articles)
    return(res.articles)
  }