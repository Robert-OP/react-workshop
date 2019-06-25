import React from 'react';
import DHILogo from '../assets/DHI_Logo.png';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const Navigation = ({ useStyles, handleTabChange }) => {
  const classes = useStyles();

  const buttons = [0, 1, 2].map(item => (
    <Button
      className={classes.buttons}
      variant="contained"
      onClick={handleTabChange(item)}
    >
      Tab{1 + item}
    </Button>
  ));

  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true}>
        <img className={classes.logo} src={DHILogo} alt="DHI Logo" />
        <Typography variant="h6">React Workshop</Typography>
        <div className={classes.grow} />
        {buttons}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
