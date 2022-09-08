<script>
  import CodePanel from '@components/CodePanel.svelte';
	import Icon from '@components/fiori/Icon.svelte';
  import InfoLabel from '@components/fiori/InfoLabel.svelte';
  import Link from '@components/fiori/Link.svelte'
  import Title from '@components/fiori/Title.svelte';
</script>

<!-- RENDERING -->

<Title>Link</Title>

<p>
  <InfoLabel accentColor={3}>Version 0.1.0</InfoLabel>
</p>

<p>A link (also known as hyperlink) is an interactive text element that allows users to navigate to another page or trigger a certain event.</p>

<Title level={2}>Usage</Title>

<p>Use a link if:</p>

<ul>
  <li>You want to navigate to another page.</li>
  <li>You want to trigger an event.</li>
  <li>You want to point to an object or person. If so, you can either navigate to the object or person’s details or display them in a quick view after the link is triggered.</li>
</ul>

<p>Do not use a link if:</p>

<ul>
  <li>You could use a Button to trigger the action instead.</li>
  <li>There is no target or reference to be linked to.</li>
</ul>

<Title level={2}>Accessibility</Title>

<p>Use a meaningful link text that indicates what will happen when the user interacts with the link i.e. Open Sales Order. Avoid texts such as Click Here or Link, as these do not make it clear to the user what the purpose of the link is.</p>

<Title level={2}>Examples</Title>

<CodePanel>
  <Link>Default link</Link>
  <br />
  <Link type='emphasized'>Emphasized link</Link>
  <br />
  <Link type='subtle'>Subtle link</Link>
  <br />
  <Link disabled>Disabled link</Link>
  <br />
  <Link>
    <Icon icon='slim-arrow-left' />
    Left icon link
  </Link>
  <br />
  <Link>
    Right icon link
    <Icon icon='slim-arrow-right' />
  </Link>

  <div slot='code'>
    <div>{`<Link>Default link</Link>`}</div>
    <div>{`<br />`}</div>
    <div>{`<Link type='emphasized'>Emphasized link</Link>`}</div>
    <div>{`<br />`}</div>
    <div>{`<Link type='subtle'>Subtle link</Link>`}</div>
    <div>{`<br />`}</div>
    <div>{`<Link disabled>Disabled link</Link>`}</div>
    <div>{`<br />`}</div>
    <div>{`<Link><Icon icon='slim-arrow-left' />Left icon link</Link>`}</div>
    <div>{`<br />`}</div>
    <div>{`<Link>Right icon link<Icon icon='slim-arrow-right' /></Link>`}</div>
  </div>
</CodePanel>

<!-- RENDERING -->

<style>
</style>

