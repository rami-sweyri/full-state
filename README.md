<!-- @format -->

# Full State

> the easiest way ever! to manage your state.

## Installation

Install full-state

```bash
npm install full-state
```

or

```bash
yarn add full-state
```

## Usage/Examples

```javascript
const State = require("full-state");

const state = new State({});
const formData = new State({ firstName: "rami", lastName: "sweyri" });

formData.set("middleName", "asgm");
state.setState({
  email: "rami.sweyri@gmail.com",
  devices: [
    {
      id: 1,
      type: "laptop",
    },
  ],
});

state.set("devices.0.type", "PC");
state.set("user", {
  ...formData.get(), // or formData.data
  age: 27,
  address: { street: "51 Arena st", city: "Boston" },
});

state.setState({
  ...state.data, // or state.get()
  email: "rami.alsviri@gmail.com",
  password: "123456",
}); // update state

state.delete("password"); // delete password
state.delete("user.address.city");

state.set("user.address.street", "Area 51"); // update value
state.set("devices.1", {
  id: 2,
  type: "phone",
}); // add new device

console.log(state.get()); // or console.log(state.data);
// {
//   email: 'rami.alsviri@gmail.com',
//   devices: [ { id: 1, type: 'PC' }, { id: 2, type: 'phone' } ],
//   user: {
//     firstName: 'rami',
//     lastName: 'sweyri',
//     middleName, 'asgm'
//     age: 27,
//     address: { street: 'Area 51' }
//   }
// }

console.log(state.get("user.adress")); // {street: "Area 51"}

state.clear(); // clear state
console.log(state.get()); // {}

state.destroy(); // destroy state
console.log(state.get()); // null
```

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to us at rami.sweyri@gmail.com

## Methods

| Name              | Desciption                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| setState(data)    | similar to react useState.                                                                                                          |
| set('key', value) | set key value pair state.set("devices.0.type", "PC") or state.set("devices.0", {type: "PC"}) return { devices: [ { type: "PC" } ] } |
| get('key')        | get full state -> state.get(). or part of the state -> state.get('user.address.city')                                               |
| data              | get full state -> state.data or state.get()                                                                                         |
| delete()          | delete full state -> state.delete(). or part of the state -> state.delete('user.address)                                            |
| clear()           | clear full state -> state.clear() return {}                                                                                         |
| destroy()         | destroy full state -> null state.destroy()return null                                                                               |
| parse()           | state.parse() return JSON.parse(state)                                                                                              |
| stringify()       | state.stringify() return JSON.stringify(state)                                                                                      |
| put()             | put new value to the root of the state without key, similar to set -> state.put({ name:"jhon" })                                    |

## Documentation

[Documentation](https://github.com/rami-sweyri/full-state)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rami-sweyri/)

## Support

For support, email rami.sweyri@gmail.com
