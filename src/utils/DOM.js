export const addEvent = ($el,addClass) => $el.classList.add(addClass)
export const removeEvent = ($el, removeClass) => $el.classList.remove(removeClass)
export const TOGGLE = ($el, toggleClass) => {
  if ($el) {
    $el.classList.toggle(toggleClass)
  }
}