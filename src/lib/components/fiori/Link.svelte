<script>
  export let type = null
  export let href = '#'
  export let disabled = false
  export let inverted = false
</script>

<a
  class='fd-link'
  class:fd-link--emphasized={type === 'emphasized'}
  class:fd-link--subtle={type === 'subtle'}
  class:fd-link--disabled={disabled}
  class:fd-link--inverted={inverted}
  aria-disabled={disabled ? 'true' : null}
  tabindex={disabled ? -1 : 0}
  href={href}
>
  <span class='fd-link__content'>
    <slot />
  </span>
</a>

<style>
</style>