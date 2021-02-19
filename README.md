<img alt="React Native Permission Item" src="assets/logo.png" width="1050"/>

[![React Native Permission Item](https://img.shields.io/badge/-Customizable%2C%20easy%20to%20use%20permission%20item%20component%20for%20React%20Native.-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-permission-item)

[![npm version](https://img.shields.io/npm/v/react-native-permission-item.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-permission-item)
[![npm](https://img.shields.io/npm/dt/react-native-permission-item.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-permission-item)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
  <tr>
    <td align="center">
      <img alt="React Native Permission Service"
        src="assets/Screenshots/react-native-permission-service.png" />
    </td>
    <td align="center">
      <img alt="React Native Permission Service"
        src="assets/Screenshots/react-native-permission-service.gif" />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i react-native-permission-item
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": ">= 0.2.4"
```

# Usage

## Import

```jsx
import PermissionItem from "react-native-permission-item";
```

## Fundamental Usage

```jsx
<PermissionItem
  title="Location Permission"
  isGranted={isLocPermGranted}
  source={require("./assets/permissions/map.png")}
  description="We need this permission for the geolocation based app to function functionally"
  onPress={this.handleRequestLocPermission}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property    |   Type   |  Default  | Description                                                        |
| ----------- | :------: | :-------: | ------------------------------------------------------------------ |
| title       |  string  | undefined | change the title                                                   |
| description |  string  | undefined | change the descrition                                              |
| source      |  Image   | undefined | set your own image                                                 |
| isGranted   | boolean  |   false   | set and change the granted or not button text                      |
| onPress     | function | undefined | set your own logic for the button functionality when it is pressed |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Permission Item is available under the MIT license. See the LICENSE file for more info.
