<script>
  import CodePanel from 'components/CodePanel.svelte';
	import InfoLabel from 'components/fiori/InfoLabel.svelte';
  import Title from 'components/fiori/Title.svelte';
</script>

<!-- RENDERING -->

<Title>Info Label</Title>

<Title level={2}>Examples</Title>

<Title level={3}>Color Flavor</Title>

<div>
  <p>Use the accentColor property class to apply semantic color to Info Label. Options include numbers from 1 to 10.</p>
</div>

<CodePanel>
  <InfoLabel accentColor={1}>color 1</InfoLabel>
  <InfoLabel accentColor={2}>color 2</InfoLabel>
  <InfoLabel accentColor={3}>color 3</InfoLabel>
  <InfoLabel accentColor={4}>color 4</InfoLabel>
  <InfoLabel accentColor={5}>color 5</InfoLabel>
  <InfoLabel accentColor={6}>color 6</InfoLabel>
  <InfoLabel accentColor={7}>color 7</InfoLabel>
  <InfoLabel accentColor={8}>color 8</InfoLabel>
  <InfoLabel accentColor={9}>color 9</InfoLabel>
  <InfoLabel accentColor={10}>color 10</InfoLabel>
  <div slot='code'>
    <div>{`<InfoLabel accentColor={1}>color 1</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={2}>color 2</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={3}>color 3</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={4}>color 4</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={5}>color 5</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={6}>color 6</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={7}>color 7</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={8}>color 8</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={9}>color 9</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={10}>color 10</InfoLabel>`}</div>
  </div>
</CodePanel>

<Title level={3}>Display Only Info Label</Title>

<div>
  <p>For Display Only Info Label use the display property class</p>
</div>

<CodePanel>
  <InfoLabel display>system state</InfoLabel>
  <InfoLabel display numeric>42</InfoLabel>
  <InfoLabel display icon='upload-to-cloud' />
  <InfoLabel display numeric>info label</InfoLabel>
  <div slot='code'>
    <div>{`<InfoLabel display>system state</InfoLabel>`}</div>
    <div>{`<InfoLabel display numeric>42</InfoLabel>`}</div>
    <div>{`<InfoLabel display icon="upload-to-cloud"/>`}</div>
    <div>{`<InfoLabel display numeric>info label</InfoLabel>`}</div>
  </div>
</CodePanel>

<Title level={3}>Info Label With Icon</Title>

<div>
  <p>Use the icon property class and icon type to create Info Label with Icon.</p>
</div>

<CodePanel>
  <InfoLabel accentColor={1} icon='future'>info label</InfoLabel>
  <InfoLabel accentColor={2} icon='upload-to-cloud' />
  <div slot='code'>
    <div>{`<InfoLabel display accentColor={1} icon='future'>info label</InfoLabel>`}</div>
    <div>{`<InfoLabel display accentColor={2} icon='upload-to-cloud' />`}</div>
  </div>
</CodePanel>

<Title level={3}>Numeric Info Label</Title>

<div>
  <p>For Numeric Info Label use the numeric property.</p>
</div>

<CodePanel>
  <InfoLabel accentColor={1} numeric>6</InfoLabel>
  <InfoLabel accentColor={2} numeric>6.2</InfoLabel>
  <InfoLabel accentColor={3} numeric>42k</InfoLabel>
  <div slot='code'>
    <div>{`<InfoLabel accentColor={1} numeric>6</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={2} numeric>6.2</InfoLabel>`}</div>
    <div>{`<InfoLabel accentColor={3} numeric>42k</InfoLabel>`}</div>
  </div>
</CodePanel>

<!-- RENDERING -->

<style>
</style>
