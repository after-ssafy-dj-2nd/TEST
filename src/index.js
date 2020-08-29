import SearchRecommend from './components/SearchRecommend.js'
import SearchResult from './components/SearchResult.js';
import Router from './router/index.js'

const $app = document.querySelector('.app')
const $keyword = document.querySelector(".keyword");
const $keywords = document.querySelector(".keywords");
const $searchResults = document.querySelector(".search-results");

const searchRecommend = new SearchRecommend($keywords)
const searchResult = new SearchResult($searchResults)

const query = Router.getQuery()
if (query){
  $keyword.value = query
  searchResult.render(query)
}

$app.addEventListener('click',(e) => {
  if (e.target === $keyword){
    searchRecommend.show();
  } else if (e.target.closest('.keywords')){
    Router.go(e.target.innerText)
  } else {
    searchRecommend.hide();
  }
})

$keyword.addEventListener("keyup", (e) => {
  const { value } = e.target;
  const { key } = e;
  if (key === "Enter") {
    const changeValue = searchRecommend.changeValue($keyword)
    Router.go(changeValue)
  } else if ( key === 'Escape') {
    searchRecommend.hide()
  } else if ( key === 'ArrowUp') {
    searchRecommend.activeItem(-1)
  } else if (key === 'ArrowDown') {
    searchRecommend.activeItem(1)
  } else {
    searchRecommend.render(value)
  }
});
