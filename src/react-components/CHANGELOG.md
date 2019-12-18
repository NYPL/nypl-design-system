# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Currently, this repo is in Prerelease.  When it is released, this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

========

## PRERELEASE
### Added
- `Image` for 2:1 ratio
- `PageTitle`
- `Header with Image Right`
- `FormDropdown`
- `SearchPromo`

### Changed 
- Moved heading-related atoms from `01-atoms/Text` into `01-atoms/Text/Heading` 
- Updated `Searchbar` component to include Parameters

## [0.0.6] - 2019-12-19
### Added
- A webpack file in order to build and distribute a compiled version of the react components. Does not replace the /lib folder usage, but the main file is now pointing to `/dist/design-system-react-components.min.js`.

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

