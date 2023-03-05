import React from 'react';

import {Provider} from 'react-redux';
import HomeScreen from './app/screens/HomeScreen';
import {store} from './app/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
