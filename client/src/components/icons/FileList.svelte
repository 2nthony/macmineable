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
  class={`iconify iconify--ri ${className}`}
  width="32"
  height="32"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24"
  on:click={click}
  ><path
    d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
    fill="currentColor"
  /></svg
>
