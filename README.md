# Lander

Lander is yet-another-frontend-framework aimed at exploring performance optimizations through the use of localised 
components. It is currently very experimental and only provides the bare minimum to get an app going. It also has 
some technical issues and limitations that make it very hard to recommend, even in development projects.

## Docs

If you are interested to learn more, check out our docs for the individual packages. The rest of this README will 
cover the reasoning and ideas behind this framework.

- [@lander/lander](./packages/lander/docs/README.md)
- [@lander/blueprint](./packages/blueprint/docs/README.md)

## Why Lander?

There are no shortages of frontend frameworks and most projects are likely to end up using one of the big ones such 
as React, Vue, Svelte, etc. Lander was not created to replace those frameworks, I could never hope to have the 
capacity to build the kind of products these teams do. Rather, it was created for research purposes. While I do hope 
Lander can one day become mature enough to be used in production projects, its main objective at the moment is to 
serve as a tool for testing and experimenting with algorithms.

Lander was initially created as a learning project for myself and went through, at least, 4 versions. It was shown 
off at ForwardJS 2019 and iterated over throughout the years. Since then, the repository was used for researching 
performance and testing ways of improving the diffing algorithms for university research. The current version of the 
library is an updated version of these experiments.

### Features experiments

The main goal of the current version of Lander is to try to solve two challenges I had identified with the existing 
algorithms and implementations for the modern, VDOM based, frontend frameworks. The VDOM is an added overhead and 
literature I found on the subject suggested replacing it as a solution to its inherent drawbacks. My experiments 
were rather exploring if we could reduce the load on a single VDOM algorithm as a way to increase performance and 
maintain the great DX offered by these algorithms.

In addition, the versions of React, Vue, and a few others frameworks I explored at the time often suffered from a 
lack of portability. In the case of React 16, for example, the understanding is that there is only one single 
"instance" of React running as your application, you should not split it up. This assumption might be wrong in the 
recent versions, but it becomes very much true in all versions when factoring it some of the global state libraries. 
In all the React codebases I worked on, there was only a single entry point for an entire React application. You 
couldn't render it in multiple places in the application or combine it with static HTML, React is the application.

To solve these challenges, Lander uses web component and a localized version of the (fairly slow) VDOM algorithm we 
purpose built for the needs of this library. These optimizations work in the following ways:

All components built with Lander are rendered in the actual DOM tree. They are not kept as virtual components 
only used to render other elements, but rather as elements in the tree. Whenever a rerender is requested, only the
closest latest component will rerender. Updates do not cause the entire tree to diff, but rather only the closest 
tree to the update. The diffing algorithm walks the tree of the updated component and, whenever it hits another 
component in its children, it requests an update for that component. Diffing is essentially isolated within a 
component. The intent was to avoid diffing, even if optimized, an entire complex tree if only a few leaf elements
change. 

Since components are actual elements in the tree, we are also able to store context and state in that element's 
memory. While this was not an optimization I ended up going for, we could technically not keep a virtual DOM tree an 
only diff the actual DOM, since all parts of the virtual tree exists within the real DOM.

Finally, using web components means that we can make components portable and render a component anywhere in an 
application, even in an application using other frontend frameworks. There is no global memory storing the tree and 
components states, which means that multiple instances of Lander can live alongside one another. One goal of the library
that I could not implement was to allow adding components by name in HTML files and have Lander pick them up for 
render when the application loads. The current version still requires an index file to start any root component you 
want to render, like with `ReactDOM.render`.

## What is the future for this library?

The academic portion of Lander has been completed and is unlikely to continue as my own academic interests don't 
align with this type of research. Ultimately, I would hope to complete the library and release it to the public in a 
state where interested people can use it in production environments. It is not there yet, unfortunately.

At the moment, the library is pretty-much in **archive mode** and was only worked on recently to write this README and 
solve any critical security issues. I do not plan to archive this repository, but I strongly recommend **NOT** using 
it in any kind of production environment. Pull requests are unlikely to be reviewed, though I will answer any 
questions or comments posted as issues. If this library looks interesting to you, please reach out!

## Is lander related to [go-lander](https://github.com/Minivera/go-lander)?

You may have landed here (pun totally intended) through my other library of a similar name, [go-lander](https://github.com/Minivera/go-lander).

Go-Lander initially started as an implementation of an earlier version of Lander in Golang, compiled in WASM to use 
as an alternative frontend framework. The early algorithm for Go-Lander was a carbon copy of the ForwardJS 2019 version 
of lander. This older version did not work and was full of bugs. The plan of Go-Lander was to be the server side 
implementation of Lander, which would compile to JavaScript Lander components augmented with WASM code. 

Go-lander has since been fully rewritten and optimized, and it has lost any link to Lander in the process. The two 
libraries are not intended to become compatible or use one another. If anything, I would be more likely to turn 
lander into a Web Component utility for creating Go-Lander components rather than having the two work together.

If you want a better and actually finished version of Lander, please check out [go-lander](https://github.com/Minivera/go-lander).
Go-Lander is not production ready however, WASM support in Golang is still experimental and unstable. Use at your 
own risk.

## Why "Lander"?

Because it makes landing pages.