This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Multi Deli Mobile App
Multi Deli - Dev Challenge


## About The App
Multi Deli is your go-to mobile app for managing food orders effortlessly. With a clean and intuitive interface, it allows users to view their list of orders seamlessly. Easily add new orders with just a few taps and watch as your main screen updates in real-time. Simplified features ensure a smooth user experience, making order management a breeze. Whether you're a busy professional or a casual shopper, Multi Deli has got you covered!

## Preview
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/3961e4fc-8948-4617-8da6-e9a4f6a27f74">
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/120e8548-53f8-4a03-924b-20b928f90fdd">

<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/57743fe0-4515-4a40-a6ea-7120299fb180">
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/ffbd61a1-cdbe-4996-a10b-870aa8aae204">
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/0abaeded-9675-4506-b16e-f9b9ba778fde">

<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/b718fad2-4ef0-493a-962a-715ebbfe6ce7">

<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/5efa804a-f775-459b-ab38-3b21afbe4e49">

<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/baec4d55-3dd9-49d1-b2a0-37504f38c883">
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/1a4c0296-7939-4f4e-805b-265eb78b3441">
<img width="250" height="550"  alt="Demo1" src="https://github.com/mitchiemt11/multideli-mobile/assets/74592107/f5a4dfdf-d64b-4cf6-aa7b-81f4dfb73afc">



## Technologies
- React Native
- Redux
- Typescript
- React Navigation (Third party library)
- Bottom sheet (Third party library)

## Setup
- Download or clone the repository
  `git clone https://github.com/mitchiemt11/multideli-mobile.git`

- To install all dependencies, run ` yarn install`

 
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.



## Approach
- I used Redux for centralized state management, ensuring that all order data is stored in a single global state accessible from any component.
- TypeScript was integrated to enhance the development experience with static typing, catching potential errors and providing better code documentation.
- React Navigation was employed for easy navigation between screens, offering a straightforward API and support for various navigation patterns with the `route` and `navigation` props playing a bigger part in moving betweenn screens at the same time passing the correct data to the components.
- The `useSelector` hook provided by Redux was utilized to selectively extract data from the global state, improving performance by avoiding unnecessary re-renders.
- Additionally, I integrated a bottom sheet local library to enhance user experience, providing a smooth and intuitive way to interact with certain features without obstructing the main content.


## 📄 License

This app is [MIT licensed](./LICENSE).

-------
