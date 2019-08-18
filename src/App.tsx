import React from 'react';
import { ThemeContext } from 'styled-components';
import { navigate } from '@reach/router';

import Router from './components/Router';
import { Navbar } from './components/Navbar/Navbar';
import { theme } from './theme';
import { Provider } from './components/Countries/Context';


const navbarItems = ['home', 'countries'];

const App: React.FC = () => {
  const onClickItem = (name: string | null): void => {
    const path = (name && name !== 'home') ? name : '/';
    navigate(path);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <Provider>
        <Navbar initialRoute='home' items={navbarItems} onClickItem={onClickItem}/>
        <Router />
      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;
