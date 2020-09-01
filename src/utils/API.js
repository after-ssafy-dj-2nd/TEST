const BASE_URL = 'https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/'
export function fetchKeyword (keyword) {
  return fetch(
    `${BASE_URL}keywords?q=${keyword}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      setTimeout(fetchKeyword(keyword),100)
    })
}

export function fetchSearch ( keyword) {
  return fetch(
    `${BASE_URL}search?q=${keyword}`
  )
  .then((res) => res.json())
  .catch((error) => {
    console.log(error);
    setTimeout(fetchSearch(keyword),100)
  })
}