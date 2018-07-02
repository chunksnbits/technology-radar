
# Technology radar

This project creates a simple technology radar reflecting technologies and skills that describe your current and future interests in an area of interest.

See [https://chunksnbits.github.io/technology-radar](https://chunksnbits.github.io/technology-radar) for a running demo, based on my personal settings.

Inspired by [ThoughtWorks' TechnologyRadar publications](https://www.thoughtworks.com/de/radar).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using [React 16.3](https://5b05c94e0733d530fd1fafe0--reactjs.netlify.com/).

See description below for how to setup the project in your developement environment.

## Table of Contents

- [Getting started](#getting-started)
- [Project setup](#project-setup)
- [Release](#release)
- [Content editing](#content-editing)
- [Testing](#testing)

## Getting started

The project uses [yarn](https://yarnpkg.com/lang/en/) as a package manageer.
See webpage for installation instructions.

To start the project run:

`yarn install`

followed by:

`yarn start`

This will open [http://localhost:3000](http://localhost:3000) in your browser.

*Note* All instructions can also be done through `npm` directly. Replace all `yarn` instructions with `npm run` to run tasks directly through npm.

## Project setup
### Folder Structure

The application is structured as follows

```
private
  [data.json]
  ...
public/
  data.json
  index.html
  theme.json
  favicon.ico
  ... additional assets
src/
  store/

  ui/
    components/
      ...
    modules/
      ...
      TechnologyRadar
        components/
          ...
        index.tsx
        styles.scss
        spec.tsx

    views/
      App
  utils/

  styles.scss
  index.tsx
  typings.d.ts
  registerServiceWorker.ts
```

Some notes on the setup

* App-wide definitions for this application can be found in styles.scss, resp. typings.d.ts in the `src` root folder.
* Definitions should be placed under `public` or `private`. Both folders are considered when resolving static resources
  - The `private` folder is not tracked through git and can be used to define local data, i.e., for testing, individual settings that should not be published

* The `ui/views` folder holds the main views (think of pages) of the application
  - the main application entry point is located in `src/views/App`
* The `ui/modules` folder holds components implementing the business logic of the application
  - modules might define subcomponents, that split the business case into smaller chunks
  - modules are connected to the store, i.e., they can acccess and alter the global state
* The `ui/components` folder holds generic, possibly reusable interface components
  - As far as possible components are defined as React PureComponents
  - Components are solely defined through input / output, i.e., they consume input variables and propagate changes through calling callbacks.
  - They are not direcly connected to the store

## Content editing

Update the file `public/data.json` to create a technology radar based on your personal interests and skills.
The [json schema](http://json-schema.org/) for this file can be found in the project root. See your IDEs documentation on how to enable support for schema verification.

The format defines the following data structures

### App

Holds generic application settings:

```
"application": {
  "editor"        ## Enables edit mode
  "title"         ## Application title
  "subtitle"      ## Application subtitle
}
```

### Technology radar

Holds the main data model for you technology radar, separated into:

```
"technologyRadar": {
  "levels"
  "groups"
  "technologies"
}
```

#### Levels

Level define the proficiancy / level of interest you have developed for this technology.
Levels are defined through:

```
"levels": [{
  "id"          ## unique ID for this level
  "name"        ## display name
}]
```

#### Groups

Groups bind a set of technologies into related blocks. The are defined through:

```
"groups": [{
  "id"          ## unique ID for this group
  "name"        ## display name
  "color"       ## display color
}]
```

#### Technologies

Technologies describe the skills, techniques and frameworks that are used by you or have come onto your radar for feature considerartions.
Define technologies through:

```
"technologies": [{
  "id"          ## unique ID for this skill
  "groupId"     ## foreign key of the group this skill is attached to
  "name"        ## display name
  "level"       ## foreign key of the level this skill is attached to
  "logo"        ## url poointing to the (preferarble svg) logo
  "website"
    "name"      ## display name for this technology's website
    "href"      ## link target for this technolgy's website
  },
  "description" ## description text
}]

```

## Release

### Build the project

You can build the project using `yarn build`.
This creates a static application build in the `dist` folder and can be deployed to any server-setup of your choosing

### Build for github pages

**NOTE** Before deployment, ensure to update field `homepage` in package.json to your github pages path.

Run `yarn deploy` to create a version of this app for github pages. This will create a static, prerendered build and create and publish a branch called `gh-pages` that will automatically be deploy to [github pages](https://pages.github.com/).

## Testing

Running `npm test`. launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### Writing tests

This application uses [Jest](https://facebook.github.io/jest/) as its test runner.
See webpage for additional details on general how to write tests using Jest.

The browser environment is simulated thanks to [jsdom](https://github.com/tmpvar/jsdom), i.e., global variables like document and window are safe to use.

### Adding tests

Any file ending with `.spec.tsx?` is added to the test suite.
