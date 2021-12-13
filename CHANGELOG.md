# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Currently, this repo is in Prerelease. When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
========

## Prerelease

### Adds

- Adds export statements for `ProgressIndicator` and `Slider` components to `index.ts`.
- Adds `Blogs` variant to `Breadcrumbs` component.

### Changes

- Adds "(Required)" text to the placeholder in the `SearchBar` component when `isRequired` is true.

## 0.25.5 (December 9, 2021)

### Fixes

- Updates the Github Action for the Github Pages deployment to use node 12 instead of the default node 16. This caused issues since we now set the node engine to `<=12.22`.

## 0.25.4 (December 9, 2021)

### Adds

- Adds the `ProgressIndicator` component.
- Adds documentation for using `NYPL Design Tokens`.
- Adds the `ActionHelpDefault`, `ActionHelpOutline` and `ActionLaunch` icons to the `Icon` component.
- Adds the DS `Slider` component based on the Chakra `Slider` and `RangeSlider` components.
- Adds the `ButtonTypes.NoBrand` variant to the `Button` component.
- Adds the `additionalStyles` prop to the `Breadcrumbs` component.

### Changes

- Updates the organization of SCSS files by deleting some files and combining others.
- Updates `@chakra-ui/react` to version 1.7.1 and `@chakra-ui/system` to version 1.8.1.
- Updates the `TextInput` component to now have `defaultValue` and `step` props.
- Updates `Latest Version` number for `Image`, `Notification` and `Pagination` components.
- Removes the Storybook "Knobs" addon.
- Updates the margin for labels in the `DatePicker` component when it is in the "date range" state.
- Updates the `DatePicker` component to have proper form spacing when in the "date range" state.
- Updates the `Tabs` component to comply with linting rules -- no functional or visual changes were made.
- Removes the `alignText` prop from the `Notification` component. Storybook was incorrectly displaying `alignText` as an available prop.

### Fixes

- Exports components and variables that were initially missed when they were added: `ColorVariants`, `Fieldset`, `IconAlign`, `StatusBadgeTypes`,
- Fixes `SearchBar` by passing necessary props down to its `TextInput` through the `textInputProps` prop.
- Fixes `DatePicker` component unit tests.
- Removes the `showLabel` prop from the `SearchBar` component to prevent confusion. Labels for the `Select` and `TextInput` components are never shown but are added through the `aria-label` attribute.

### Breaking Changes

- Updates the breakpoint CSS variable names by adding the `--nypl` prefix and the SCSS variables by adding the `$nypl` prefix. Updates references throughout the codebase.
- Changes the `Button`'s `disabled` prop to `isDisabled`.
- Updates npm packages in `package.json`. Removes `cpy-cli`, `react-uid`, `react-is`, `stylelint` and related packages, and `ts-loader` (already added through TSDX). Updates other packages such as `sass-loader`, `prettier`, `jest`, `jest-axe`, and the majority of Storybook addon packages.

### Deprecates

- Deprecates the `Input` component. The `Input` component will be removed from the NYPL Design System React Library in the first release of January 2022.
- Deprecates the `CardEdition` component. The `CardEdition` component will be removed from the NYPL Design System React Library in the first release of January 2022.

## 0.25.3 (November 18, 2021)

### Adds

- Adds the `ImageRatios`, `ImageSizes`, and `ImageTypes` enums.
- Composes the DS `Fieldset` component with Chakra. This always renders a `legend` element as its first child but it can be optionally hidden from the screen.
- Adds the ability to make an entire `Card` component clickable with Chakra's `LinkBox` and `LinkOverlay` components. Links in the `CardActions` component can still be accessed in this state by clicking with the mouse or tabbing and pressing "enter".
- Adds new file type SVG files to use in the `Icon` component: Audio, Doc, GenericDoc, Image, PDF, Spreadsheet, Video.
- Adds `ActionCheckCircle` SVG file to use in the `Icon` component.

### Changes

- Updates the Github Action for the changelog reminder.
- Updates the `Checkbox` component with an "indeterminate" state through the `isIndeterminate` prop.
- Updates the `CheckboxGroup` component story with an "indeterminate" state example.
- Updates the `CheckboxGroup` and `RadioGroup` components to use the `Fieldset` component.
- Updates the `HelperErrorText` and `TextInput` components with added `additionalStyles` prop.
- Updates the `Button` Style Guide documentation.
- Updates the `Iconography` Style Guide story documentation.
- Updates the `Button` font weight to "regular".

### Fixes

