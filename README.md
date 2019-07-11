![NYPL Logo](./nypl-logo.png)

# NYPL Design System
[![Netlify Status](https://api.netlify.com/api/v1/badges/6839172f-a65d-4c7a-87c4-cffe138614c8/deploy-status)](https://app.netlify.com/sites/nypl-design-system/deploys)
This repository holds the code for a pre-V1 of NYPL's newest design system built with [Patternlab](https://patternlab.io/). This time will include lots of breaking changes before V1, so proceed with caution.

As we are pre-V1, requirements, dependencies, usage examples, contribution guidelines, and testing instructions are all still underway. 

## Setup & Installation
1. Download this code locally by running `git clone https://github.com/NYPL/nypl-design-system.git` in your terminal or by hitting the green button that says "Clone or download" and downloading the zip.
2. In the project folder, run `npm install` to fetch the project dependencies. If this fails, you might not have Node installed. Read about that [here](https://nodejs.org/en/download/).

## Developing Locally
1. To start the node server, run `npm start`. The project will run at `localhost:3000`.
2. To make CSS changes, navigate to the css folder by running `cd source/css`. Run `sass watch style.scss:style.css` to see your Sass changes in the project window.

## Deployment
We currently host this project with [Netlify](https://www.netlify.com/). It automatically builds the lastest commit on `master`. When it fails it triffers a message in Slack under `#nypl-ux`. Should you need access to Netlify, contact @helenvholmes on Slack.
