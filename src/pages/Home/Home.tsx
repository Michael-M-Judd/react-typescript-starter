import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1">{t('home.title')}</Typography>
      <Typography variant="body1">{t('home.sub-title')}</Typography>
      <Button variant="contained" color="primary" onClick={() => console.log('button click')}>
        {t('home.button')}
      </Button>
    </>
  );
};

export { Home };
