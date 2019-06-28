import React from 'react';
import ThemeProvider from '../src/components/ThemeProvider';

const FrameComponent = ({ children }) => (
  <ThemeProvider>
    <React.Fragment>
      <style>{`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600');
    @font-face {
        src: url("../src/assets/SuisseIntl-Bold.otf");
        font-family: "SuisseIntl";
        font-style: normal;
        font-weight: 500;
  }`}</style>
      {children}
    </React.Fragment>
  </ThemeProvider>
);

export default FrameComponent;
