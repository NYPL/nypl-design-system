# Typescript & Design System

Using Typescript allows for us to create components with modern best practices while also providing benefits we can use to our advantage as component creators and component implementers.

Typescript is a superset of Javascript. This means that any Javascript you write is valid Typescript. Typescript transpiles to Javascript and this adds an extra step when this codebase goes through a production build.

Using Typescript can, at times, mean writing a lot of boilerplate for what appears to be a simple function or React component. Taking the time, however, to declare object shapes and variable types helps us write maintainable and well-documented code. Not only does this help easily compose components, but it also helps correctly implement components with the appropriate prop values.

Using interfaces and types declare the expected type value of an argument or prop. This helps find and fix bugs _before_ we commit any changes and leads to fewer bugs when the components are built and distributed for applications to consume. Note that type correctness does not mean program correctness; Typescript helps us fix easy to miss bugs, but we MUST still write unit tests.

_Note_: Typescript is not usable when creating Storybook documentation in MDX files. Until this configuration is updated, make sure to implement Design System components appropriately.

## Type values

Some of the Reservoir Design System React components have props that only accept a value from a specific set of string literal values. The set of values are organized through Typescript string literal types.

Following this pattern (assuming that the consuming app developer is also using Typescript):

- allows component creators to map prop values to theme variants
- allows component creators to define specific values that can be used
- allows app developers to catch errors early in compilation time since Typescript throws an error if an unintended or wrong value was passed

### Heading `size` Example

The following is an example of the type used to update the `size` prop for the `Heading` component. The available values declared by the `HeadingSizes` type are: `"primary"`, `"secondary"`, `"tertiary"`, `"callout"`.

```tsx
export type HeadingSizes = "primary" | "secondary" | "tertiary" | "callout";
export interface HeadingProps {
  size?: HeadingSizes;
  // more props...
}

export const Heading = ...
```

Component usage in a consuming application that uses Typescript:

```tsx
// No errors:
<Heading
  id="h1"
  level="one"
  text="Heading with secondary size"
  size="secondary"
/>

// This will throw an error. "superLargeSize" is not a value declared in the `HeadingSizes` type set.
<Heading
  id="h1"
  level="one"
  text="Heading with bad size value"
  displaySize="superLargeSize"
/>
```

If the consuming application does not use Typescript, then the following won't throw an error. The default style will render since it's not an appropriate value. Because Typescript doesn't run in MDX files, the following will also not throw an error in MDX Storybook documentation files. Make sure to write documentation properly.

```tsx
<Heading
  id="h1"
  level={1}
  text="Heading with bad size value"
  displaySize="superLargeSize"
/>
```
