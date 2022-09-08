<script lang='ts'>
  export let title:string = 'Code Sample'

  let showCode = false

  const onShowCode = () => {
    showCode = !showCode
  }
</script>

<!-- RENDERING -->

<div class='container'>
  <div class='header'>
    {title}
  </div>
  <div class='rendering'>
    <slot></slot>
    <button class='button-show' on:click={onShowCode}>
      {showCode ? 'Hide Code' : 'Show Code'}
    </button>
  </div>
  {#if showCode}
    <div class='code'>
      <slot name='code'></slot>
      <button class='button-copy'>Copy</button>
    </div>
  {/if}
</div>

<!-- RENDERING -->

<style>
  .container {
    border-radius: 0.5rem;
    border: 2px solid #E5E5E5;
    margin: 2rem;
  }
  .header {
    padding: 0.5rem;
  }
  .rendering {
    position : relative;
    padding: 2rem 1rem;
    background-color: #F7F7F7;
  }
  .button-show {
    position : absolute;
    right: 0;
    padding: 0.5rem;
    cursor: pointer;
    background: white;
    border: 1px solid darkgray;
    border-radius: 0.25rem;
    bottom: 0;
  }
  .code {
    white-space: pre-line;
    position : relative;
    padding: 1rem;
    background-color: #262626;
    color: white;
    font-size: 12px;
    font-family: ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace;;
  }
  .button-copy {
    position : absolute;
    right: 0;
    bottom: 0;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;
    background-color: black;
    color: white;
  }
</style>
