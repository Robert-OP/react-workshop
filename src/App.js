import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MyCard from './components/MyCard';

const App = ({ useStyles }) => {
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const handleTabChange = tabNumber => () => {
    setTab(tabNumber);
  };

  return (
    <div className={classes.root}>
      <Navigation handleTabChange={handleTabChange} useStyles={useStyles} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {tab === 0 && <MyCard title="Tab 1" />}
        {tab === 1 && <MyCard title="Tab 2" />}
        {tab === 2 && <MyCard title="Tab 3" />}
      </main>
    </div>
  );
};

export default App;
