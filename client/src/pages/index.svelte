<script>
  import '@shoelace-style/shoelace/dist/components/button/button'
  import Link from '../components/Link.svelte'
  import RouterLink from '../components/RouterLink.svelte'
</script>

<hgroup>
  <h1 class="text-indigo-500">macMineable</h1>
  <h6 class="text-xs text-green-500">
    3rd-party unMineable for macOS. Made by
    <Link
      url="https://twitter.com/evillt"
      class="underline hover:text-indigo-500">2nthony</Link
    >.
  </h6>
</hgroup>

<p class="text-sm">
  The fastest and easiest way to start mining your favorite non-mineable (& some
  mineable) coins!
</p>

<RouterLink to="/select-coin">
  <sl-button type="primary" class="w-full">Continue</sl-button>
</RouterLink>

<p class="text-xs text-gray-700 dark:text-gray-200">
  <span class="font-semibold">IMPORTANT:</span>
  Mining, if not made correctly, could lead to permanent damage of your hardware
  components as it uses a lot of computation power and energy, that's why
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a href="#" class="underline"
    >we have introduced a default low hashing setting
  </a>
  which will also slightly lower your rewards. You can set the high hashing option
  in advanced settings to increase you rewards at your own risk.
</p>
