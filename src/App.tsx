import React from 'react';
import { ThemeContext } from 'styled-components';
import { navigate } from '@reach/router';

import Router from './components/Router';
import { Navbar } from './components/Navbar/Navbar';
import { theme } from './theme';
import { InitProvider, Provider } from './components/Countries/Context';


const navbarItems = ['home', 'countries'];

const App: React.FC = () => {
  const onClickItem = (name: string | null): void => {
    const path = (name && name !== 'home') ? name : '/';
    navigate(path);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <InitProvider>
        <Provider>
          <Navbar initialRoute='home' items={navbarItems} onClickItem={onClickItem}/>
          <Router />
        </Provider>
      </InitProvider>
    </ThemeContext.Provider>
  );
}

export default App;
