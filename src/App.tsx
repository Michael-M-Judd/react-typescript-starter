import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import { Button, Typography } from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider>
      <Typography variant="h1">React Typescript Starter</Typography>
      <Typography variant="body1">Start coding</Typography>
      <Button variant="contained" color="primary" onClick={() => console.log('button click')}>
        Example button
      </Button>
    </ThemeProvider>
  );
};

export default App;
