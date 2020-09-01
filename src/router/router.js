export default class Router{
  go(url){
    if (url){
      window.location.href = `?q=${url}`;
    } else {
      window.location.href = `/`;
    }
  }

  getQuery(){
    const query = window.location.search.match(/\?q=(.+)/g)
    if (query){
      return decodeURI(query)
    }
  }
}