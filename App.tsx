import React from 'react';
import Navigation from './src/router/Navigation';
import { store } from './src/app/store';
import { Provider } from 'react-redux'

function App(): React.JSX.Element {

  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}


export default App;
