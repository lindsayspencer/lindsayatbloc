# React.js Notes

Built by Facebook. [Why](https://reactjs.org/blog/2013/06/05/why-react.html)

> "React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time."

## Principles

### Declarative

React is declarative. It streamlines the interactive UI and view rendering process. The parent components tell the view (child components) what to do, as they control the state of the program. This makes it easier to debug code and manage state.

[Imperative vs Declarative](https://tylermcginnis.com/imperative-vs-declarative-programming/) Programming Styles

### Component-Based

React is component based. We build encapsulated components that manage their own state. Data is passed through the app, so the state is kept out of the DOM. It is also important that these components be reusable, usually achieved by nesting components, to achieve more complex UIs with more streamlined code.

### Performant & Fast

Via virtual DOM updates, React maintains an  internal representation (the virtual DOM) of the rendered UI (the DOM) that renders only the changed elements. Since it only updates what needs to be updated, it performs quickly.

### Unidirectional Data Flow

The model/store is the single source of truth. User events get passed to the model (store of components), which then tells everything else what to do.

It also preserves immutability - allowing changes to the DOM without making changes to the original data structure. [Using immutable JS](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)


## Virtual DOM

[What is the Virtual DOM?](https://reactjs.org/docs/faq-internals.html)

When a React app component is initialized, it `render`s the view. When the data changes (due to actions) in the Virtual DOM (the UI), `render` method is called again, telling the DOM what it should look like. This process is called reconciliation.

The app components control the virtual DOM, which tells the DOM what to look like. Interaction with the DOM gets heard by the app components, and the process begins again.

### Diff-ing Mechanism

React looks at all of the changes that have been made, and finds the fastest, most efficient way to render them. (= the diff between the description of the new representation vs. the cached DOM representation). React can apply minimal changes to the DOM, keeping load times very low.

## JSX

JS expressions combined with HTML-esque syntax - making it easy to pick up.

[JSX Documentation](https://reactjs.org/docs/jsx-in-depth.html)
