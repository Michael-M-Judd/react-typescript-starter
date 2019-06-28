import React from 'react';
import { palette } from '../src/theme';
import { storiesOf } from '@storybook/react';
import { Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

const fontsToShow = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'body1',
  'body2',
  'subtitle1',
  'button',
  'caption'
];

const ColorWrapper = ({ children }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>
);

const ColorBlock = withTheme()(({ color, children, key, theme }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
        margin: '5px',
        color: theme.palette.getContrastText(color)
      }}
      key={key}
    >
      {children}
    </div>
  );
});

export default class ThemeStory extends React.Component {
  render() {
    const theme = this.props.theme; // material-ui theme object

    return (
      <React.Fragment>
        <Typography variant="h1" gutterBottom>
          Project Theme
        </Typography>
        <section>
          <Typography variant="h2" gutterBottom>
            Fonts
          </Typography>
          <hr />
          {fontsToShow.map(fontVariant => {
            return (
              <section style={{ margin: '1rem 0' }}>
                <Typography variant={fontVariant}>{fontVariant.toUpperCase()}</Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Weight: {theme.typography[fontVariant].fontWeight}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Size: {theme.typography[fontVariant].fontSize}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Font Family:{' '}
                      {theme.typography[fontVariant].fontFamily.split("',")[0].slice(1)}
                    </Typography>
                  </li>
                </ul>
              </section>
            );
          })}
        </section>
        <section>
          <Typography variant="h2" gutterBottom>
            Colors
          </Typography>
          <hr />
          {Object.keys(palette).map(colorName => {
            return (
              <Typography key={colorName}>
                <Typography component="h2" variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
                  {colorName}
                </Typography>

                <ColorWrapper>
                  {Object.keys(palette[colorName]).map(subColor => {
                    const color = palette[colorName][subColor];
                    return (
                      <ColorBlock color={color} key={`${colorName}.${subColor}`}>
                        <Typography color="inherit">
                          {subColor}
                          <br />
                          {color}
                        </Typography>
                      </ColorBlock>
                    );
                  })}
                </ColorWrapper>
              </Typography>
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

const WrappedThemeStory = withTheme()(ThemeStory);

storiesOf('Coinsquare', module).add('Style Guide', () => <WrappedThemeStory />);