- Fixes nondeterministic unit test in the `DatePicker` component.
- Version of latest `List` component release in its storybook page.
- Adds validation to the `height` prop in the `HorizontalRule` so percentage values are not used. If a percentage value is used, the default "2px" value is set.
- Fixes styling issues for the `Notification` dismissible button.
- Fixes `SearchBar` mobile styling for the `Select`, `TextInput`, and `Button` components.
- Fixes `SearchBar` focus flicker when the `Select` component is selected.

### Breaking Changes

- Updates the `Notification` component to fix the custom icon alignment.
- Adds the `title` prop to the `Icon` component to render a `title` HTML element for accessible SVG icons.
- Updates the default font size of the `Button` component to `"-1"` (14px) for all variants except the `Link` variant. Removes the `bem` function from internal use and makes it clearer that the `ButtonGroup` Chakra component is exported in the Design System.
- Updates the `errorText` prop to `invalidText` for the `Checkbox` component.
- Composes the DS `Pagination` component with Chakra. Removes the BEM-related props and updates the `currentPage` prop to `initialPage`. The current selected page is now kept in state inside the `Pagination` component and returned to the user through `getPageHref` or `onPageChange`. This also adds better aria attributes to the list inside the `Pagination` component.
- Composes the DS `Image` component with Chakra styling and updates all `Image` references in other DS components. The `attributes` prop and the BEM related props `blockname` and `modifiers` have been removed. Adds the following new props: `additionalStyles`, `component`, `imageAspectRatio`, `imageSize`, `imageType`.
- Composes the DS `Card` component with Chakra. BEM related props `modifiers` and `blockname` have been removed. Replaces the `CardImageRatios` with `ImageRatios`. Removes the `CardImageSizes` enum.
- Composes the DS `DatePicker` component with Chakra. Adds more tests, documentation, and examples. This component now uses the `Fieldset` component for the date range type, and better `Form` components for layout. Prop name changes: `dateRange` is now `isDateRange` and `required` is now `isRequired`. BEM related props `modifiers` and `blockname` have been removed. The "Required"/"Optional" text in the date range legend can now be hidden with the `showOptReqLabel` prop.
- Composes the DS `SkeletonLoader` with Chakra's `Skeleton` component. BEM related prop `modifiers` has been removed. Chakra's default `Skeleton` styles have been updated with NYPL's theme.
- Removes deprecated CSS variables. Now the DS repo only uses the CSS variables exposed by Chakra that contain the `--nypl` prefix.

## 0.25.2 (October 28, 2021)

### Adds

- Adds custom `useCarouselStyles` hook for the `Tabs` mobile carousel functionality.
- Adds custom NYPL-theme radii values to use within Chakra, mostly for border radius values.
- Adds the `showHelperInvalidText` prop to form components to control displaying or hiding the content in the `HelperErrorText` component.
- Adds `useNYPLTheme` hook for consuming applications to use NYPL DS values.
- Adds the DS `ComponentWrapper` helper component for internal use.
- Adds `useWindowSize` hook for responsive styles and functionality.
- Adds Chakra Migration Guide for version `0.25.0` and greater.

### Changes

- Updates the CSS vars name prefix to use `nypl`.
- Updates documentation in the README and updates the issue contribution template.
- Updates the following components to use the `showHelperInvalidText` prop: `Checkbox`, `CheckboxGroup`, `DatePicker`, `Radio`, `RadioGroup`, `SearchBar`, `Select`, `TextInput`, `VideoPlayer`.

### Breaking Changes

- Composes the DS `Notification` component with Chakra components. Removes the `NotificationHeading` and `NotificationContent` components as exports and are only used internally in `Notification`. Instead of children component, `Notification` accepts the heading and content values through the `notificationHeading` and `notificationContent` props, respectively.
- Composes the DS `HelperErrorText` component with Chakra. BEM related props `modifiers` and `blockname` have been removed. The `isError` prop has been renamed to `isInvalid`.
- Composes the DS `VideoPlayer` component with Chakra. BEM related prop `modifiers` has been removed.
- Composes the DS `HorizontalRule` component with Chakra. BEM related prop `modifiers` has been removed, as well as the `attributes` prop.
- Composes the DS `List` component with Chakra. BEM related props `modifiers` and `blockname` have been removed. The `noStyling` prop is now used for the no list style variant style.

## 0.25.1 (October 14, 2021)

### Adds

