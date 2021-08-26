<script>
  import { link } from 'svelte-spa-router'
  export let to
</script>

<a href={to} use:link><slot /></a>
