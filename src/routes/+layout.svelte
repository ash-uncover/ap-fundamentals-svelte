
<!-- RENDERING -->

<nav class='toolbar'>
  <a href="/">Home</a>
  <ul>
    <li><a href="/components/button">Button</a></li>
    <li><a href="/components/icon">Icon</a></li>
    <li><a href="/components/info-label">Info Label</a></li>
    <li><a href="/components/link">Link</a></li>
    <li><a href="/components/title">Title</a></li>
  </ul>
</nav>

<div class='content'>
  <slot></slot>
</div>

<!-- RENDERING -->

<style>
  .toolbar {
    position: absolute;
    background: lightgray;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15rem;
    overflow: auto;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15rem;
    right: 0;
    overflow: auto;
  }
</style>