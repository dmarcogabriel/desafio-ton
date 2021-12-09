# desafio Ton

An ecommerce-like app with a list of star wars ships to sale, you can add then in the cart and 
buy some of then.

## Installing

To install code dependencies run the commands bellow:

> This app was made using [Yarn - Package Manager](https://yarnpkg.com/)

```shell
$ yarn install
```

This commands will look after `/.package.json` dependencies and will install then.

## Developing

To run the app you will need to open two terminals, in one you
should run:

```shell
$ yarn start 
```

and in another terminal run:

```shell
$ yarn android
```

The first command runs the metro bundler, it creates a server 
with the bundle to React Native application.

And the other runs the application on the emulator or on device.

### Building

Here is the command build the app:

```shell
$ yarn build:android
```

After it build the application, the apk will be placed inside 
`./android/app/build/outputs/apk/<debug or release>`.

## Testing

To execute unit tests, run the command:

```shell
$ yarn test
```

And for coverage run:

```shell
$ yarn test:c
```

`yarn test` will watch for changes on the code and execute  `jest` unit tests, it will look for files named with `**.spec.tsx`

`yarn test:c` will test all application and create a `/coverage` directory with all of the unit tests status.

## Libraries

Here are the list of libraries used to build this application:
* @react-navigation: Used for routing the app and for auth flow.
* axios: Used to execute `ajax` API calls.
* react-native-vector-icons: Used to show icons.
* styled-components: Used to create components using "css like".


