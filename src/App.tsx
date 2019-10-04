import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { PageLoader } from './components/PageLoader';
import ThemeProvider from './components/ThemeProvider';

const Home = React.lazy(() => import('./pages/Home'));

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.palette.background.default};
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <>
        <Suspense fallback={<PageLoader />}>
          <GlobalStyles />
          <BrowserRouter>
            <Route path="/" exact component={Home} />
          </BrowserRouter>
        </Suspense>
      </>
    </ThemeProvider>
  );
};

export default App;
