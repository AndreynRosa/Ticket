import React from 'react';

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core';

import { useStyles } from './styles';

export default function Dashboard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="span"
            noWrap
            colorInherit="#eee"
            className={classes.title}
          >
            Aplicação Teste do Andrey Rosa
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </div>
    </div>
  );
}