- Updates the `Accordion` component to internally use Chakra components.
- Adds DS `SimpleGrid` component composed from Chakra's `Simplegrid` component.
- Adds DS `Text` component composed from Chakra's `Text` component.
- Update the NYPL Colors with updated color names and values.
- Composes the DS `TextInput` component from Chakra's `Input` and `Textarea` components.
- Composes the DS `Select` component from Chakra's `Select` component.
- Composes the DS `Hero` component from Chakra's component.
- Composes the DS `CheckboxGroup` component from Chakra's `CheckboxGroup` component.
- Composes the DS "Template" components (`Template`, `TemplateHeader`, `TemplateBreakout`, `TemplateContent`, `TemplateContentPrimary`, `TemplateContentSidebar`, `TemplateFooter`) from Chakra's `Box` component for page layouts through children components.
- Composes the DS `TemplateAppContainer` component from Chakra's `Box` component for page layouts through props.
- Composes the DS `Link` component with Chakra component and fixes the `Button` type.
- Exports Chakra's `Grid` and `GridItem` components.
- Composes the DS `Label` component with Chakra component and updates the font size.
- Composes the DS `StatusBadge` component from Chakra's component.
- Composes the DS `Forms` component using DS and Chakra components.
- Composes the DS `Icon` component with Chakra's `Icon` component. Added new props for `Icon` sizing, alignment, name, and rotation.
- Composes the DS `SearchBar` component from DS `Select`, `TextInput`, `Button`, and `HelperErrorText` components.
- Composes the DS `Breadcrumbs` component from Chakra's `Breadcumb`, `BreadcrumbItem` and `BreadcrumbLink` components.

### Changes

- Updates spacing values to use NYPL spacing rather than "em"s.
- Updates the `SkeletonLoaderLayouts` enum values from `Horizontal` and `Vertical` to `Row` and `Column`, respectively.
- Updates the `CardLayouts` enum values from `Horizontal` and `Vertical` to `Row` and `Column`, respectively.
- Updates font size of the `legend` element used in `CheckboxGroup`, `DatePicker` and `RadioGroup`.
- Updates the radius values through Chakra's theme object.

## 0.25.0 (September 30, 2021)

### Breaking Changes

- Renames `HeadingDisplaySizes.tsx` to `HeadingTypes.tsx`.

### Adds

- Integrates Chakra-UI into the codebase.
- Moved SCSS and CSS variable styles into a custom NYPL theme to extend Chakra's base theme.
- Adds `DSProvider` component to use the NYPL theme in consuming applications.
- Exports Chakra's `Box`, `Center`, `Circle`, `Square`, `Stack`, `HStack`, and `VStack` components.
- Composes the DS `Button` component from Chakra's `Button` component.
- Composes the DS `Heading` component from Chakra's `Heading` component.
- Composes the DS `Tabs` component from Chakra's `Tabs`, `TabList`, `Tab`, `TabPanels`, and `TabPanel` components.
- Composes the DS `Radio` component from Chakra's `Radio` component.
- Composes the DS `RadioGroup` component from Chakra's `RadioGroup` component.
- Composes the DS `Checkbox` component from Chakra's `Checkbox` component.
- Updates the `errorText` prop name to `invalidText`.

### Removes

- Removes the `color-classes` SCSS mixin.

### Changes

- Updates the development preview URL from the Netlify link to the Tugboat QA link.

## 0.24.1

### Adds

- Adds `FormSpacing` enum to DS exports.
- Adds `utility_account_filled`, `utility_account_unfilled`, `utility_hamburger` and `utility_search` icons to `Icon` component.

### Changes

- Updates `General Guidelines` for `Buttons Style Guide`.

### Fixes

- Fixes left padding on `Card` when `imageAtEnd` and `border` are both `true`.

## 0.24.0

### Breaking Changes

- Renames original `Card` components to be `CardEdition`.

### Adds

- Adds the `DatePicker` component.
- Adds new `Card` component.
- Adds `spacing` prop to `Form` component to allow for spacing variations.
- Adds Style Guide `Forms`

### Changes

- Exports `VideoPlayerAspectRatios`.
- Adds additional props for the `DatePicker` component based on its TAD Addendum section.
- Adds Tugboat QA configuration for PR preview deployments to replace Netlify.
- Updates the `DatePicker`, `TextInput`, `Select`, and `Label` components to pass an optional `showOptReqLabel` prop to conditionally render "Required"/"Optional" in the label text.

### Fixes

- Fixes Accordion FAQ Storybook example rendering bug.

## 0.23.4

### Adds

