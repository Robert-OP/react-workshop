import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import DHILogo from './assets/DHI_Logo.png';

const App = ({ useStyles }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleTabChange = tabNumber => () => {
    setTab(tabNumber);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar disableGutters={true}>
          <img className={classes.logo} src={DHILogo} alt="DHI Logo" />
          <Typography variant="h6">React Workshop</Typography>
          <div className={classes.grow} />
          <Button
            className={classes.buttons}
            variant="contained"
            onClick={handleTabChange(0)}
          >
            Tab1
          </Button>
          <Button
            className={classes.buttons}
            variant="contained"
            onClick={handleTabChange(1)}
          >
            Tab2
          </Button>
          <Button
            className={classes.buttons}
            variant="contained"
            onClick={handleTabChange(2)}
          >
            Tab3
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {tab === 0 && <h1>Tab 1</h1>}
        {tab === 1 && <h1>Tab 2</h1>}
        {tab === 2 && <h1>Tab 3</h1>}
      </main>
    </div>
  );
};

export default App;
