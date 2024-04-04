# @astrum-ui/modal

Introducing Astrum-UI/Modal: A versatile React component for creating sleek and customizable modal overlays effortlessly.

## Installation

```
npm install --save @astrum-ui/modal
```

or access the [complete suite](https://www.npmjs.com/package/@astrum-ui/core) of components

```
npm install --save @astrum-ui/core
```

## Usage

```jsx
import Modal from @astrum-ui/modal
import { useState } from 'react'

export default function HelloModal() {
 const [show, setShow] = useState(false)

 return (
  <>
	 <Modal show={show} setShow={setShow} >
          <h2>Hello world heading</h2>
	  <div>Hello world content</div>
	 </Modal>

	 <button type="button" onClick={() => setShow(true)} >
		Show Modal
	 </button>
  </>
 )
}

```

> **Note** : `h2` must be the direct children of `Modal` to be the heading of modal

## Props

Here's a list of all the props available to customize this modal according to your need

<span>`* for required`</span>
<span>`- for any value of specified type`</span>

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Available Values</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>show *</td>
<td style="text-align: center;" >boolean</td>
<td style="text-align: center;" >false</td>
<td>true, false</td>
<td style="min-width: 200px;">Boolean indicating whether the modal should be visible</td>
</tr>
<tr>
<td>setShow *</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Function to toggle the visibility of the modal, called by close button</td>
</tr>
<tr>
<td>overlayOpacity</td>
<td style="text-align: center;" >number</td>
<td style="text-align: center;" >0.3</td>
<td>0 - 1</td>
<td>Opacity level of the overlay behind the modal (between 0 and 1)</td>
</tr>
<tr>
<td>closeButtonVariant</td>
<td style="text-align: center;" >number</td>
<td style="text-align: center;" >1</td>
<td>1, 2</td>
<td>Variant style of the close button (1 or 2)</td>
</tr>
<tr>
<td>CustomCloseButton</td>
<td style="text-align: center;" >ComponentType</td>
<td style="text-align: center;" >null</td>
<td>-</td>
<td>Custom component to use as the close button</td>
</tr>
<tr>
<td>styles</td>
<td style="text-align: center;" >object</td>
<td style="text-align: center;" >{}</td>
<td>
{<br>
  modal: {},
  overlay: {},
  closeButton: {}
  <br>
}
</td>
<td>Custom CSS styles to apply to the modal and its elements</td>
</tr>
<td>classNames</td>
<td style="text-align: center;" >object</td>
<td style="text-align: center;" >{}</td>
<td>
{<br>
  modal: '',
  overlay: '',
  closeButton: ''
  <br>
}
</td>
<td>Custom class names to apply to the modal and its elements</td>
</tr>
<tr>
<td>animateDuration</td>
<td style="text-align: center;" >number</td>
<td style="text-align: center;" >300</td>
<td>-</td>
<td>Duration of the opening / closing animation (in milliseconds)</td>
</tr>
<tr>
<td>animateIn</td>
<td style="text-align: center;" >string</td>
<td style="text-align: center; white-space: nowrap;" >fadeIn-down</td>
<td style='display: flex; flex-direction: column; gap: 0; white-space: nowrap;'>
<span>fadeIn,</span>
<span>fadeIn-up,</span>
<span>fadeIn-down,</span>
<span>fadeIn-left,</span>
<span>fadeIn-right,</span>
<br>
<span>zoomIn,</span>
<span>zoomIn-up,</span>
<span>zoomIn-down,</span>
<span>zoomIn-left,</span>
<span>zoomIn-right,</span>
<br>
<span>slideIn-up,</span>
<span>slideIn-down,</span>
<span>slideIn-left,</span>
<span>slideIn-right</span>
</td>
<td>Animation effect when the modal opens</td>
</tr>
<tr>
<td>animateOut</td>
<td style="text-align: center;" >string</td>
<td style="text-align: center;" >''</td>
<td style='display: flex; flex-direction: column; gap: 0; white-space: nowrap;'>
<span>fadeOut,</span>
<span>fadeOut-up,</span>
<span>fadeOut-down,</span>
<span>fadeOut-left,</span>
<span>fadeOut-right,</span>
<br>
<span>zoomOut,</span>
<span>zoomOut-up,</span>
<span>zoomOut-down,</span>
<span>zoomOut-left,</span>
<span>zoomOut-right,</span>
<br>
<span>slideOut-up,</span>
<span>slideOut-down,</span>
<span>slideOut-left,</span>
<span>slideOut-right</span>
</td>
<td>Animation effect when the modal closes</td>
</tr>
<tr>
<td>onOpen</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered when the modal opens</td>
</tr>
<tr>
<td>onOpenStart</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered at the start of the modal opening animation</td>
</tr>
<tr>
<td>onOpenEnd</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered at the end of the modal opening animation</td>
</tr>
<tr>
<td>onClose</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered at the end of the modal closing animation</td>
</tr>
<tr>
<td>onCloseStart</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered at the start of the modal closing animation</td>
</tr>
<tr>
<td>onCloseEnd</td>
<td style="text-align: center;" >callback</td>
<td style="text-align: center;" >() => {}</td>
<td>-</td>
<td>Callback function triggered when modal is removed from the DOM</td>
</tr>
</tbody>
</table>
