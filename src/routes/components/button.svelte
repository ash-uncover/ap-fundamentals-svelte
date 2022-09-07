<script>
  import Link from '@components/Link.svelte'
</script>

<!-- RENDERING -->

<div>
  <a href='/'>Back</a>
</div>
<h1>Link</h1>

<div>
  <Link>
    Default link
  </Link>
</div>

<div>
  <Link type='emphasized'>
    Emphasized link
  </Link>
</div>

<div>
  <Link type='subtle'>
    Subtle link
  </Link>
</div>

<div>
  <Link disabled=true>
    Disabled link
  </Link>
</div>

<!-- RENDERING -->

<style>
</style>

