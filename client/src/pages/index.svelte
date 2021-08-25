<script>
  import '@shoelace-style/shoelace/dist/components/button/button'
  import RouterLink from '../components/RouterLink.svelte'
</script>

<hgroup>
  <h1 class="text-indigo-500">macMineable</h1>
  <h6 class="text-xs text-green-500">powered by unMineable</h6>
</hgroup>

<p class="text-sm">
  The fastest and easiest way to start mining your favorite non-mineable (& some
  mineable) coins!
</p>

<RouterLink to="/select-coin">
  <sl-button type="primary" class="w-full">Continue</sl-button>
</RouterLink>

<p class="text-xs text-gray-700">
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
