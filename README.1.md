Props and state
Functional Components vs Class Components
JSX declarative syntax
- if statements in jsx
  - Nima cheated by doing them outside of the JSX
- loops in jsx
- jsx tips and gotchas
- how jsx works behind the scenes (briefly)
ES6 classes and how to read ES5 (old) React syntax


W6D1 - React Breakout
=====================

REPO: https://github.com/NimaBoscarino/react-breakout-notes

For today's breakout, we reviewed some of the concepts that we learned in this morning's lecture. Then we did a rapid prototype of a Kanye West Soundboard website.

The things to keep in mind were:

- React is a framework for building the front-end of web applications
- The main abstraction in React is the use of *components*.
- **Components** take *props* and have *state*. Props can be anything! Values like strings, numbers, objects, or even functions. We can use state to hold data that we want to display (e.g. the `kanyes` in our example), information about user data (e.g. `loggedIn`), or information about the "state" of the component (e.g. `isLoaded`).
- Data flows *down*!

We started off by drawing a wireframe of the application that we wanted to build, and isolated each required component. These were things like the Logo, the KanyeContainer, the NewKanyeForm, etc. Once we had identified those components from the wireframe, we drew a tree to understand the structure of how we would nest our components, and how the flow of props would be handled.

Once the whiteboarding was done, it was a matter of writing the code! Check inside the `src` folder to see the code we wrote. Remember that to have one component affect a parent or sibling component, we need to use callbacks! Look at how adding new "Kanyes" works inside the `NewKanyeForm` for that, and follow the props upp to `App.jsx`.

Enjoy! - Nima