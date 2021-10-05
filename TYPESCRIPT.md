# Typescript & Design System

Using Typescript allows for us to create components with modern best practices while also providing benefits we can use to our advantage as component creators and component implementers.

Typescript is a superset of Javascript. This means that any Javascript you write is valid Typescript. Typescript transpiles to Javascript and this adds an extra step when this codebase goes through a production build.

Using Typescript can, at times, mean writing a lot of boilerplate for what appears to be a simple function or React component. Taking the time, however, to declare object shapes and variable types helps us write maintainable and well-documented code. Not only does this help easily compose components, but it also helps correctly implement components with the appropriate prop values.

Using interfaces and types declare the expected type value of an argument or prop. This helps find and fix bugs _before_ we commit any changes and leads to fewer bugs when the components are built and distributed for applications to consume. Note that type correctness does not mean program correctness; Typescript helps us fix easy to miss bugs, but we MUST still write unit tests.

_Note_: Typescript is not usable when creating Storybook documentation in MDX files. Until this configuration is updated, make sure to implement Design System components appropriately.

## Enums

Some of the NYPL Design System React components have props that only accept a value from a specific set of values. The set of values are organized through a Typescript string `enum`. For example, the `Heading` component has an optional `displaySize` prop. Only values from the `HeadingDisplaySizes` string `enum` are allowed to be used.

Following this pattern (assuming that the consuming app developer is also using Typescript):

- allows component creators to map prop values to SCSS/CSS classes
- allows component creators to define specific values that can be used
- allows app developers to be explicit when implementing a Design System component and passing prop values
- allows app developers to catch errors early in compilation time since Typescript throws an error if an unintended or wrong value was passed

Even with these benefits, using `type`s are preferred over using `enum`s. If we _have_ to use `enum`s, the minimum best practice we can follow is to declare them as string `enum`s. Regular enums evaluate to a 0-indexed based array of values which can have undesired consequences when they are evaluated as prop values.

Resources:

- https://fettblog.eu/tidy-typescript-avoid-enums/
- https://react-typescript-cheatsheet.netlify.app/docs/basic/troubleshooting/types/#enum-types
- https://basarat.gitbook.io/typescript/type-system/enums#string-enums

### HeadingDisplaySizes Example

The following is a full example of an `enum` variable used to declare the `displaySize` component prop.

```jsx
// A string enum
export enum HeadingDisplaySizes {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Callout = "callout",
}
export interface HeadingProps {
  displaySize?: HeadingDisplaySizes;
  // more props...
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const { displaySize, modifiers, ...rest } = props;

  if (displaySize) {
    modifiers.push(displaySize);
  }
  // the rest of the component...
}
```

Component usage in a consuming application that uses Typescript:

```jsx
// No errors:
<Heading
  id="h1"
  level={HeadingLevels.One}
  text={"Heading with Secondary displaySize"}
  displaySize={HeadingDisplaySizes.Secondary}
/>

// This will throw an error. `HeadingDisplaySizes.Secondary` evaluates to
// "secondary" after the code compiles but we expect the explicit
// `HeadingDisplaySizes` enum to be used while developing.
<Heading
  id="h1"
  level={HeadingLevels.One}
  text={"Heading with Secondary displaySize"}
  displaySize="secondary"
/>
```

If the consuming application does not use Typescript, then the following won't throw an error. Also, because Typescript doesn't run in MDX files, the following will also not throw an error in MDX Storybook documentation files. Make sure to write documentation properly.

```jsx
<Heading
  id="h1"
  level={1}
  text={"Heading with Secondary displaySize"}
  displaySize="secondary"
/>
```

### Converting to types

Another way the `displaySize` can be implemented is through a `type`. This gives us the same Typescript prop type validation but is less explicit. For the time being, we want to write explicit prop values to make it easier to debug on non-Typescript applications that import the NYPL Design System.

```jsx
export type HeadingDisplaySizes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "callout";
```
