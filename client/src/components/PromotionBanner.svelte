<script>
import { useAsyncState, now, readable } from '@svelte-use/core'
import { openUrl } from '../directives/openUrl'

const promotionConfigFileUrl = `https://cdn.jsdelivr.net/gh/2nthony/macmineable-promotion-service@latest/config.json?_=${now()}`
const { state } = useAsyncState(
  fetch(promotionConfigFileUrl).then((res) => res.json()),
  {
    imageUrl: '',
    targetUrl: '',
  }
)

$: href = readable('', set => {
  if ($state.targetUrl) {
    const url = new URL($state.targetUrl)
    url.searchParams.set('from', 'macMineable')
    set(url.toString())
  }
})

</script>

<a class="promotion-banner cursor-pointer" target="_blank" href={$href} use:openUrl>
{#if !$state.imageUrl}
  <div class="flex justify-center items-center w-full h-full bg-gray-100 dark:bg-gray-800 text-xs">
    Promotion Banner
  </div>
{:else}
  <img class="w-full h-full" src={$state.imageUrl} alt="">
{/if}
</a>

<style>
.promotion-banner {
  @apply w-full;
  height: 50px;
}
</style>