- Adds TSDX as the bootstrapping tool to add opinionated configurations.
- Adds an `/example/` directory through TSDX with an small playground app.
- Snapshot testing through `react-test-renderer` and Jest.
- Typescript documentation file to be use as a development guide.
- Typescript documentation for `enum` variables in the TYPESCRIPT file.
- Adds `SkeletonLoaderLayouts` and `SkeletonLoaderImageRatios` enums to DS exports.
- Adds heading, description and helper text to `VideoPlayer` component.
- Adds `@storybook/addons-jest` plugin to display Jest/React Testing Library unit tests in a Storybook tab.

### Changes

- Updates Style Guide `Spacing`.
- Updates `Hero` component to include `Campaign` variant.
- Updates `Hero` stories to use MDX format.
- Updated warnings for too few or too many option children for the `Select` component.
- Updates the README to include information on the production, development, and "preview" Storybook documentation instances.
- Removes a custom SCSS breakpoint in `_Breadcrumbs.scss` in favor of mobile-first style rules.
- Replaces Mocha, Chai, Sinon, and Enzyme for Jest and React Testing Library for unit testing.
- Replaces webpack with rollup through TSDX.
- Updates npm scripts to use TSDX for internal commands.
- Replaces lodash with own functions.
- Minor updates to Github Actions.
- Adds PostCSS/autoprefixer to Rollup workflow instead of the default scss minifier.

### Fixes

- Fixes the `bem` utility function so that it doesn't crash Storybook whenever the `modifiers` Controls prop option is empty.

## 0.23.3

### Fixes

- Removes the `storybook-static` directory from `.gitignore` so that the Github Actions deploy job can work properly.

## 0.23.2

### Adds

- Adds `Form` component.
- Adds `Notification` component.
- Adds Style Guide `Buttons`.
- Adds `VideoPlayer` component.
- Adds the ability to render a `textarea` element from the `TextInput` component.

### Changes

- Updates stories for the `List` component to use MDX format.
- Updates stories for the `Pagination` component to use MDX format.
- Updates how children are rendered in the `List` component. Direct children `li`, `dt`, and `dd` elements can still be passed, but specific data structures can be passed to the `listItems` prop to render the appropriate children element.
- Updates to the contributing documentation, pull request template, and the README.
- Changes `DisplaySizes` to `HeadingDisplaySizes`.
- Changes `Skeleton Loader` to be configurable via props.
- Changes `Button` to use `16px` for left/right padding for buttons with text; icon only buttons still use `8px` left/right padding.
- Changes `TextInput` label text to `font-weight: 500`.

## 0.23.1

### Adds

- Adds CSS vars for `font-weight`
- Adds `displaySize` prop to `Heading`
- Adds Style Guide `Iconography`
- Adds new SVGs to be used with the `Icon` component. Among the new SVGs are: Error solid, Error outlined, Speaker Notes.
- Adds ability to change the color of an SVG icon with classes such as: `ui-black` (default), `ui-white`, `brand-primary` (red), `section-research-secondary` (turquoise).
- Adds `helperText` and `errorText` props to `Checkbox`
- Adds `helperText` and `errorText` props to `Radio`
- Adds `errorText`, `helperText`, `labelText`, `required` and `showLabel` props to `Select`

### Changes

- Updates content in Style Guide `Typography`
- Updates content in Style Guide `Breakpoints`
- Changes `Link` story from `.tsx` to `.mdx`.

### Deprecates

- Deprecates `ariaLabel`, `helperTextId`, `isRequired` and `labelId` props in `Select`

## 0.23.0

### Breaking Changes

- Removes `breakout` CSS from `Breadcrumbs`. To retain previous behavior, `Breadcrumbs` component should be a child of a `.content-header` element.
- Removes `breakout` CSS from `Hero Secondary`. To retain previous behavior, `Hero` component should be a child of a `.content-header` element.

### Adds

- Adds `HorizontalRule` component
- Adds new `short` class for `Placeholder`
- Adds `Style Guide` category to Storybook sidebar

### Changes

- Changes `Breadcrumbs` story from `.tsx` to `.mdx`
- Changes `Heading` story from `.tsx` to `.mdx`
- Changes suggested DOM structure in `Template` Story

## 0.22.2

### Changes

- Adds documentation on layout bidirectionality
- Changes `Pagination` to hide pagination UI when there are 0 or 1 pages.

## 0.22.1

### Changes

