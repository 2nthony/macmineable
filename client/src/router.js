import Router from 'svelte-spa-router'
import Home from './pages/index.svelte'
import SelectCoin from './pages/select-coin.svelte'
import Mining from './pages/mining.svelte'

export const routes = {
  '/': Home,
  '/select-coin': SelectCoin,
  '/mining': Mining,
}

export { Router }
