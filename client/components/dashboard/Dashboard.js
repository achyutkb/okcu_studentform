import React from 'react';
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { AddShoppingCart, ThumbUp, Assessment, Face } from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const styles = {
logo: {
  }
};


const products = [
  { id: 1, title: 'Latest News', text: 'Esports team wins national collegiate tournament' },
  { id: 2, title: 'Festival Season', text: 'OCU sets festive mood for Christmas Vespers concerts' },
  { id: 3, title: 'Featured Events & 2023 Calendar', text: 'Here are the list of events for new 2023 Spring and your class schedules' },
  { id: 4, title: 'Your Grades', text: 'You can find your grades for all subjects' },
];

const Dashboard = () => {
  return (
    <div>
      <br /><br />

      <Grid container spacing={12} style={{ marginBottom: '15px' }}>
      <img src="img/okcu.png" className="logo" alt="" align="middle"/>

      </Grid>

      <Grid container spacing={24} style={{ marginBottom: '15px' }}>
        <Grid item xs>
          <Product data={products} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
