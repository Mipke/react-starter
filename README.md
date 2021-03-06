This repository contains an opinionated template React starter project

##### Dependencies:
- typescript: For quick iteration and the cornerstone of code confidence in any project of measureable size
- classnames: For easy support of multiple classnames for elements
- node-sass: For scss support for easier style writing, to be used in combination with css modules for easy, non-bleeding component styles
- easy-peasy: For super simple state management that avoids any sort of writing actions and reducers manually

##### Structure:
`app` Holds root App component & routing

`app/hooks` Holds project hooks

`chemistry` Directory to hold the basic components that make up the app

`chemistry/atoms` The home for the simplest components used throughout the project. This includes buttons, text inputs, etc.

`chemistry/compounds` The home for more complex components that are either single use components or reusable combinations of atom components

`chemistry/screens` The home for more screen components

`chemistry/styles` The home for project style files

`services` Service/business logic and data models live here

`state` Base directory to hold easy-peasy global state

`state/chapters` Chapters each hold a separate portion of the overall global state (Usually by separated by category to make the global state easier to work with and understand)
