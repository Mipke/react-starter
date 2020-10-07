This repository contains an opinionated template React starter project

##### Dependencies:
- typescript: For quick iteration and the cornerstone of code confidence in any project of measureable size
- classnames: For easy support of multiple classnames for elements
- node-sass: For scss support for easier style writing, to be used in combination with css modules for easy, non-bleeding component styles
- easy-peasy: For super simple state management that avoids any sort of writing actions and reducers manually

##### Structure:
`app` Hold root App component, routing, and project hooks

`chemistry` Directory to hold the basic components that make up the app

`chemistry/atoms` The home for the simplest components used throughout the project. This includes buttons, text inputs, etc.

`chemistry/compounds` The home for more complex components that are either single use components or reusable combinations of atom components
