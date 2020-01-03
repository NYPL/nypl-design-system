# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

This repo is in Prerelease. When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

========
## Prerelease
- Changes the `$nypl-turquoise` variables to match what is in `IA + Templates` in Figma
- Tightens up media queries on header-with-image-right
- Changes `normalize.css` for `scss-resets/_normalize` for better importing
- Changes `breakpoint` in `wrapper` mixin so that it reads `max-width` correctly

## [0.0.6] - 2019-12-06
### Added
- Styles for `page-title`
- Styles for `header-with-image-right`
- Adds color variable for `$form-focus`
- Styles for `search-bar`
- Styles for `search-promo`

### Changed
- Refactors `select` styles to use BEM

## [0.0.5] - 2019-12-06
### Added
- Styles for `iconlink-list`

### Changed
- `more-link` can now take an icon on the right or left
- Moved `icons` from within `atoms/images` to `atoms` with a `_` prefix so it is globbed before other atoms
- `_pl-base.scss_` renamed to `_storybook-only-styles.scss`

### Removed
- Removes patternlab-specific styles

## [0.0.4] - 2019-11-15
### Changed
- The breakout() mixin now has swapped signs

### Removed
- Removes PatternLab-specific styles

## [0.0.3] - 2019-11-15
### Changed
- System-font now gets imported properly

## [0.0.2] - 2019-11-13
### Added
- Started a change log
- Added mixins from Reno to keep up to parity

### Changed
- Added a margin to Breadcrumb's trailing slash.
- Breadcrumb uses `inline` instead of `inline-flex` so that word breaks wrap properly
- Changed the breakpoint for mobile to be smaller

## [0.0.1] - 2019-11-13
- Published as a test
