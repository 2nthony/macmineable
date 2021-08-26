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
    d="M5.334 4.545a9.99 9.99 0 0 1 3.542-2.048A3.993 3.993 0 0 0 12 3.999a3.993 3.993 0 0 0 3.124-1.502a9.99 9.99 0 0 1 3.542 2.048a3.993 3.993 0 0 0 .262 3.454a3.993 3.993 0 0 0 2.863 1.955a10.043 10.043 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a3.993 3.993 0 0 0-.262 3.455a9.99 9.99 0 0 1-3.542 2.047A3.993 3.993 0 0 0 12 20a3.993 3.993 0 0 0-3.124 1.502a9.99 9.99 0 0 1-3.542-2.047A3.993 3.993 0 0 0 5.072 16a3.993 3.993 0 0 0-2.863-1.954a10.043 10.043 0 0 1 0-4.091A3.993 3.993 0 0 0 5.072 8a3.993 3.993 0 0 0 .262-3.454zM13.5 14.597a3 3 0 1 0-3-5.196a3 3 0 0 0 3 5.196z"
    fill="currentColor"
  /></svg
>
