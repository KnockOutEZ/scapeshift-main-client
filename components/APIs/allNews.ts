import axios from 'axios';
export async function allNews() {
  var url =
  `
  http://api.mediastack.com/v1/news?access_key=b840fb58e435e544c84bef5e828fb060&countries=us,gb,de&limit=100
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.data.length;i++){
      newRes = {
        author: res.data[i].author,
        content: res.data[i].author,
    description: res.data[i].description,
    source: {name:res.data[i].source},
    title: res.data[i].title,
    url: res.data[i].url,
    urlToImage:res.data[i].image
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res.data)
  await changeData()
  return final

  // var url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=bitcoin&" +
  //   "from=2022-08-25&" +
  //   "sortBy=popularity&" +
  //   "apiKey=b5a5fc74e2864be48029772c874ce911";

  //   const {data:res} = await axios.get(url);
  //   console.log(res.articles)
  //   return(res.articles)
  }

export async function trendingNews() {
  var url =
  `
  http://api.mediastack.com/v1/news?access_key=b840fb58e435e544c84bef5e828fb060&countries=us,gb,de&limit=100
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.data.length;i++){
      newRes = {
        author: res.data[i].author,
        content: res.data[i].author,
    description: res.data[i].description,
    source: {name:res.data[i].source},
    title: res.data[i].title,
    url: res.data[i].url,
    urlToImage:res.data[i].image
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res.data)
  await changeData()
  return final

  // var url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=b5a5fc74e2864be48029772c874ce911"
  //     const {data:res} = await axios.get(url);
  //     console.log(res.articles)
  //     return(res.articles)
}

export async function weekly() {
  var url =
  `
  http://api.mediastack.com/v1/news?access_key=b840fb58e435e544c84bef5e828fb060&countries=us,gb,de&limit=100
  `;

  let newRes={}
  let final = []

  function changeData(){

    for(let i=0;i < res.data.length;i++){
      newRes = {
        author: res.data[i].author,
        content: res.data[i].author,
    description: res.data[i].description,
    source: {name:res.data[i].source},
    title: res.data[i].title,
    url: res.data[i].url,
    urlToImage:res.data[i].image
      }
      final.push(newRes)

    }
  }

  const {data:res} = await axios.get(url)
  console.log(res.data)
  await changeData()
  return final
  }