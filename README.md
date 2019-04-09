W6D1 - React Breakout
=====================

REPO: https://github.com/NimaBoscarino/react-breakout-notes

To run the example:

```
npm i
npm start
```

Then go to `http://localhost:3000`. You can see the code in `src/App.jsx`.

For today's breakout, we reviewed some of the concepts that we learned in this morning's lecture. We built on what we learned this morning, looking at how components store and get their data, namely `state` and `props`. 

We built ourselves a button clicker app, that counted how many times we had clicked on a button. Then we did a bit of messing around with creating Kanye components.

In the process, we learned about a few different concepts:

* `state` vs `props`
* JSX syntax in props
* Using `.bind(this)` for event handlers, and why that was
* Functional components vs Class components (read this [article](https://overreacted.io/how-are-function-components-different-from-classes/))
* Iterating over a list and rendering components for each element
* The `key` attribute
* Some [other attributes](https://reactjs.org/docs/dom-elements.html) that React treats differently

The things to keep in mind were:

- React is a framework for building the front-end of web applications
- The main abstraction in React is the use of *components*.
- **Components** take *props* and have *state*. Props can be anything! Values like strings, numbers, objects, or even functions. We can use state to hold data that we want to display (e.g. the `kanyes` in our example), information about user data (e.g. `loggedIn`), or information about the "state" of the component (e.g. `isLoaded`).

