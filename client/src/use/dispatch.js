// shortcut for `createEventDispatch`
// preset frequency use dispatcher

import { createEventDispatcher } from 'svelte'

export function useDispatch() {
  return {
    click: fast('click'),
    dispatch(type, ...args) {
      fast(type)(...args)
    },
  }
}

function fast(type) {
  const dispatch = createEventDispatcher()
  return (...args) => dispatch(type, ...args)
}
