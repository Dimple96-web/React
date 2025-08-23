# Ep - 01, Part - 01

## Using just javascript inside a HTML file

Below functions are already present in the browser. (Ex: createElement, getElementById)

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

1. The <script crossorigin> attribute is used in HTML to specify how the browser should handle cross-origin requests for the script. It is typically used when loading scripts from external sources (e.g., CDNs) and is relevant for security and resource sharing.
2. If omitted, the browser's default behavior is to fetch the script without credentials.
3. The crossorigin attribute is present, but it does not explicitly specify a value. When the crossorigin attribute is included without a value, it defaults to "anonymous".

ReactDOM is used for DOM operations.

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

<pre>
<link rel="stylesheet" href="./index.css" />
</pre>

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

We can use React in any small piece of the code. Thats why its a library and not a framework (which comes with all loads of stuffs).
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

Not just React makes our app fast but, lot of other packages that support react to make our app fast (production ready app). We need to install these packages through npm.

## NPM

To create a project with npm in it use the command "npm init".

Manages packages (not Node Package Manager). Standard repository from where packages are downloaded.

package.json is a configuration for npm. Declares the dependencies your project needs to work.
package-lock.json will track the exacat version of packages used. Ensures consistent installs across machines/environments.
While the package is installed there are 2 symbols. Always better to keep a minor version change.

1. ^ - Updates if there is any minor version change.
2. ~ - Updates if there is major version change.

There are 2 types of dependences that we can install.

1. Dev depencencies - Required in a development phase. Not needed for the app to run in production.
2. Normal depencencies - Required during production also. They are required for the app's core functionality.

The packages we are going to install is.

1. Bundler(webpack, parcel, vite) - To provide neat and clean code, bundled and sent to production. Parcel as a project has its own dependencies, this is known as transtitive dependencies (kind of dependency tree). Hence node_modules has so many packages when we just install parcel.

# Ep - 02, Part - 02

Commands used to ignit the app

1. npx parcel index.html - creates a server and host our code into it. npm parcel build index.html - this is used for production build.
   npm - Installs packages (Node.js modules) to your project or globally.
   npx - Executes Node packages without permanently installing them.
   Parcel
   a. Dev Build
   b. Local Server
   c. HMR - Hot Module Replacement (Automatic refresh on saving the file).
   d. Uses a file watching algorithm (written in C++)
   e. Caching - Faster Builds
   f. Image optimization
   g. Minification of files
   h. Bundling
   i. Compressing
   j. Consistent Hashing (Parcel uses content-based hashing (often called "content hash" or "content fingerprinting") for things like:Output filenames (e.g. app.ab12cd34.js), Cache storage (for faster rebuilds, Dependency graph tracking))
   k. Code splitting (Split files)
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
   d. In the script tag use the key type="module" to fix the import/export issue (it treates App.js as a browser scripts, hence we need to tell it as module). Add a key to each react elements to solve the key error.

3. Can make our app compitable for any versions of the browser. in the package.json we can give the below error.
   "browserslist": [
   "last 2 versions"
   ]

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
Javascript does not understand JSX, but only ECMAScript and the browser also does not understand this.
Behind this scene parcel(internally babel) transpiles this code that the react/browser understands.
Babel does this internally - JSX => React.createElement (React element) => JS Object => HTML element (render)
Babel converts JSX to React.createElement code - Transpiler

In JSX we can use className and not class(in HTML). In JSX we have to use camel case for attributes.
If we write the JSX in multiple lines then the JSX should be put inside a () brackets.

# Ep - 03, Part - 04

React components
Everything in React is a component. Its just a normal javascript function. It just returns a JSX code or React element.
Component Composition - Putting a component inside another component.

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

1. Class based componenet - old way of writing code
2. Functional component - new way of writing code

# Ep - 03, Part - 05

In a JSX code we can write javascript inside a {} and we can execute it.
If malicious data is passed inside {} in JSX, JSX escapes it by default (kind of santizises the data) to protect against cross-site scripting (XSS) vulnerabilities (Injection error).

<pre>
<Title /> can also be written as <Title></Title>
It can also be called as {Title()}
All the above 3 are one and the same.
</pre>

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

Building a food ordering app
Should always plan the app
What we are going to build and how it should be done.
Wireframe

1. Name the app.
   a. Header
   b. Add a logo
   c. Build links (Home, About, Cart)
2. Body
   a. Search bar
   b. List of Restaurant(Image of food, Name of the restaurant, Star ratings)
3. Footer
   a. Copyright
   b. Links

Components of the app

1. Header
   a. Logo component
   b. Nav Items component
2. Body
   a. Search component
   b. Restaurant container component (Restaurant card)
3. Footer
   a. Copyright
   b. Links
   c. Address
   d. Contact

<pre>
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQynKAtD1jF4MElJGeQiXp9IxgDkrY8Z7tKA&s"
      />
      <h3>Restaurant Name</h3>
      <h4>Briyani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

</pre>

# Ep - 04, Part - 02

Props that we can pass to a components.
They are noraml arguments to a function.
Props is just a javascript object and they should be used inside {} brackets.

Config Driven UI - Decide how the config (UI) looks like based on the data coming from the backend (API).

Best practices for writing the code

1. Destructure the data which comes in the form of props. Optional chaining.
2. Write loop and use the RestaurantCard once.
3. Each property in the array should have unique key property. Should always give a key.
   a. This key is for the DOM to understand when we have put in a new card comes into picture.
   b. If we give key then the DOM understands where to add the card and just renders only that card.
   c. Good for the performance imporving.
   d. Dont use map index as a key (it is an anti-pattern). When we dont have a unique id then we can use index as an idea, but its not recommended.

