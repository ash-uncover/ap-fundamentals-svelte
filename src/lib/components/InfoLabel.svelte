<script>
	export let accentColor = 0;
  export let display = false;
  export let numeric = false;
</script>

<span
	class="fd-info-label"
	class:fd-info-label--accent-color-1={accentColor === 1}
	class:fd-info-label--accent-color-2={accentColor === 2}
  class:fd-info-label--accent-color-3={accentColor === 3}
  class:fd-info-label--accent-color-4={accentColor === 4}
  class:fd-info-label--accent-color-5={accentColor === 5}
  class:fd-info-label--accent-color-6={accentColor === 6}
  class:fd-info-label--accent-color-7={accentColor === 7}
  class:fd-info-label--accent-color-8={accentColor === 8}
  class:fd-info-label--accent-color-9={accentColor === 9}
  class:fd-info-label--accent-color-10={accentColor === 10}
  class:fd-info-label--display={Boolean(display)}
	class:fd-info-label--numeric={Boolean(numeric)}
>
  <span class="fd-info-label__text">
    <slot />
  </span>
</span>

<!-- RENDERING -->
<style>
</style>
