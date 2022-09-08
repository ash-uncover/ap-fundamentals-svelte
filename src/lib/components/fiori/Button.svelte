<script lang='ts'>
  import { uuid } from 'utils/uuid'

  export let ariaDescription:string = ''
  export let ariaDisabled:boolean = false
  export let badge:string = ''
	export let compact:boolean = false
  export let disabled:boolean = false
	export let emphasized:boolean = false
  export let icon:string = ''
  export let selected:boolean = false
  export let transparent:boolean = false
  export let type:string = 'button'

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
