<!-- @format -->

[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Full State

> Full State is a JavaScript library for state management in the simplest way possible.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Installation

To install and set up the library, run:

```sh
$ npm install full-state
```

Or if you prefer using Yarn:

```sh
$ yarn add full-state
```

## Import

```sh
const State = require("full-state");
```

### Init New State

```sh
const state = new State({});
const formData = new State({ firstName:"rami", lastName:"sweyri" });
```

Example 1:

### set & setState

More ways to set new values for your states

```tsx
state.setState({
  email: "rami.sweyri@gmail.com",
  user: {
    name: "Rami",
    age: 30,
    address: {
      street: "50 Main st",
      city: "Boston",
    },
  },
});

formData.set("firstName", "adam");
formData.set("middleName", "asaad");

state.set("user.name", "Adam");
state.set("user.address.street", "51 Arena st");
state.set(
  null, // null mean new vlaue will be in the root of the state
  formData.get() // get() -> get state
);

state.setState({ email: "rami.alsviri@gmail.com", password: "123456" });

console.log(state.get());
// {
//   email: 'rami.alsviri@gmail.com',
//   user: { name: 'Adam', address: { street: '51 Arena st', city: 'Boston' } },
//   firstName: 'adam',
//   lastName: 'sweyri',
//   middleName: 'asaad',
//   password: '123456'
// }

console.log(formData.get()); // { firstName: 'rami', lastName: 'sweyri', middleName: 'asaad' }
```

```sh
setState will not replace the old state, just update email & add password.
replaceState do that, similar to react.
  state.replaceState({
    ...state.get(),
    email: "rami.alsviri@gmail.com",
    password: "123456",
  });
```

Example 2:

### set & delete & clear & destroy

```tsx
state.set("user.name", formData.get("firstName"));
state.set("devices", [
  {
    id: 1,
    type: "laptop",
  },
  {
    id: 2,
    type: "phone",
  },
]);
state.set("devices.0.type", "PC");

state.replaceState({ ...state.get(), isUserActive: true });
// or state.setState({ isUserActive: true });
state.set("isUserActive", false);
state.delete("user.age");

console.log(state.get());
// {
//   email: 'rami.alsviri@gmail.com',
//   user: { name: 'Adam', address: { street: '51 Arena st', city: 'Boston' } },
//   isUserActive: false,
//   firstName: 'adam',
//   lastName: 'sweyri',
//   middleName: 'asaad',
//   password: '123456',
//   name: 'adam',
//   devices: [ { id: 1, type: 'PC' }, { id: 2, type: 'phone' } ]
// }

console.log(state.get("user.adress.city")); // 'Boston' -> get value of key

console.log(formData.get()); // { firstName: 'adam', lastName: 'sweyri', middleName: 'asaad' }

formData.clear(); // clear formData
console.log(formData.get()); // {}

formData.destroy(); // destroy formData
console.log(formData.get()); // null

state.destroy(); // destroy state
console.log(state.get()); // null
```
