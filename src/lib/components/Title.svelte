<script>
  export let level = 1
  export let wrap = false
</script>

{#if level === 2}
  <h2 class='fd-title fd-title--h2' class:fd-title--wrap={wrap}><slot /></h2>
{:else if level === 3}
  <h3 class='fd-title fd-title--h3' class:fd-title--wrap={wrap}><slot /></h3>
{:else if level === 4}
  <h4 class='fd-title fd-title--h4' class:fd-title--wrap={wrap}><slot /></h4>
{:else if level === 5}
  <h5 class='fd-title fd-title--h5' class:fd-title--wrap={wrap}><slot /></h5>
{:else if level === 6}
  <h6 class='fd-title fd-title--h6' class:fd-title--wrap={wrap}><slot /></h6>
{:else}
	<h1 class='fd-title fd-title--h1' class:fd-title--wrap={wrap}><slot /></h1>
{/if}

<style>
  .fd-title {
    font-family: "72", "Open Sans", sans-serif;
  }
</style>