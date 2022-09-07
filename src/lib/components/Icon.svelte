<script>
  export let icon
</script>

<!-- RENDERING -->

<span
  class={`sap-icon sap-icon--${icon}`}
  style='font-size:3rem'
></span>

<!-- RENDERING -->

<style>
  .sap-icon::before {
    font-family: 'SAP-icons'
  }
</style>
