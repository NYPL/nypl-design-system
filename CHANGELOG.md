# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Currently, this repo is in Prerelease. When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
========

## Prerelease

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
