export function fetchKeyword (keyword) {
  return fetch(
    ` https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${keyword}`
  )
    .then((res) => res.json())
}

export function fetchSearch ( keyword) {
  return fetch(
    `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=${keyword}`
  )
  .then((res) => res.json())
}