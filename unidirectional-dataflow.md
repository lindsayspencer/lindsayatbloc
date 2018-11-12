# React.js & Unidirectional Data Flow

React is easier to debug due to its unidirectional data flow. Since the data only flows one way, that minimizes the amount of places to check for errors. It is also easier to learn, partly because it uses JSX, which borrows known HTML and JS syntax. There is more freedom as a developer because of the absence of templates and as many pre-packaged components; however, you have to do the extra research to find the right resource for whatever you do because it is not provided out of the box. This can also keep your application lighter than an Angular one, though.

Angular has a higher learning curve, but it comes with a lot of extra functionalities already built in if you are able to take the time to learn them. This can make the app slower due to all the components, but it looks like there are ways to help with this, such as not deploying unused components. Angular's two-way data binding can improve the speed of development as front and back-end components can be dealt with separately, by different teams. The accompanying templates can also get the app deployed more quickly.

Explain React's Virtual DOM. What gives React its fast performance?

The Virtual DOM is an internal representation of the UI. This separation from the DOM, which is the actual UI the user sees and interacts with, means less direct involvement with the DOM (which can be slow and messy) and allows for the use of the diff method. The diff method contributes to React's fast performance. It is an algorithm that compares the virtual DOM to the DOM, identifying the components that have been altered, and only re-rendering those parts instead of the whole thing.

Describe React's core concept of unidirectional data flow, with diagrams.

Unidirectional flow means the that the model, or React store, is what determines how everything looks and acts. The user can trigger events using the UI, but those events go straight to the React store components for handling. It generates instructions based on the code, and updates the Virtual DOM (internal representation of the UI) accordingly. The view/UI (what the user sees) is then updated to reconcile with changes made to the virtual DOM. It is unidirectional because all of the instructions come only from the store, and everything else follows suit.
