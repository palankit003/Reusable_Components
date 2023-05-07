# My UI Library

This is a personal UI library that contains a collection of custom React components and styles that can be easily reused in other projects.

## Installation

You can install this library using `npm`:

npm install my-ui-library

## Usage

To use a component from this library, simply import it into your React component and use it as you would any other React component. For example:

```
import { Button } from 'my-ui-library';

function MyComponent() {
return (
<div>
<Button onClick={() => console.log('Button clicked!')}>Click me</Button>
</div>
);
}
```

You can also use styles from this library by importing them into your CSS file. For example:

```
@import url("https://my-ui-library.com/styles.css");

.my-element {
background-color: var(--my-color);
}
```

## Components

### Button

A simple button component.

#### Props

| Prop       | Type     | Default value | Description                               |
| ---------- | -------- | ------------- | ----------------------------------------- |
| `onClick`  | function | -             | Callback function for button click events |
| `children` | node     | -             | The contents of the button                |

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork this repository
2. Make changes to your forked repository
3. Submit a pull request to this repository
