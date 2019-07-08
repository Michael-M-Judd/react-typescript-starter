import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from './components/ThemeProvider';
import Home from './pages/Home';
import DateForm from './pages/DateForm';

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.background.default};
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/data-collection/form-1" component={DateForm} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
