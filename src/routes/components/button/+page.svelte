<script>
  import CodePanel from 'components/CodePanel.svelte';
	import Button from 'components/fiori/Button.svelte';
  import InfoLabel from 'components/fiori/InfoLabel.svelte';
  import Title from 'components/fiori/Title.svelte';
</script>

<!-- RENDERING -->

<Title>Button</Title>

<p>
  <InfoLabel accentColor={3}>Version 0.1.0</InfoLabel>
  <InfoLabel accentColor={1}>Fiori 3</InfoLabel>
</p>

<p>The button component is used to trigger an action. All buttons are characterized by the fd-button class and an additional modifier class to specify each button type.</p>

<Title level={2}>Usage</Title>

<Title level={2}>Examples</Title>

<Title level={3}>Button With Badge</Title>

<p>Button gets a badge in cases of collecting a number of items from various pages in order to trigger an action.</p>
<p>Currently the Emphasized, Standard, Ghost and Transparent type of buttons are recommended to be used with Badge.</p>
<p><strong>Badges cannot contain more characters than 4.</strong></p>

<CodePanel>
  <Button badge='3984'>Cozy Badge Button</Button>
  <Button badge='3' icon='cart' />
  <Button badge='654' compact>Compact Badge Button</Button>
  <Button badge='12' icon='cart' compact />
  <div slot='code'>
    <div>{`<Button badge='3984'>Cozy Badge Button</Button>`}</div>
    <div>{`<Button badge='3' icon='cart' />`}</div>
    <div>{`<Button badge='654' compact>Compact Badge Button</Button>`}</div>
    <div>{`<Button badge='12' icon='cart' compact />`}</div>
  </div>
</CodePanel>


<Title level={3}>Button States</Title>

<p>These button types indicate different states: normal, selected, disabled and focusable disabled.</p>
<ul>
  <li><strong>Normal:</strong> The button’s default state. It can be selected to perform a corresponding action.</li>
  <li><strong>Selected:</strong> The button is selected as opposed to other buttons. This state can be displayed by adding the is-selected class or the aria-selected=”true” attribute for accessibility.</li>
  <li><strong>Disabled:</strong> It cannot be selected. This state can be displayed by using the disabled attribute.</li>
  <li><strong>Focusable disabled:</strong> It cannot be selected, but it is tabbable and focusable. When the button is selected, a focus ring appears. This state can be displayed by using the is-disabled class and the aria-disabled=”true” attribute for accessibility without using the disabled property. By adding the hidden _instructions element, the user will be notified for further instructions on how to enable the button. They will also be notified when the button is enabled when using the aria-live property.</li>
</ul>

<CodePanel>
  <Button>Normal State</Button>
  <Button selected>Selected State</Button>
  <Button disabled>Disabled State</Button>
  <Button ariaDisabled ariaDescription='This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.'>Disabled Focusable</Button>
  <div slot='code'>
    <div>{`<Button>Normal State</Button>`}</div>
    <div>{`<Button selected>Selected State</Button>`}</div>
    <div>{`<Button disabled>Disabled State</Button>`}</div>
    <div>{`<Button ariaDisabled ariaDescription='This disabled button is focusable and this text will be read out by a screen reader and read again when there are changes to the state of the button.'>Disabled Focusable</Button>`}</div>
  </div>
</CodePanel>

<Title level={3}>Icon or Text</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Menu Button</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Primary</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Segmented Button</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Button Size</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Split Menu Button</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Toggle Button</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<Title level={3}>Button Style</Title>

<p></p>

<CodePanel>
  <div slot='code'>
  </div>
</CodePanel>

<!-- RENDERING -->

<style>
</style>

