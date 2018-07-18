[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Travis build status](https://travis-ci.org/chunksnbits/technology-radar.svg?branch=master)](https://travis-ci.org/chunksnbits/technology-radar)

# Technology radar

This project creates a simple technology radar reflecting technologies and skills that describe your current and future interests in an area of interest.

See [https://chunksnbits.github.io/technology-radar](https://chunksnbits.github.io/technology-radar) for a running demo, based on my personal settings.

Inspired by [ThoughtWorks' TechnologyRadar publications](https://www.thoughtworks.com/de/radar).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using [React 16.3](https://5b05c94e0733d530fd1fafe0--reactjs.netlify.com/).

See description below for how to setup the project in your developement environment.

## Table of Contents

- [Getting started](#getting-started)
  - [Release to Github Pages](#release-to-github-pages)
  - [Webcomponent](#webcomponent)
  - [Custom Build](#custom-build)

## Getting started

There are currently 2 ways for you to release your own version of the technology radar - release to Github Pages or integration into your own page using the webcomponent build.

The Github Pages version will a release a full-page, standalone application that solely includes your technology radar.
The webcomponent build will allow you to integrate the radar into your app, i.e., will allow you to set size, position and layout as you need it.

Both approaches will allow you to provide some customization to the output.

### Release to Github Pages

In order to release to Github Pages, you'll need to:

1. fork this repository
2. update the `homepage` entry in the [package.json](./package.json) file
2. update your skills map by either
  - update the [data.json](./public/data.json) file in the `public` folder or
  - checkout the repository and create a `data.json` file in the `private` folder
See [format options](#data-format) for details on the formatting of the data file.
3. update the the application settings of your technology-radar by editing the [application-config.json](./public/application-config.json) located in the `public` folder
4. (optional) update the look and feel of your technology-radar by adjusting one or both of
  - [theme.json](./public/theme.json)
  - [layout.json](./public/layout.json)

After you have updated the radar you can run:

```bash
yarn start
```
to test your settings locally. Running the start command will launch a development version on [localhost](http://localhost:3000).

If you are satisfied with your settings run

```bash
yarn deploy
```

to release your technology-radar to Github pages. By default the release will be hosted at: https://<% your_github_name %>.github.io/technology-radar/

In order to change the release target, change the `homepage` entry in your [package.json](./package.json).

### Webcomponent

If you prefer to include the technology radar into an existing web page or web application project you can use the `webcomponent` render.

In order to use the technology radar as a webcomponent you'll need to:

1. Import the webcomponent js into your html page (must be imported before the tag).

```html
<script src="https://cdn.jsdelivr.net/gh/chunksnbits/technology-radar@latest/dist/webcomponent.js"
```

2. Place the `technology-radar` tag into your template

```html
<technology-radar></technology-radar>
```

3. Initialize the webcomponent with data, e.g.:

```html
<script>
  const technologyRadar = document.querySelector('technology-radar');

  const theme = {
    primary: 'black',
    secondary: 'grey',
    base: 'white'
  };

  fetch("/my-local-data/data.json")
    .then(response => response.json())
    .then((data) => {
      console.log('+++ data', data);
      technologyRadar.setAttribute('data', JSON.stringify(data.technologyRadar));
      technologyRadar.setAttribute('config', JSON.stringify(data.applicationConfig));
      technologyRadar.setAttribute('theme', JSON.stringify(theme));
    });
</script>
```

**NOTE** Data transfer between to the webcomponent is done using string values, so be sure to `JSON.stringify` your data objects before passing them into the webcomponent.

Alternatively you can pass the input data directly into the wecomponent by using the corresponding attributes:

```html
<technology-radar data="{ 'technologies': { ... } }" config="{ 'title': '...' , ... }"></technology-radar>
```
## Data formats

**Note** All data formats are defined through [json schema definitions](http://json-schema.org/). Be sure to add schema support to your IDE of choice to help you define the format.

**Note** Settings are mandatory, unless marked as *optional*

### application-config.json

- **title** (string) - The title of your technology-radar. Will appear in the first line of the header
- **subtitle** (string) - The subtitle of your instance. Will appear below the title
- **logo** (string, *optional*) - Allows to set a logo outside the project structure (i.e., using an absolute path). If left empty will show the `public/logo.svg` file. Replace this file to change the logo within your fork.

### data.json

Data displayed in a technology radar is structured as a list of `technolgies`, grouped into `groups` and divided into different `levels` of proficiency.
The `data.json` provides the necessary definitions for all three concepts.

- **levels** (Level[])
  - id (string) - an unique id for the level
  - name (string) - the display name to use for the level
- **groups** (Group[])
  - id (string) - an unique id for the group
  - name (string) - the display name to use for the group
  - color (string) - a hex or rgb(a) color code. All technologies within that group will be displayed using that color
- **technologies** (Technology[])
  - id (string) - an unique id for the technology
  - groupId (string) - the id of the group this technology is associated with
  - levelId (string) - the id of the level this technology is associated with
  - name (string) - the display name to use for the technology

### layout.json, *optional*

- **technologyRadar** (TechnologyRadarSettings)
  - **innerRadiusPercent** (number) - defines a free area in the middle of the technology radar. Assures that a minimal distance can be maintained even if multiple items are defined in the area closest to the center (minimum: 0, maximum: 50, default: 10)
  - **outerRadiusPercent** (number) - defines the outer radius of the radar (minimum: 0, maximum: 50, default: 50)
- **breakpoints** (LayoutBreakpoints)
  - **small** (string) - defines a layout breakpoint for smaller devices (e.g., smartphones)
  - **medium** (string) - defines a layout breakpoint for medium devices (e.g., tablet, small desktops)
  - **large** (string) - defines a layout breakpoint for larger devices (e.g., desktop)

### theme.json, *optional*
  - **itemBorderSize** (number) - defines the border size for a technology item - allows to ensure visibility depending on the color of **base**
  - **primary** (string) - a hex or rgb(a) color code - the primary color used for texts
  - **secondary** (string) - a hex or rgb(a) color code - defines the secondary color tone, primary used for borders, shadows
  - **accent** (string) - a hex or rgba(a) color code - primarily used for separators and buttons
  - **base** (string) - a hex or rgb(a) color code - defines the background / base color for the radar
  - **backgroundTextContent** (string, *optional*) - a hex or rgb(a) color code. Can be used to customize the background for the technology-radar details dialog, e.g., when using a darker base tone
  - **textContent** (string, *optional*) - a hex or rgb(a) color code. Should be provided if the **backgroundTextContent** value is set

## Contributing

Found a bug or missing a feature? Please open a issue directly in this repository.
If you already identified the issue and can provide a fix, please open a pull request with reference to the issue.

For submitting issues, please make sure to follow the [issues template](https://github.com/chunksnbits/technology-radar/issues/new).

### Development

If you want contribute to this repository see the [development guide](./DEVELOPMENT.md) for details on how to start, test and build the project, as well as a general introduction into the application structure.