- Removes `color-classes` and `css-vars` mixins from `_03-mixins.scss`
- Adds `color-classes` and `css-vars` mixins to `styles.scss`
- Changes order of CSS `@import` rules in `styles.scss`
- Adds quotes around `black` and `white` in `$colors` object in `_colors-utility.scss`

## 0.22.0

### Breaking Changes

- Removes `--ui-success` CSS variable and adds `--ui-success-primary` and `--ui-success-secondary`
- Removes `checkboxId` prop from `Checkbox` component and employs `id` in its place.
- Removes `defaultChecked` prop from `Checkbox` component.
- Removed `labelOptions` prop from `Checkbox` component and employs `labelText` in its place.

### Changes

- Added: Definition List component.
- Changed: Separate Checkbox into its own component.
- Changed: Separate Radio button into its own component.
- Adds `Tertiary` state to Hero component
- Changes `Brand` and `Utility` color values to match Figma main file
- Changes `Radio` styles to use SASS vars in place of CSS vars
- Adds `TextInput` component to handle email, hidden, number, password, text, textarea, tel and url input types
- Adds default width and padding to `StatusBadge` component.
- Hides pagination when there are 0 or 1 pages.

### BugFixes

- Fixed layout bug for layouts that include a right sidebar column and DOM structure.

## 0.21.2

### Changes

- Adds `getPageHref` to `Pagination`

## 0.21.1

### Changes

- `Accordion`: Adds `fixed-height` modifier and `defaultOpen` prop
- `List` defaults to grey bullets instead of black
- Adds margins inside the default columns of `Card`

### BugFixes

- Breadcrumbs now show up in light colours
- Template reflow and breakpoints now happen at the same time
- Fixes release github action

## 0.21.0

### Breaking Changes

- Removes `statusBadgeText` prop in StatusBadge to allow text to be inside component

### Changes

- Add `method` and `action` to `SearchBar` `<form>`

### Bugfixes

- Add the `attributes` property to the `SearchBar` `<form>`
- Adds focus outline to the `Accordion` component so it appears when it is tabbed.

## 0.20.2

### Changes

- Exports mixins in a `resources.scss` file that can be used by consumers.

### Bugfixes

- `Link` with class `button` has white text color

## 0.20.1

### Bugfixes

- Fixes `Pagination` when there are fewer than 4 pages
- Adds `StatusBadge` component to `design-system-react-components` package

## 0.20.0

### Changes

- `Select`: selectedOption holds the selected value, instead of just the default.
- `Hero`: `Hero.Secondary` now changes background color based on NYPL site section
- `Hero`: All props are now optional
- `Input`: added onChange prop to explicitly allow it to be used as a controlled component
- Uses stricter linters and more Prettier configs.

### Breaking Changes

- Removed `SectionTitle`
- Scopes all element selects to the `.nypl-ds` class

## 0.19.1

### Breaking Changes

- Accordion: Accordion input styling affects only direct children
- Checkbox: Allows checkbox to be used as a controlled component or uncontrolled component.

## 0.19.0

### Breaking Changes

- Updates `Pagination` component to match new design.

## 0.18.7

### Changes

