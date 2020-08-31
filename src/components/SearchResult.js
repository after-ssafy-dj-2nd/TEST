import { fetchSearch } from '../utils/API.js'

export default class SearchResult {
  constructor(target){
    this.$target = target
  }
  render(value){
    fetchSearch(value)
    .then((results) => {
      if (results.data) {
        this.$target.innerHTML = results.data
          .map((cat) => `<article><img src="${cat.url}" /></article>`)
          .join("");
      }
    })
  }
}