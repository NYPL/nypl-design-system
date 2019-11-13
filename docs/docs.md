# Docs
Project-specific documentation lives in [themetronome.co](http://themetronome.co), as well as documentation for the individual components created themselves.

How those project needs affect our technical implementation are being documented here.

## Branching
The default branch on this repository is `development`. Everything in `development` much have been peer-reviewed by at least one other developer on the project.

The set of SHAs we believe make up a release then move to the `qa` branch, where they are reviewed by colleagues in accessibility and QA.

When a QA release has been approved, it moves into the `production` branch where npm packages are updated.

When a developer has had their branch approved, the developer is responsible for deleting the remote. How feature branches should be named with regards to multidev environments is an ongoing discussion which can be tracked on [Issue #26](https://github.com/NYPL/nypl-design-system/issues/26).

## Pull Requests
Pull requests need at least one approval in order to be merged into `development`.

Pull requests should be appropriately labeled to keep our [pull requests](https://github.com/NYPL/nypl-design-system/pulls) page up-to-date and easily scannable at a glance.

## Versioning and Updating the Changelog
How semver is used on this project and across our projects is an ongoing discussion. Please see [Issue #16](https://github.com/NYPL/nypl-design-system/issues/16) for more information.

## File Structure
`.github/`: A series of Github-specific files.

`.vscode/`: The `settings.json` of VS Code-specific editor settings necessary for this project.

`docs/`: Additional technical documentation necessary for this project.

`src/`: Our npm packages, separated by package.

`storybook`: The docs folder to view and work on react components and twig templates.