- Adds actual `StatusBadge` component with props for setting levels [RENO-1882](https://jira.nypl.org/browse/RENO-1882)

## 0.18.6

### Changes

- Updates `Hero`'s primary option to have a larger top/bottom padding on the inner content via [Reno-1670](https://jira.nypl.org/browse/RENO-1670)

## 0.18.5

### Changes

- Converts the Accordion component to open and close through CSS rather than through Javascript.

## 0.18.4

### Changes

- Updates the `Input` component to conditionally render an `id` attribute if an `id` prop value is passed to it.

## 0.18.3

### Changes

- Add `overflow: hidden` to `.no-scroll` styling on `<body>` for modal to prevent scroll element for content behind modal being displayed

## 0.18.2

### Changes

- Updates Accordion sets so that first item in list doesn't have `-1px` top margin

## 0.18.1

### Breaking Changes

- For `Input` components that use the `.input-group` class, on mobile those input elements are now stacked on top of each other rather than side-to-side.

### Updates

- Updates the `Input` component to allow it to render a "hidden" input type.

## 0.18.0

### Breaking Changes

- Removes type, color, and line-height declarations from `body` tags and moves them to the `.nypl-ds` namespace

## 0.17.4

### Changes

- Moves footer outside of `.nypl-ds` namespace on Template story

## 0.17.3

### Adds

- `SkeletonLoader` component for loading screens

## 0.17.2

### Adds

- `selectedOption` to `Pagination` story

## 0.17.1

### Adds

- `FiftyFifty` Hero type styling

## 0.17.0

### Breaking Changes

- Sets up the default `font-size` value in the `.nypl-ds` namespace.

## 0.16.1

### Adds

- Styling for `Accordion` sets

### Changes

- `className`s within `Accordion` for content
- Hover stylings for `Accordion`

## 0.16.0

### Breaking Changes

- Removes the padding on the `breakout` mixin
- Removes the padding on the `wrapper` mixin at the `xl` breakpoint

## 0.15.1

### Removes

- `arrow_xsmall` and `search_small` icons

## 0.15.0

### Breaking Changes

- Fixes a bug in which content was not centered within `Button` when button was made larger than the text content

### Removes

- Additional `Button` CSS that was no longer used after Button API refactor in 0.13.0
- Deprecates `SearchResultItem`

## 0.14.0

### Breaking Changes

- `Image` now has an `alt` prop instead of an `altText` prop
- Removes `isDecorative` property in favor of an empty `alt`

### Adds

- Adds HTML `<img>` props to the `Image` component

## 0.13.0

### Breaking Changes

- Removes all icon props from `Button`. Button now uses `Icon` as a child
- Removes `ButtonIconPositions`

### Changes

- Makes `Button`'s `onClick` property optional

## 0.12.0

### Breaking Changes

- Moves box-sizing declarations to a `.nypl-ds` namespace. All future "global" CSS settings will move to exist under this namespace.

### Adds

- Universal focus styling

## 0.11.5

### Changes

- Updates the margin on action-links from `xxs` to `xs`

## 0.11.4

### Changes

- Removes the `description` tag from the `<span>` element wrapping svg icons (#360)

## 0.11.3

### Changes

- `Icon` now accepts children for custom icons

## 0.11.2

### Adds

- Status Badge component as stories

## 0.11.1

### Changes

- DS bundle is now compiled for es5 instead of es6 to accommodate for IE11 and the arrow functions we're using in DS

## 0.11.0

## Breaking Changes

- Removes options from the `Pagination` component

## 0.10.4

### Changes

- Updates the `Link` component's `linkType` prop to `type`, implements `React.forwardRef` to use with other libraries, and updates the stories.

## 0.10.3

### Changes

- Updates the `Icon` component's `name` prop to allow for `LogoNames` enum types.

### Adds

- Adds a "negative" NYPL logo to be used on non-white backgrounds.

## 0.10.2

### Changes

- Updates the formatting of svg file names to use underscores

## 0.10.1

### Changes

- Updates the `Input` element to allow props and attributes to be able to render input elements of type "radio".

## 0.10.0

### Removes

- Deprecates `SectionName` in favor of the stories under `Colors—Brand`

## 0.9.3

### Adds

- SVGs for NYPL full logo lockup, Queens Public Library Logo, and Brooklyn Public Library Logo

## 0.9.2

### Adds

- CSS to style [React Autosuggest](https://github.com/moroshko/react-autosuggest/)

## 0.9.1

### Changes

- `Breadcrumbs`'s background color now reflects the app's globally applied section modifier, such as `.nypl--locations`. It recognizes these for `--locations`, `--whats-on`, `--research`, and `--books-and-more`.

## 0.9.0

### Breaking Changes

- Removes `$color-spotlight`, `$color-your-interests`, `$color-support`, and `$color-help`
- Removes all `$nypl-` prefixed Sass variables
- `$color-success` is now `--ui-success`.
- Breakpoint variables are now prefixed with `breakpoint`.
- Type sizing variables are now prefixed with `font-size`.
- Typeface variables are now prefixed with `typeface`.
- Removes `--font-size-1p5`, which was originally added as certain designs call out `20px` for headings and others at `18px`. Figma documentation refers to `18px` only as of [0.1.1](https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16).

### Adds

- Exposes color and typography constants as CSS variables
- Adds Section colors for `--section-research-library-lpa`, `--section-research-library-schomburg`, and `--section-research-library-schwartzman`

### Removes

- Letterspacing property on all body copy

## 0.8.0

### Removes

- `width: 100%` on svgs

## 0.7.2

### Adds

- Adds icons for `accessibility_full`, `accessibility_partial`, `clock`, `check`, and `close`

### Changes

- Updates the `download` icon to Google Material Design's icon.

## 0.7.1

### Changes

- Updated the Select component to take in a ref using ForwardRef and also a `name` prop.

## 0.7.0

### Breaking Changes

- `FormDropDown` and `Dropdown` are now `Select`
- `Textfield` has been retired in favor of `Input`
- `Input` type is now controlled via an enum defined in `InputTypes` instead of a string
- Changes `referenceId` to `htmlFor` on `Label`
- Deprecates `DateRangeForm`, `BodyText`, `SearchPromo`, `Container`, and `RNHeaderWithSearch`
- `Button` now accepts an `onClick` instead of a `callback`
- In the `ButtonTypes` enum, `Filled` and `Outline` have been changed to `Primary` and `Secondary`, respectively
- `Accordion` now accepts `accordionLabel` and `labelId` instead of `buttonOpts` properties
- Removes project-specific styles for now deprecated `EditionCard`
- Removes project-specific styles of `.search-results-list` and `.form-item--radios`
- `UnorderedList` is now `List`, with an enum to control whether is it ordered or unordered
- `Input` `id` is no longer prepended with `input-`
- `Button` `id` is no longer prepended with `btn-`
- `SearchBar` no longer has props for `selectChangeHandler`, `selectBlurHandler`, or `searchChangeHandler`.
- `Input` offers `ariaLabel` and `ariaLabelledby` props in favor of `labelId` and `helperTextId`
- Removes `headingAttributes?: {}` from `SectionTitle`

### Adds

- Adds `aria-live` and `aria-atomic` to `HelperErrorText` in its errored state
- Adds "Optional", "Required", or empty string inside `Label` for forms
- Adds `IconNames` enum to make `allSVGs` array globally accessible
- Adds `width: 100%` globally to SVGs
- `Card` now constrains items in its `image` column to the column width
- Adds the `forwardRef` implementation to the `Input` component
- Adds `disabled` prop to `Input` and `Button` components
- Adds `disabled` styling to `Button.Primary`
- Adds `className?: string;` as additional props to all components
- Adds `attributes?: { [key: string]: string }; ` to `Input`, `Button`, `Select`, `Link`, and `Image`
- Adds `justify-content: center` for `Button` with icon to adjust for mobile

### Changes

- Fixes bug in former `FormDropdown` (now `Select`) where the select value would not change if `selectedOption` were passed
- `Link`'s scss now references `$ui-link-primary` instead of `$nypl-blue-regular`
- Changes `Select`'s SCSS to use the updated styling from Filament Group
- `Image` is wrapped in `figure` when `imageCaption` or `imageCredit` is passed to `Image`
- Adds `viewport` properties to any SVG files that were missing it

### Removes

- Removes `HelperErrorTextOptions`

## 0.6.0

### Breaking Changes

- Removes `RNSectionTitle`

### Changes

- Updates `$nypl-blue-regular` from #0071ce to #0576d3
- `$nypl-blue-regular` is now extended with `$ui-link-primary`

## [0.5.0]

### Breaking Changes

- `EditionCard` is now `Card`
- Buttons from black by default to blue

### Adds

- Icon for audiobook
- Changes the line-height values on some of the heading mixins

## [0.4.1]

### Changes

- Makes all IDs optional

## [0.4.0]

### Breaking Changes

- Concatenates `BasicLink`, `UnderlineLink`, and `IconLink` into `Link` with `LinkTypes` enum
- Moves styles into their corresponding component folders
- Moves base styles into the react-components package
- Deprecates `@nypl/design-system-styles`

### Changes

- Moves tests into their corresponding component folders
- Flattens component structure to export as one package.
- Exports `Icon`

## [0.3.7]

- Fixed `dist` script so it clears the folder
- Added `viewBox` to `arrow` icon

## [0.3.6]

- added `Template` stories
- fixed `Accordion` buttons
- added `viewBox` to `arrow-xsmall` icon

## [0.3.5]

- Move `Placeholder`, `Modal`, `SectionName` and `Container` from `/00-base` into top-level `/components`
- Fix Storybook errors for Headings with Bold and Headings with Link.
- Move `Headings/*` from `/02-molecules` into top-level `/components`
- Inlined icons inside `react-components`
- No longer publishing `@nypl/design-system-icons` package

## [0.3.4]

- Exported `searchValue` and `selectedField` in `RNHeaderWithSearch`

## [0.3.3]

- Added `blockName` handling to `DateRangeForm`

## [0.3.1]

- Exports `SectionName` and `Image`

## [0.3.0]

### Breaking Changes

- Edition Card no longer accepts strings for links and descriptions

### Changed

- Added `iconName` as an optional prop in `IconLink`

## [0.2.1] - 2020-04-23

### Removed

- `HeaderWithImageRight` component and corresponding story

## [0.2.0] - 2020-04-13

### Changed

- Reworks `HeaderWithImageRight` into `Hero`, which accepts values from an enum to display different kinds of heros based on [this documentation page](https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314)

## [0.1.1]

### Changed

- `Textfield` id is no longer duplicated
- `Dropdown` now applies `bem` `blockName`
- `Pagination` now passes in `blockName` into `Dropdown`

## [0.1.0]

### Breaking Changes

- Large classes now have `Opts` inteface that allows for the component to be built over multiple steps. This affects:
  - `HelperErrorText`
  - `Label`
  - `TextField`
  - `Button`
- Deprecated `SearchResultsList`, `IconLinkList` and `EditionsList` in favor of `UnorderedList`
- `type` in `Button` now corresponds to html button types. `buttonType` in button corresponds to the visual categories of buttons (eg: `filled`, `outline`)
- `subtitle` in `SearchResultsItem` changed to `subtitleContent` to take a JSX
- `Label` and `Button` only accept children when called directly

### Added:

- `Checkbox`
- `DateRangeForm`
- `Input`
- `Accordion`
- `UnorderedList`
- # `Modal`

## [0.0.17] - 2020-03-17

- Changelog update

## [0.0.16]

- `HeaderImgRight` accepts elements

## [0.0.15] - 2020-03-3

### Changed

- `Button` component accepts content to render from its `content` prop or its `children` prop.

## [0.0.14] - 2020-02-18

### Changed

- `EditionCard` `EditionInfo` fields accept elements
- `EditionCard` `ReadOnline` and `Download` fields accept elements

### [0.0.14] - 2020-02-18

- added `noLinkElement` to `EditionCard` to receive an element

## [0.0.11] — 2020-01-23

### Added

- `EditionsList`

## [0.0.10] - 2020-01-14

### Added

- `Dropdown` which controls `FormDropdown` and its corresponding `Label`
- `Label`
- `HelperErrorText`
- `Pagination`
- `EditionCard` component
- `SearchResultItem` component that uses `EditionCard`
- `RN Header With Search`
- a story for `RN Section Title`, which is just a collection of styles
- `SearchResultsList` component

### Changed

- added `iconModifiers` to `Button`
- `buttonId` in `Button` is now required
- refactored `FormDropdown` to not include its own `label`
- `RN Header With Search`
- a story for `RN Section Title`, which is just a collection of styles
- `Link` -> `BasicLink` for clarity
- Bugfixes in `UnderlineLink` and `IconLink`
- Added stories for `BasicLink`
- `Link` missing URL error message
- Consolidated `Heading` and `PageTitle`
- `Heading` now only takes a single span
- Added ResearchNow specific `SearchBar` error state
- A11Y changes for `SearchBar` and `HeaderWithSearch`
- Added stories for AT-79, AT-264 and AT-3
- `selectedOption` added to `FormDropdown` stores selected state

## [0.0.7] - 2020-01-03

### Added

- A webpack file in order to build and distribute a compiled version of the react components. Does not replace the /lib folder usage, but the main file is now pointing to `/dist/design-system-react-components.min.js`.

## [0.0.6] - 2019-12-31

### Added

- `Image` for 2:1 ratio
- `PageTitle`
- `Header with Image Right`
- `FormDropdown`
- `SearchPromo`

### Changed

- Moved heading-related atoms from `01-atoms/Text` into `01-atoms/Text/Heading`
- Updated `Searchbar` component to include Parameters
- Changed `Breadcrumb` export from `Breadcrumbs`

## [0.0.5] - 2019-12-06

### Changed

- `Icon` import

## [0.0.4] - 2019-12-06

### Added

- `Body text` component for plain-text elements
- `UnderlineLink` and `IconLink` for links
- `Icon` component that uses the `design-system-icons` package.
- `SectionTitle` and `Heading` for heading components
- `IconLink-List`for the list of subject links
- `Button` and `TextField` for the searchbar
- `SearchBar` component

### Changed

- `Breadcrumb` now shows icon in mobile view

## [0.0.3] - 2019-11-15

### Changed

- Changed `Breadcrumb` to `Breadcrumbs` to match Twig
- Changed the Breadcrumbs props to accept components

## [0.0.2] - 2019-11-13

### Added

- Started a change log
- Added the Breadcrumb React Component

### Changed

- Changed folder structure to match Twig

## [0.0.1] - 2019-11-13

- Published as a test
