// shortcut for `createEventDispatch`
// preset frequency use dispatcher

import { createEventDispatcher } from 'svelte'

export function useDispatch() {
  const dispatch = createEventDispatcher()
  function d(type) {
    return (detail) => dispatch(type, detail)
  }

  return {
    click: d('click'),
    dispatch(type, detail) {
      d(type)(detail)
    },
  }
}
