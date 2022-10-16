# Full State

> the easiest way ever! to manage your state in JavaScript or any other library like React, Vue & Angular.

The closest thing is useState() in react, but with more advanced features like set, get, put and many useful methods.

## Installation

```sh
npm install full-state --save
```

or

```sh
yarn add full-state
```

## Usage example

ini new `state` and use `set`, `setState`, `get`

```jsx
const State = require("full-state");
//or
// import State from "full-state";

const state = new State({});
const formData = new State({ firstName: "Rami", lastName: "Sweyri" });

formData.set("middleName", "Adam"); // set(key, value)

state.setState({
  email: "rami.sweyri@gmail.com",
  fullName: formData.get("firstName") + " " + formData.get("lastName"),
  devices: [
    {
      id: 1,
      type: "laptop",
    },
  ],
}); // setState(newValue)

state.set("devices.0.type", "PC"); // update
state.set("user", {
  ...formData.data, // or ...formData.state or ...formData.get()
  age: 27,
  address: { street: "51 Arena st", city: "Boston" },
}); // set value

state.setState({
  ...state.get(), // or ,,,formData.data or ...formData.state
  email: "rami.alsviri@gmail.com",
  password: "123456",
}); // update state
```

use `delete`, `clear` , `destroy`

```jsx
state.delete("password"); // delete password
state.delete("user.address.city");

state.set("user.address.street", "Area 51"); // update value
state.set("devices.1", {
  id: 2,
  type: "phone",
}); // add new device to devices array

console.log(state.get());
// {
//   email: "rami.alsviri@gmail.com",
//   fullName: "Rami Sweyri',
//   devices: [ { id: 1, type: "PC" }, { id: 2, type: "phone" } ],
//   user: {
//     firstName: "Rami",
//     lastName: "Sweyri",
//     middleName: "Adam",
//     age: 27,
//     address: { street: "Area 51" }
//   }
// }

state.get("user.address"); // get return {street: "Area 51"}
state.clear(); // clear state return {}
state.destroy(); // destroy state return null
```

## Documentation

[https://github.com/rami-sweyri/full-state](https://github.com/rami-sweyri/full-state)

## Props

Below is the complete list of possible props and their options:

> **setState**: _(data:any)_ ▶︎ similar to useState in react.

`setState({name:"Rami",lastName:"Sweyri"})`

> **set**: _(key:string, value:any)_ ▶ The easiest way to add or modify a value. Supports nested levels.

```jsx
︎set("email","rami.sweyri@gmail.com")
set("address.city", "Aleppo")
set("interests", ["Sports", "artificial", "intelligence", "games"])
set("interests.4", "coffee")
```

> **get**: _(any)_ ▶︎ get full state.

`get()` or `data` or `state`

```jsx
{
  name: "Rami",
  lastName: "Sweyri",
  address: { city: "Aleepo" },
  interests: ["Sports", "artificial", "intelligence", "games", "coffee"],
}
```

> **get**: _(string)_ ▶︎ get certain value. Supports nested levels.

`get("address")`

```jsx
{
  city: "Aleepo";
}
```

`get("interests.4")`

```jsx
"coffee";
```

> **delete**: _(string)_ ▶︎ delete certain value. Supports nested levels.

`delete("interests.1")`
`get("interests")`

```jsx
["Sports", "intelligence", "games", "coffee"];
```

> **clear**: _()_ ▶︎ clear the full state return embty object.

> **destroy**: _()_ ▶︎ clear the full state return null.

> **isEmpty** ▶︎ check if full state equal [], {}, false, null, "", undefined.

> **length** ▶︎ check length of full state, It doesn't matter if it object, array, string.

> **keys** ▶︎ check keys of full state, It doesn't matter if it object, array, string.

> **values** ▶︎ clear values of full state, It doesn't matter if it object, array, string.

> **entries** ▶︎ clear entries of full state, It doesn't matter if it object, array, string.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rami-sweyri/)

## Release History

- 1.2.0
  - CHANGE: set and put method
  - FIX: set array type
- 1.1.1
  - FIX: set number issue
  - ADD: Add `init()`
- 1.0.8
  - IMPROVE: improve set method
- 1.0.72
  - IMPROVE: setState
  - CHANGE: Rename `replaceState()` to `setState()`
- 1.0.6
  - ADD: stringify & parse method
