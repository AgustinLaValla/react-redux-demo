import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import { HookCakeContainer } from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer'
import { HookIceCreamContainer } from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
