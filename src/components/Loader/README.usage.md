# Loader Component Documentation

## Overview

The `Loader` component is a React functional component designed to display a loading animation while waiting for content to load. Once the content is ready, it displays the children elements. This component allows for customizable loader styles via the `structure` prop and accepts additional class names for styling.

## Usage

Below is an example of how to use the `Loader` component in a React application:

```javascript
<Loader
  loading={loading}
  structure={[
    {
      width: "10px",
      height: "10px",
      backgroundColor: "red",
      margin: "5px",
    },
    {
      width: "10px",
      height: "10px",
      backgroundColor: "green",
      margin: "5px",
    },
    {
      width: "10px",
      height: "10px",
      backgroundColor: "blue",
      margin: "5px",
    },
  ]}
  className="custom-loader"
>
  <div>Content loaded!</div>
</Loader>
```

## Props

The `Loader` component accepts the following props:

### `loading` (boolean)

- **Type**: `boolean`
- **Required**: `true`
- **Description**: Determines whether the loader should be displayed. If `true`, the loader animation is shown; if `false`, the children elements are rendered.

### `structure` (React.CSSProperties[])

- **Type**: `React.CSSProperties[]`
- **Required**: `true`
- **Description**: An array of CSS style objects that define the appearance of the loader items. Each object in the array corresponds to a `span` element rendered as part of the loading animation.

### `children` (React.ReactNode)

- **Type**: `React.ReactNode`
- **Required**: `true`
- **Description**: The content to be displayed once loading is complete.

### `className` (string)

- **Type**: `string`
- **Required**: `false`
- **Description**: Additional CSS class names to apply to the loader container. This allows for further customization of the loader's styling.

## Exported Configuration

The `loaderConfig` is exported for use in other parts of the application. It typically contains predefined configurations for the loader component, but its structure and usage depend on your specific implementation needs.
