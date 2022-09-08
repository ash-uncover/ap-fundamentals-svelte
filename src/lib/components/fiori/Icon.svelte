<script lang='ts'>
  export let icon:string = ''
</script>

<!-- RENDERING -->

<span
  class={`sap-icon sap-icon--${icon}`}
></span>

<!-- RENDERING -->

<style>
  .sap-icon::before {
    font-family: 'SAP-icons'
  }
</style>
