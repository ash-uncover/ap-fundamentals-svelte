<script lang='ts'>
  export let type:string = ''
  export let href:string = '#'
  export let disabled:boolean = false
  export let inverted:boolean = false
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