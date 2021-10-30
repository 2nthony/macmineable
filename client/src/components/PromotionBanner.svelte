<script>
import { useAsyncState, readable } from '@svelte-use/core'
import { openUrl } from '../directives/openUrl'

const promotionConfigFileUrl = `https://raw.githubusercontent.com/2nthony/macmineable-promotion-service/main/config.json`
const { state, isReady } = useAsyncState(
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

<div class="promotion-banner relative">
  {#if $isReady}
    <a href={$href} target="_blank" class="flex justify-center items-center w-full h-full bg-gray-100 dark:bg-gray-800 text-xs group" use:openUrl>
      {#if !$state.imageUrl}
        <span class="group-hover:underline">Promotion Banner</span>
      {:else}
        <img class="w-full h-full" src={$state.imageUrl} alt="">
      {/if}
    </a>
    {#if $state.imageUrl}
      <a
        href="https://2nthony.notion.site/macMineable-Promotion-Service-9e77e58bec7240a69b81472ee7551fd8#a940615f6b0d46e0aaa3e6586063f509"
        target="_blank"
        class="absolute right-0 top-0 text-gray-400 px-2 hover:underline hover:text-black z-10"
        style="font-size: 10px"
        use:openUrl
      >
        Why this?
      </a>
    {/if}
  {/if}
</div>

<style>
.promotion-banner {
  @apply w-full;
  height: 50px;
}
</style>
