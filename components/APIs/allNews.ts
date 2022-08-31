import axios from 'axios';
export async function allNews() {
  var url =
  `
  https://saurav.tech/NewsAPI/everything/cnn.json
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.articles.length;i++){
      newRes = {
        author: res.articles[i].author,
        content: res.articles[i].author,
    description: res.articles[i].description,
    source: {name:res.articles[i].source.name},
    title: res.articles[i].title,
    url: res.articles[i].url,
    urlToImage:res.articles[i].urlToImage
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res)
  await changeData()
  return final

  // var url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=bitcoin&" +
  //   "from=2022-08-25&" +
  //   "sortBy=popularity&" +
  //   "apiKey=b5a5fc74e2864be48029772c874ce911";

  //   const {data:res} = await axios.get(url);
  //   console.log(res.articles.articles)
  //   return(res.articles.articles)
  }

export async function trendingNews() {
  var url =
  `
  https://saurav.tech/NewsAPI/everything/cnn.json
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.articles.length;i++){
      newRes = {
        author: res.articles[i].author,
        content: res.articles[i].author,
    description: res.articles[i].description,
    source: {name:res.articles[i].source.name},
    title: res.articles[i].title,
    url: res.articles[i].url,
    urlToImage:res.articles[i].urlToImage
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res)
  await changeData()
  return final

  // var url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=b5a5fc74e2864be48029772c874ce911"
  //     const {data:res} = await axios.get(url);
  //     console.log(res.articles.articles)
  //     return(res.articles.articles)
}

export async function weekly() {
  var url =
  `
  https://saurav.tech/NewsAPI/everything/cnn.json
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.articles.length;i++){
      newRes = {
        author: res.articles[i].author,
        content: res.articles[i].author,
    description: res.articles[i].description,
    source: {name:res.articles[i].source.name},
    title: res.articles[i].title,
    url: res.articles[i].url,
    urlToImage:res.articles[i].urlToImage
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res)
  await changeData()
  return final
  }