<script>
  import { ipc } from '../ipc'

  export let url

  let className
  export { className as class }
</script>

<a
  href={url}
  rel="noreferrer noopener"
  target="_blank"
  class={className}
  on:click={ipc.send('emitOpenURL', url)}><slot /></a
>
