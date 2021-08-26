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
  class={`iconify iconify--icon-park ${className}`}
  width="32"
  height="32"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 48 48"
  on:click={click}
  ><g
    fill="none"
    stroke="#000"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path
      d="M42 8v16M6 24v16M6 24c0 9.941 8.059 18 18 18a17.94 17.94 0 0 0 12.5-5.048M42 24c0-9.941-8.058-18-18-18a17.947 17.947 0 0 0-12.951 5.5"
    /></g
  ></svg
>
