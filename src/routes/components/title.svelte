<script>
  import CodePanel from '@components/CodePanel.svelte';
	import InfoLabel from '@components/fiori/InfoLabel.svelte';
  import Title from '@components/fiori/Title.svelte';
</script>

<!-- RENDERING -->

<Title>Title</Title>

<Title level={2}>Examples</Title>

<Title level={3}>Semantic Level</Title>

<p>There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.</p>

<CodePanel>
  <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <Title level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <Title level={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  <div slot='code'>
    <div>{`<Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`<Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`<Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`<Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`<Title level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`<Title level={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
  </div>
</CodePanel>

<Title level={3}>Text Elision</Title>

<p>By default the Title text overflow will be elided when longer than its container.</p>

<CodePanel>
  <div style='width:300px;'>
    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  </div>
  <div slot='code'>
    <div>{`<div style='width:300px;'>`}</div>
    <div>{`  <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`</div>`}</div>
  </div>
</CodePanel>

<Title level={3}>Text Wrapping</Title>

<p>Add the wrap property to cause the overflow text to wrap instead.</p>

<CodePanel>
  <div style='width:300px;'>
    <Title wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={2} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={3} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={4} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={5} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Title level={6} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
  </div>
  <div slot='code'>
    <div>{`<div style='width:300px;'>`}</div>
    <div>{`  <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={2} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={3} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={4} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={5} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`  <Title level={6} wrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>`}</div>
    <div>{`</div>`}</div>
  </div>
</CodePanel>

<!-- RENDERING -->

<style>
</style>
