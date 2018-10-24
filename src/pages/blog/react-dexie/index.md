---
title: Making a todo app with React and Dexie
date: '2018-10-06'
section: blog
shortdesc: react
---

Hi!

```javascript
class Me extends React.Component {
  state = {
    location: 'Northern Canada',
    altitude: '11000m',
    speed: '950km/h',
    destination: 'Los Angeles',
  }
  ...
}
```

Could there be a better place in space and time to write a post about how to use IndexedDB with React? I think not.

At work we have been using IndexedDB as a main data source for an application running on AngularJS and I have been playing with the thought of porting parts of it to React so I think it's time to find out how the combination works together small scale.

## Project

User of the app can do the following:

- Can add a todo
- Can delete a todo
- Can toggle the completed status of todo
- Todos will be on sync and persisted with the IndexedDB.

## Setup

So for this app we will be using the following

- node
- npm / yarn
- create-react-app
- Dexie.js

### Bootstrapping the project

```terminal
create-react-app react-dexie-todo
cd react-dexie-todo
yarn add dexie
yarn start
```

### Defining the database schema

First off we will start with creating a new file `/src/db.js` for the database schema.

We are using Dexie as the wrapper for the IndexedDB API so we are constructing the database by initializing a new Dexie object. It takes the database name as the argument.

With IndexedDB you'll have every version of the database living inside the database object. We will define the version number and the stores on a single line.

The store schema will be defined as object with keys as the store names and the store fields will be the value as a comma-separated string.

The fields we define in the schema will be indexed. So here we only index our id field. We can still add rest the data for the row, it just wont be indexed.

```javascript
import Dexie from 'dexie'
const db = new Dexie('TodoDB')
db.version(1).stores({ todos: '++id' })
// db.version(2).stores({ todos: '++id, text'}) -- if we wanted to index
export default db
```

### Prepare our React-component

Before we deal with the database lets prepare the App-component of create-react-app for our needs.

A todo app will render a list of todos, which will initially be empty, so let's add that to our applications state.

Also, get rid of unnecessary stuff in the component.

```javascript
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React + Dexie Todo Example</h2>
        </div>
      </div>
    )
  }
}
```

### Using the database in React

Cool! Now that we have a ready-to-use database in our hands and some state for our todos let's bring the database in to play.

`import db from './db`

We can now start making calls to the `db` object.

Working with IndexedDB is gonna be asynchronous so using the Async/Await-syntax will make it more readable.

To make sure our application state is in sync at first render, we will list all todos from the store when the application mounts.

```javascript
async componentDidMount() {
    try {
        const todos = await db.table("todos").toArray();
        this.setState({ todos })
    } catch(err) {
        console.log(err)
    }
```

Notice the async marker added for componentDidMount() - it will do no harm since the componentDidMount lifecycle method returns void.

### Mock some data and render it

Let's create some mock data in `db.js` so we can render some ui

```javascript
db.table('todos').add({ title: 'Write a blogpost', completed: false })
db.table('todos').add({ title: 'Learn to fly', completed: false })
```

To create the DOM for the todos, we will create a stateless list component which maps over the todos.

```javascript
const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </li>
    ))}
  </ul>
)

// App.render()
return (
  <div className="App">
    <div className="App-header">
      <h2>React + Dexie Todo Example</h2>
    </div>
    <TodoList todos={todos} />
  </div>
)
```

Great, we can now see our data in the page!
But the spec said we have to be able to toggle the completed status and delete the item aswell, so guess we'll implement it next.

## Implementing toggle and delete

Since it's good habit to keep your UI components simple and sober from the allmighty business logic, let's implement the logic in the main `<App/>` component.

### Delete

Easier one to implement:

- Create a handler method which takes the todo id as an argument.
- Delete the todo from the database
- Filter the deleted todo out of state
- Update state with the new filtered array

```javascript
// App-component
async handleDelete = id => {
    try {
        const { todos } = this.state;
        await db.table('todos').delete(id);
        const newList = todos.filter(todo => todo.id !== id)
        this.setState({ todos: newList})
    } catch(err) {
        console.log(err);
    }
}
```

### Toggle

A bit more complexity here:

- Update the new completed value to database
- Replace the todo in the state with new completed value.
- Update the state with the new array

```javascript
async handleToggleTodo(id) {
    try {
        const { todos } = this.state;
        const todo = todos.find(todo => todo.id === id)
        // find the existing item so we don't have to make a db call for it.
        await db.table('todo').update(id, { completed: !todo.completed })
        // just update what is required, completed in this case
        const newList = [...todos.filter(todo => todo.id !== id), {...todo, completed: !todo.completed }]
        // filter the modified todo out and replace it with a new one.
        this.setState({ todos: newList });

    } catch (err) {
        console.log(err)
    }
}
```

Now that we have our methods for the actions, let's make them accessible for the list component by passing them as a a prop:

```javascript
<TodoList
  todos={todos}
  handleDelete={this.handleDelete}
  handleToggle={this.handleToggle}
/>
```
