<script>
  import { uuid } from '@utils/uuid.ts'

  export let ariaDescription = ''
  export let ariaDisabled = false
  export let badge = ''
	export let compact = false
  export let disabled = false
	export let emphasized = false
  export let icon = null
  export let selected = false
  export let transparent = false
  export let type = 'button'

  let id = uuid()
</script>

<button
  class='fd-button'
  class:fd-button--compact={compact}
  class:fd-button--emphasized={emphasized}
  class:fd-button--transparent={transparent}
  class:is-selected={selected}
  disabled={disabled}
  type={type}
  aria-disabled={ariaDisabled ? 'true' : 'false'}
  aria-describedby={ariaDescription ? id : null}
>
	{#if icon}
	  <span class={`sap-icon--${icon}`} role='presentation'/>
  {/if}
  <span class='fd-button__text'>
		<slot />
	</span>
  {#if badge}
	  <span class='fd-button__badge'>{badge}</span>
  {/if}
</button>

{#if ariaDisabled && ariaDescription}
  <p aria-live='assertive' class='fd-button__instructions' id={id}>
    {ariaDescription}
  </p>
{/if}

<style>
</style>
