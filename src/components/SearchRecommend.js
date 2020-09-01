import { addClass, removeClass, TOGGLE } from '../utils/DOM.js'
import {fetchKeyword} from '../utils/API.js'

export default class SearchRecommend {
  constructor(target, ){
    this.$target = target
    this.activeIndex = null;
    this.results = [];
    this.init();
  }
  render(keyword){
    if (keyword){
      fetchKeyword(keyword)
        .then((results) => this.setResults(results));
    } else{
      this.hide()
    }
  }
  
  init(){
    this.$target.addEventListener('click',(e)=> {console.log(e.target.innerText)})
  }

  setResults(results) {
    if (this.results !== results){
      this.activeIndex=null;
      if (results.length){
        this.show()
        this.$target.innerHTML = results
          .map((data) => `<li>${data}</li>`)
          .join("");
      } else {
        this.hide()
      }
    }
    this.results = results
  }
  activeItem(page){
    TOGGLE(this.$target.childNodes[this.activeIndex-1],'active')
    const activeIndex = this.activeIndex+page
    if (activeIndex && activeIndex < this.results.length+1){
      this.activeIndex = activeIndex
    }
    TOGGLE(this.$target.childNodes[this.activeIndex-1],'active')
  }

  changeValue(input){
    const value = this.$target.childNodes[this.activeIndex-1]?.innerText || input.value
    return value
  }

  hide(){
    removeClass(this.$target,'show')
  }
  show(){
    if (this.results.length) {
      addClass(this.$target,'show')
    }
  }
}
