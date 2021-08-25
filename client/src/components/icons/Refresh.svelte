<script>
  import { useDispatch } from '../../use/dispatch'
  const { click } = useDispatch()

  let className = ''
  export { className as class }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true"
  role="img"
  class={`iconify iconify--feather ${className}`}
  width="32"
  height="32"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
  on:click={click}
  ><g
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path
      d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
    /></g
  ></svg
>
