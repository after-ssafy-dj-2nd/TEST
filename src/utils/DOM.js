export const addClass = ($el, className ) => $el.classList.add(className)
export const removeClass = ($el, className) => $el.classList.remove(className)
export const toggleClass = ($el, className) => {
  if ($el) {
    $el.classList.toggle(className)
  }
}