# Ep - 01, Part - 01

## Using just javascript inside a HTML file

<pre>
<script>
    const heading = document.createElement('h1');
    heading.innerHTML = 'Hello World from JavaScript';

    const root = document.getElementById('root');
    root.appendChild(heading);
</script>
</pre>

## CDN

A CDN (Content Delivery Network) is a system of distributed servers that deliver web content (like images, stylesheets, scripts, videos, and more) to users based on their geographic location.

🔹 Why Use a CDN?
Faster Load Times
CDNs serve content from the server closest to the user, reducing latency.

Reduced Server Load
By offloading static content to the CDN, your own web server has less work to do.

Improved Availability & Reliability
If one server fails, others can still deliver the content.

Better Security
Many CDNs provide DDoS protection and secure delivery options.

🔹 How a CDN Works
When a user requests a website:

Without a CDN: All content comes from the origin server.

With a CDN: Static files (like JavaScript, CSS, images) are served from a nearby CDN node.

# Ep - 01, Part - 02

## React code inside HTML

<pre>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement('h1', { id: "heading" }, 'Hello World from React!');
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);
    </script>

</pre>

# Ep - 01, Part - 03

React elements is just a javascript object
Render converts the javascript object to h1 tag and putting it on the screen that the browser understands (as a HTML).

# Ep - 01, Part - 04

## Nested React elements in the old style of React

Trying the replicate the below react elements

<pre>
<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>;
</pre>

<pre>
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
</pre>

# Ep - 01, Part - 05

The order of script tags is important and should be kept in mind. Should always be in sequence. React should be before App.js in our example

If the root is already have any tags first that is rendered on the screen. When the root.render is called the old tags are replaced (not appended) with the new tags.

We can use React in any small piece of the code. Thats why its a library and not a framework.
Example: We render only at the root what data we want to show

# Ep - 02, Part - 01

Git and GitHub are not the same.

## Git – The Tool

What it is: A version control system.

Who made it: Created by Linus Torvalds (the creator of Linux) in 2005.

What it does: Tracks changes to files over time, lets you collaborate with others, roll back changes, and manage code history.

Where it runs: Locally, on your computer (command line or GUI).

Think of Git as a local tool for saving the history of your code.

## GitHub – The Platform

What it is: A web-based hosting service for Git repositories.

Who owns it: Owned by Microsoft.

What it does: Stores your Git projects in the cloud, allows collaboration, pull requests, issue tracking, and CI/CD integration.

Where it runs: On the internet (https://github.com).

Think of GitHub as a social coding platform where you can share your Git repositories and work with others.

## Create React app from scratch

Here we are going to learn how to build a React app from scratch, and not just by running some create react app commands.

Not just React makes our app fast but, lot of other packages that support react to make our app fast. We need to install these packages through npm.

## NPM

Manages packages (not Node Package Manager). Standard repository from where packages are downloaded.

package.json is a configuration for npm. Declares the dependencies your project needs to work.
package-lock.json will track the excat version of packages used. Ensures consistent installs across machines/environments.
While the package is installed there are 2 symbols. Always better to keep a minor version change.

1. ^ - Updates if there is any minor version change.
2. ~ - Updates if there is major version change.

There are 2 types of dependences that we can install.

1. Dev depencencies - Required in a development phase. Not needed for the app to run in production.
2. Normal depencencies - Required during production also. They are required for the app's core functionality.

The packages we are going to install is.

1. Bundler(webpack, parcel, vite) - To provide neat and clean code, bundled and sent to production. Parcel as a project has its own dependencies, this is known as transtitive dependencies. Hence node_modules has so many packages when we just install parcel.

# Ep - 02, Part - 02

Commands used to ignit the app

1. npx parcel index.html - creates a server and host our code into it.
   npm - Installs packages (Node.js modules) to your project or globally.
   npx - Executes Node packages without permanently installing them.
   Parcel
   a. Dev Build
   b. Local Server
   c. HMR - Hot Module Replacement (Automatic refresh)
   d. Uses a file watching algorithm (written in C++)
   e. Caching - Faster Builds
   f. Image optimization
   g. Minification of files
   h. Bundling
   i. Compressing
   j. Consistent Hashing
   k. Code splitting
   l. Differential Bundling - Support older browsers, different bundling for different types of browsers.
   m. Diagnostics
   n. Error Handling
   o. HTTPs support
   p. Tree shaking algorithm - Remove unused code.

2. Install React as a package rather then a CDN link. We have to make a network call to CDN everytime, which is not considered a good programming style.
   a. npm install react
   b. npm install react-dom
   c. Remove the CDN from the html file and add this code to use react
   import React from "react";
   import ReactDOM from "react-dom";
   d. In the script tag use the key type="module" to fix the import/export issue. Add a key to each react elements to solve the key error.

# Ep - 03, Part - 01

To add the run scripts in the package.json file.
"start": "parcel index.html",
"build": "parcel build index.html"
and in the command prompt run this as npm run start and npm run build

# Ep - 03, Part - 02

React element is React.createElement and not a html tag. It is an object. When we render this to a DOM it becomes a html element.
React.createElement => JS Object => HTML element(render)

# Ep - 03, Part - 03

Creating a nested structures in the old react was very difficult. So they created JSX.
We can build react without JSX, but JSX makes the developer life easier.
Javascript + HTML = JSX (HTML like syntax)
Ex: const script = <h1>Dimple is here</h1>
Javascript does not understand JSX, but onlt ECMA script and the browser also does not understand this.
Behind this secene parcel(internally babel) transpiles this code that the react/browser understands.
JSX => React.createElement (React element) => JS Object => HTML element (render)
Babel converts JSX to React.createElement code - Transpiler

Is JSX we can use className and not class(in HTML). In JSX we have to use camel case for attributes.
If we write the JSX in multiple lines then the JSX should be put inside a () brackets.

# Ep - 03, Part - 04

React components
Everything in React is a component. Its just a normal javascript function. It just returns a JSX code or React element.
Component Composition - Putting a component inside and another component.

<pre>
const Title = () => {
  return <h1>Title Component</h1>;
};

const Heading = () => (
  <div>
    <Title />
    <h1>Heading Component</h1>
  </div>
);

root.render(<Heading />);
</pre>

1. Class based componenet - old way
2. Functional component - new way

# Ep - 03, Part - 05

In a JSX code we can write javascript inside a {} and we can execute it.
If malicious data is passed inside {} in JSX, React escapes it by default to protect against cross-site scripting (XSS) vulnerabilities.

<pre>
const title = (
  <div>
    <h1>Title JSX</h1>
  </div>
);

const Heading = () => (
  <div>
    {title}
    <h1>Heading Component</h1>
  </div>
);
</pre>

# Ep - 04, Part - 01
