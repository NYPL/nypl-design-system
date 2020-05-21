# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

This repo is in Prerelease. When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

========

## [0.0.23]

-   added `Template` styles

## [0.0.22]

### [Changed]

-   Improve the hover color contrasts for `RNSectionTitle` links on dark backgrounds
-   Removed a superfluous `flex` in SearchPromo

## [0.0.21]

### [Changed]

-   `Edition Card` doesn't collapse on webkit browsers
-   `Accordion` button is not outlined
-   `DateRangeForm` elements stack properly

##[0.0.20]

### Changed

-   `Edition Card` image is now centered in mobile
-   `RNHeaderWithSearch` applies the `--dark-background` link modifier

## [0.0.19]

### Changed

-   `Edition card` `card-info-link` is generalized and does not apply button-like styles
-   `more-link` icon margins use `--icon-left` and `--icon-right` modifiers instead of `left` and `right` modifiers to separate them from rotation

## [0.0.18] - 2020-04-24

### Changed

-   Updates the top of the font stack to include `-apple-system, BlinkMacSystemFont` to fix the Apple typefaces from not loading in Mac Firefox

## [0.0.17] - 2020-04-23

### Changed

-   Reverted `@link` and `@more-link` mixins to content pre-0.0.16
-   Reverts link-color to `nypl-blue-regular` and `nypl-blue-dark` for default and hover states respectively

## [0.0.16] - 2020-04-21

### Breaking Changes

-   Reworks `HeaderWithImageRight` into `Hero`, which accepts values from an enum to display different kinds of heros based on [this documentation page](https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10968%3A5314)

## [0.0.15]

### Changed

-   Styles fixes to dropdown, accordion, pagination

## [0.0.14]

### Added

-   Styles for `modal`,
-   `link` and `justify-right` variations to `button`
-   `unordered-list` class to `text`
-   `checkbox`
-   `date-range`
-   `input`
-   `accordion`

### Changed

-   `dropdown` labels now scale and fill page as needed.

## [0.0.13] - 2020-03-17

-   `edition-card` mobile fixes
-   `header-with-search` has an inset

## [0.0.12] - 2020-02-18

-   `missing-link` span width

## [0.0.9] — 2020-01-23

### Added

-   Styles for `editions-list`

## [0.0.8] - 2020-01-15

### Added

-   Styles for `edition-card`
-   Styles for `header-with-search`
-   Styles for `search-results-list`
-   Styles for `pagination`

### Changed

-   Updated `_text.scss` to accomodate the change from Kievit > `system-font-ui`
-   `heading-xl` mixin `font weight: normal` -> `lighter`
-   `button` type-size and letter-spacing

## [0.0.7] - 2020-01-03

### Changes

-   Changes the `$nypl-turquoise` variables to match what is in `IA + Templates` in Figma
-   Tightens up media queries on header-with-image-right
-   Changes `breakpoint` in `wrapper` mixin so that it reads `max-width` correctly

## [0.0.6] - 2019-12-06

### Added

-   Styles for `page-title`
-   Styles for `header-with-image-right`
-   Adds color variable for `$form-focus`
-   Styles for `search-bar`
-   Styles for `search-promo`

### Changed

-   Refactors `select` styles to use BEM

## [0.0.5] - 2019-12-06

### Added

-   Styles for `iconlink-list`

### Changed

-   `more-link` can now take an icon on the right or left
-   Moved `icons` from within `atoms/images` to `atoms` with a `_` prefix so it is globbed before other atoms
-   `_pl-base.scss_` renamed to `_storybook-only-styles.scss`

### Removed

-   Removes patternlab-specific styles

## [0.0.4] - 2019-11-15

### Changed

-   The breakout() mixin now has swapped signs

### Removed

-   Removes PatternLab-specific styles

## [0.0.3] - 2019-11-15

### Changed

-   System-font now gets imported properly

## [0.0.2] - 2019-11-13

### Added

-   Started a change log
-   Added mixins from Reno to keep up to parity

### Changed

-   Added a margin to Breadcrumb's trailing slash.
-   Breadcrumb uses `inline` instead of `inline-flex` so that word breaks wrap properly
-   Changed the breakpoint for mobile to be smaller

## [0.0.1] - 2019-11-13

-   Published as a test