<pre>
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const responseList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "426730",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/6efb660b-047e-489e-8e35-478f79f2ac9f_426730.JPG",
      locality: "Lavelle Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.7,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-12 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          { imageId: "newg.png", description: "Gourmet" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "441",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/c68665d3-1a31-4b58-baf5-81ba0a0945fb_10575.JPG",
      locality: "Richmond Town",
      areaName: "Central Bangalore",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-13 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "2.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-central-bangalore-rest10575",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "405798",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-12 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "69",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "12808",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/940f33d0-b52c-4fca-a684-80edad8a2e8b_12808.jpg",
      locality: "Shanti Nagar",
      areaName: "Shanti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.6,
      parentId: "22",
      avgRatingString: "4.6",
      totalRatingsString: "32K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-12 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "13K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "38K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-13 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "--" },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-12 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "--" },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "588619",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
      locality: "Brigade Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-13 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "436",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "75093",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/e25518f7-e2b4-46a4-b4a2-a5e0bd378730_75093.JPG",
      locality: "Bashyam Circle",
      areaName: "Rajajinagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-12 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/test2.png",
            shortDescription: "Perfect ice cream delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/test2.png",
                  shortDescription: "Perfect ice cream delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹124",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "--" },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b2f7ea91-877c-4c2a-90ea-8d4c19829431",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nic-ice-creams-bashyam-circle-rajajinagar-rest75093",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ responseData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    responseData.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {responseList.map((rest) => (
          <RestaurantCard key={rest.info.id} responseData={rest} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

</pre>

# Ep - 05, Part - 01

Whatever we wrote in React can also be done using HTML and CSS.
Keep each component as a seperate file (Good practice).
We can give .js or .jsx extension for a component file. Anything will work fine.
Dont keep hard coded data in componenets.
Example: JSON, URLs, Strings
Keep it in seperate files like config.js, constants.js
There are 2 types of export

1. Default export - In one file this can be written only once.
   export default Component
   import Component from "./Components/ComponentName";
2. Named export - Can be used when multiple exports should be done.
   export { CDN_URL };
   import { CDN_URL } from "../utils/contants";

Yes, you can use both default export and named exports in the same file — but with a few important points to understand.
Restructure the code as u like and keep the code in the files very simple.

# Ep - 05, Part - 02

Lets make our website dynamic. Till now its static.
Event Handlers
React is fast in DOM manipulation.
Without state if we directly manipulate the array variable then it wont work as expected. This should be done using the state variable.
React is fast because of DOM manipulation.

1. For creating state variable we use hooks.
2. React hook is a normal JS utility function is given to us by react, that function has some logic inside it.
3. Written inside the React package.
4. useState() - super powerful state variable in react and useEffect() are the 2 most important hook used too much.
5. Should import these hooks as named imports.
6. This manitains the state of Component.
7. Whenever the state variable changes React will re-render the component. React is fast because of DOM manipulation. Keeps data layer in-sync with the UI layer.

## Reconcilation Algorithm - React Fiber - React 16

Find the diff and update the DOM.
When the UI is rendered actual DOM is created and along with that virtual DOM (Representation of the actual DOM) is created.
Diff algorithm - Finds the difference between 2 virtual DOMs (basically objects). Calculate the difference and then updates the actual DOM.
React does efficient DOM manipulation, its why React is fast.

# Ep - 06, Part - 01

Monolithic Architecture
Everything coupled inside a single service, like one big entity.
One small change we have to build and deploy the entire project.

Microservice Architecture
Different services for different tasks. Seperation of concerns.
We can have different tech stack for different services.
They all communicate via APIs (Application Program Interface).

# Ep - 06, Part - 02

2 approches to fetch data from the backend.

1. As soon our app loads we can make a API call and get the data, render it on the screen.
2. As soon as the app loads we render the UI, make an API call and then re-render the page with the fetched data.

2nd approch is better, as this gives us a better UX. We render so that page is not blank till we get the required data. It does not matter if we are render 2 times as React render cycle is faster.

# Ep - 06, Part - 03

useEffect hook - This will be called after the component renders. If we want to do something after the component renders then we need to write it inside the useEffect.
This helps the 2nd point in the above topic.
fetch is provided by the browsers.
CORS Error - Our browser block us to call API from one origin to another origin.

<pre>
useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const swiggyData = await data.json();
  setTopRated(
    swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
};
</pre>

This is known as optional chaining.
JavaScript’s optional chaining allows you to access deeply nested properties without throwing errors if any part is null or undefined.
swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
?.restaurants

# Ep - 06, Part - 04

Till the page loads the the UI page is blank, how to imporve this.
We can show the spinning loader.
Show a fake page until the UI returns with the actual data. This is known as Shimmer UI.

# Ep - 06, Part - 05

Based on a condition we render a component and its known as conditional rendering.
We can use the ternary operator instead of if/else conditions.

Why do we need state variables? Can't we use normal variables only.
The value get updated if we dont use a useState, but the updated value won't be rendered on the screen (React won't know if the variable is updated). If we use useState then the value gets updated (state variables).
When the state variable changes the useState (in React) will re-render the component.
It re-renders the whole component(const variables won't give error as the function is called again newly) and not just the button.
Old code and new code is compared and then the diff is found out, that is only the button has changed. This is know as the diff algorithm.

# Ep - 06, Part - 06

As the state variable searchText is bound to the input tag and the input tag is trying to change the searchText variable so we get the error (searchText should be in sync).So we need to change the values using a event handler.
Whenever state variables update, React triggers a reconcilition cycle (re-renders the component).
When we type something inside a input box for each word typed the the component is rendered newly (Comparision between original and virtual DOM). Thats why React is faster (reconcilition cycle).

# Ep - 06, Part - 07

If the search process is present then make 2 copies of the data so that when we search again the process happens on the actual data and not the copied data.
