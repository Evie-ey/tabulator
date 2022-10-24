# Tabulator
Tabulator is a react tab component, that allows users to create tabs, 
set the default tab either by index or based on tab title.
The component has been developed using the react library and typescript.


## Getting started
The follwing instructions, will help you get a copy of the project up and running
on your local machine.
Assumptions: Linux machine

### Pre-requisites
* [Node](https://nodejs.org/en/download/) 
* [Git](https://git-scm.com/)

### Installation
Clone the repo

```
$ git clone https://github.com/Evie-ey/tabulator
$ cd tabulator
```

```shell
$ cd tabulator
```
##Run the application
### `npm install`
This installs all the necessary dependeces required to run the application on the local machine

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
The project has unit tests which test for the following
1. The tab component renders without crashing
2. The tab headers display correctly
3. Passing a prop with a specific index shows the tab with content at that index.
4. navigating from one tab pane to another works as expected

## Components

The main components
```
1. # Tab component
2. # TabPane component
## Usage
#Tab component
The tab component accepts children that are of TabPane component. 
The following props are accepted by Tab component
1. InitialActive:number
2. active: string and onActiveChange: function.
One can only pass the first or second prop but not both at the same time.

Passing initialActive prop
The TabPane at that particular index(initialActive) is made active when the application first renders.

Passing active: string and onActiveChange: function props
The TabPane with {active} title is made active when the application first renders.

2. TabPane
  This component accepts children, which are content to be displayed for each tab.
  It also accepts a prop of title.
  
  <Tab initialActive={1}>
      {/* <Tab active="Dublin" onActiveChange={()=> setActive(active)}> */}
        <TabPane title="India" >
        <div className="tab-content">
             <p>Tab 1 India</p>
           </div>
        </TabPane>
        <TabPane title='Kampala' >
          <div className="tab-content" >
             <p>Tab is Kampla</p>
           </div>
        </TabPane>
      </Tab>

```

## Other Available Scripts
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`
This works just like `npm build` .
This  will cause the predeploy and deploy scripts defined in package.json to run.

A distributable version of the react app is created and stroed in a folder called build. 
The contents of the folder are automatically pushed to the new commit on the gh-pages branch(This branch is created automatically), if it does not exist.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## Learn More


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# tabulator
