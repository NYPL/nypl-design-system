# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Currently, this repo is in Prerelease. When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
========

## 0.6.0

### Breaking Changes

-   Removes `RNSectionTitle`
-   `FormDropDown` and `Dropdown` are now `Select`

### Changes

-   Updates `$nypl-blue-regular` from #0071ce to #0576d3
-   `$nypl-blue-regular` is now extended with `$ui-link-primary`

## [0.5.0]

### Breaking Changes

-   `EditionCard` is now `Card`
-   Buttons from black by default to blue

### Adds

-   Icon for audiobook
-   Changes the line-height values on some of the heading mixins

## [0.4.1]

### Changes

-   Makes all IDs optional

## [0.4.0]

### Breaking Changes

-   Concatenates `BasicLink`, `UnderlineLink`, and `IconLink` into `Link` with `LinkTypes` enum
-   Moves styles into their corresponding component folders
-   Moves base styles into the react-components package
-   Deprecates `@nypl/design-system-styles`

### Changes

-   Moves tests into their corresponding component folders
-   Flattens component structure to export as one package.
-   Exports `Icon`

## [0.3.7]

-   Fixed `dist` script so it clears the folder
-   Added `viewBox` to `arrow` icon

## [0.3.6]

-   added `Template` stories
-   fixed `Accordion` buttons
-   added `viewBox` to `arrow-xsmall` icon

## [0.3.5]

-   Move `Placeholder`, `Modal`, `SectionName` and `Container` from `/00-base` into top-level `/components`
-   Fix Storybook errors for Headings with Bold and Headings with Link.
-   Move `Headings/*` from `/02-molecules` into top-level `/components`
-   Inlined icons inside `react-components`
-   No longer publishing `@nypl/design-system-icons` package

## [0.3.4]

-   Exported `searchValue` and `selectedField` in `RNHeaderWithSearch`

## [0.3.3]

-   Added `blockName` handling to `DateRangeForm`

## [0.3.1]

-   Exports `SectionName` and `Image`

## [0.3.0]

### Breaking Changes

-   Edition Card no longer accepts strings for links and descriptions

### Changed

-   Added `iconName` as an optional prop in `IconLink`

## [0.2.1] - 2020-04-23

### Removed

-   `HeaderWithImageRight` component and corresponding story

## [0.2.0] - 2020-04-13

### Changed

-   Reworks `HeaderWithImageRight` into `Hero`, which accepts values from an enum to display different kinds of heros based on [this documentation page](https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314)

## [0.1.1]

### Changed

-   `Textfield` id is no longer duplicated
-   `Dropdown` now applies `bem` `blockName`
-   `Pagination` now passes in `blockName` into `Dropdown`

## [0.1.0]

### Breaking Changes

-   Large classes now have `Opts` inteface that allows for the component to be built over multiple steps. This affects:
    -   `HelperErrorText`
    -   `Label`
    -   `TextField`
    -   `Button`
-   Deprecated `SearchResultsList`, `IconLinkList` and `EditionsList` in favor of `UnorderedList`
-   `type` in `Button` now corresponds to html button types. `buttonType` in button corresponds to the visual categories of buttons (eg: `filled`, `outline`)
-   `subtitle` in `SearchResultsItem` changed to `subtitleContent` to take a JSX
-   `Label` and `Button` only accept children when called directly

### Added:

-   `Checkbox`
-   `DateRangeForm`
-   `Input`
-   `Accordion`
-   `UnorderedList`
-   # `Modal`

## [0.0.17] - 2020-03-17

-   Changelog update

## [0.0.16]

-   `HeaderImgRight` accepts elements

## [0.0.15] - 2020-03-3

### Changed

-   `Button` component accepts content to render from its `content` prop or its `children` prop.

## [0.0.14] - 2020-02-18

### Changed

-   `EditionCard` `EditionInfo` fields accept elements
-   `EditionCard` `ReadOnline` and `Download` fields accept elements

### [0.0.14] - 2020-02-18

-   added `noLinkElement` to `EditionCard` to receive an element

## [0.0.11] — 2020-01-23

### Added

-   `EditionsList`

## [0.0.10] - 2020-01-14

### Added

-   `Dropdown` which controls `FormDropdown` and its corresponding `Label`
-   `Label`
-   `HelperErrorText`
-   `Pagination`
-   `EditionCard` component
-   `SearchResultItem` component that uses `EditionCard`
-   `RN Header With Search`
-   a story for `RN Section Title`, which is just a collection of styles
-   `SearchResultsList` component

### Changed

-   added `iconModifiers` to `Button`
-   `buttonId` in `Button` is now required
-   refactored `FormDropdown` to not include its own `label`
-   `RN Header With Search`
-   a story for `RN Section Title`, which is just a collection of styles
-   `Link` -> `BasicLink` for clarity
-   Bugfixes in `UnderlineLink` and `IconLink`
-   Added stories for `BasicLink`
-   `Link` missing URL error message
-   Consolidated `Heading` and `PageTitle`
-   `Heading` now only takes a single span
-   Added ResearchNow specific `SearchBar` error state
-   A11Y changes for `SearchBar` and `HeaderWithSearch`
-   Added stories for AT-79, AT-264 and AT-3
-   `selectedOption` added to `FormDropdown` stores selected state

## [0.0.7] - 2020-01-03

### Added

-   A webpack file in order to build and distribute a compiled version of the react components. Does not replace the /lib folder usage, but the main file is now pointing to `/dist/design-system-react-components.min.js`.

## [0.0.6] - 2019-12-31

### Added

-   `Image` for 2:1 ratio
-   `PageTitle`
-   `Header with Image Right`
-   `FormDropdown`
-   `SearchPromo`

### Changed

-   Moved heading-related atoms from `01-atoms/Text` into `01-atoms/Text/Heading`
-   Updated `Searchbar` component to include Parameters
-   Changed `Breadcrumb` export from `Breadcrumbs`

## [0.0.5] - 2019-12-06

### Changed

-   `Icon` import

## [0.0.4] - 2019-12-06

### Added

-   `Body text` component for plain-text elements
-   `UnderlineLink` and `IconLink` for links
-   `Icon` component that uses the `design-system-icons` package.
-   `SectionTitle` and `Heading` for heading components
-   `IconLink-List`for the list of subject links
-   `Button` and `TextField` for the searchbar
-   `SearchBar` component

### Changed

-   `Breadcrumb` now shows icon in mobile view

## [0.0.3] - 2019-11-15

### Changed

-   Changed `Breadcrumb` to `Breadcrumbs` to match Twig
-   Changed the Breadcrumbs props to accept components

## [0.0.2] - 2019-11-13

### Added

-   Started a change log
-   Added the Breadcrumb React Component

### Changed

-   Changed folder structure to match Twig

## [0.0.1] - 2019-11-13

-   Published as a test
