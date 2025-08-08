<script>
  export let label = 'Boton';
  export let type = 'button';
  export let disabled = false;
  export let className = '';
</script>

<button
  type={type}
  disabled={disabled}
  aria-disabled={disabled}
  class={`${className}`}
>
  <slot>{label}</slot>
</button>
