<script>
	import CodePanel from 'components/CodePanel.svelte';
	import InfoLabel from 'components/fiori/InfoLabel.svelte';
	import Icon from 'components/fiori/Icon.svelte';
	import Title from 'components/fiori/Title.svelte';
</script>

<!-- RENDERING -->

<Title>SAP Icons</Title>

<p>
	<InfoLabel accentColor={3}>Version 0.1.0</InfoLabel>
	<InfoLabel accentColor={1}>Fiori 3</InfoLabel>
</p>

<Title level={2}>Usage</Title>

<div>
	<p>Use the icon if:</p>
	<ul>
		<li>
			You want to display an icon for illustrative purposes only, without interaction states, acting
			as a non-interactive icon/pictogram.
		</li>
		<li>
			You intend to pair the icon with another method of communication i.e. with text or a tooltip.
		</li>
	</ul>
	<p>
		Note: If an icon needs to be selected or have any interaction states, it is recommended to use
		the transparent button style. See <strong>Button</strong> for more details on how to implement it.
	</p>
</div>

<Title level={2}>Examples</Title>

<Title level={3}>Available Icons</Title>

<div>
	<p>
		There are several icons available. To display any one of these icons, add the iconName property
		identifying the icon style to the sap-icon class. For example, for a search icon, add sap-icon
		sap-icon--search with the desired font size value.
	</p>
</div>

<CodePanel>
	<Icon icon="search" />
	<div slot="code" />
</CodePanel>

<!-- RENDERING -->
<style>
</style>
