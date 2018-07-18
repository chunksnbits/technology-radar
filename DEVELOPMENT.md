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

This will open [http://localhost:3000](http://localhost:3000) in your browser. For a preview version of the `webcomponent` build open [http://localhost:3000/webcomponent.html](http://localhost:3000/webcomponent.html).

*Note* All instructions can also be done through `npm` directly. Replace all `yarn` instructions with `npm run` to run tasks directly through npm.

## Project setup

The application is structured as follows

### Definiitions
```bash
private
  [data.json]
  ...
public/
  data.json
  index.html
  theme.json
  favicon.ico
  ...
schemas
  data.schema.json
  ...
```

Most configurations and definitions are placed under `public` or `private`. Both folders are considered when resolving static resources, with the files added under `private` having a higher priority.

**NOTE** The `private` folder is not tracked through git and can be used to define local data, i.e., for testing, individual settings that you prefer not be published

Three assets define the

* `data.json` -
* `theme.json` -
* `layout.json` -

### Entry points

```bash
src/
  index.tsx
  typings.d.ts
  registerServiceWorker.ts
  standalone.tsx
  webcomponent.tsx
```

The application defines two entry points `standalone.tsx` and `webcomponent.tsx`. Both can be found directly under the `src` folder
- The `stanalone.tsx` is responsible for the `React` build of this application. This entry point will bootstrap a standalone react application using the `index.html` file.
This entry point will be used for the *github pages* build created by the deploy jobs
- The `webcomponent.tsx` entry is responsible for the webcomponent build that will be statically deployed.
* App-wide type declarations for this application can be found in `typings.d.ts` in the `src` root folder.

### Store

```bash
src/
  store/
```

### UI

```bash
src/
  ui/
    components/
      ...
    modules/
      ...
      TechnologyRadar
        components/
          ...
        index.tsx
        styles.jss.ts
        spec.tsx
      ...
    views/
      Main
      TechnologyRadar
      Webcomponent
      ...
```
Defines the rendered components for this application. THe `ui` folder further distinguishes between:

* `ui/components` - holds generic, possibly reusable interface components
  - As far as possible components are defined as React PureComponents
  - Components are solely defined through input / output, i.e., they consume input variables and propagate changes by calling the callbacks defined in their props
  - Components are not direcly connected to the store
* `ui/modules` - holds components implementing the business logic of the application
  - modules might define subcomponents, that split the business case into smaller chunks
  - modules are connected to the store, i.e., they can acccess and alter the global state
* `ui/views` folder defines the main views of the application.
  - views define the application layout and data structure by setting up the core structural layout elements (e.g., `footer`, `header`) and make the core elements of `store` and `config` available

### Utils

```bash
src/
  utils/
    bootstrap
    capitalize
    collection
    debounce
    dom
    ...
```

Defines general utilities that are reused throughout the application.

## Project build

You can build the project using `yarn build`.
This creates a static application build in the `build` folder that can be deployed to any server-setup of your choosing

## Testing

Running `yarn test` runs all application tests once.
Use `yarn test:watch` to launch the tests in interactive watch mode.

### Writing tests

This application uses [Jest](https://facebook.github.io/jest/) as its test runner.
See webpage for additional details on general how to write tests using Jest.

The browser environment is simulated thanks to [jsdom](https://github.com/tmpvar/jsdom), i.e., global variables like document and window are safe to use.

Test suites and cases can be found directly within the `src` folder, within the (component) structure.
Any file ending with `.spec.tsx?` is recognised as a test.

