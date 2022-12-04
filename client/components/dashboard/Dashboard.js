import React from 'react';
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { AddShoppingCart, ThumbUp, Assessment, Face } from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';


const products = [
  { id: 1, title: 'Latest News', text: 'Esports team wins national collegiate tournament' },
  { id: 2, title: 'Festival Season', text: 'OCU sets festive mood for Christmas Vespers concerts' },
  { id: 3, title: 'Featured Events & 2023 Calendar', text: 'Here are the list of events for new 2023 Spring and your class schedules' },
  { id: 4, title: 'Your Grades', text: 'You can find your grades for all subjects' },
];

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ paddingBottom: '15px' }}>Dashboard</h2>

      <Grid container spacing={4} style={{ marginBottom: '15px' }}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={AddShoppingCart} color={pink[600]} title="Total Profit" value="1500k" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={ThumbUp} color={cyan[600]} title="Likes" value="4231" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Assessment} color={purple[600]} title="Sales" value="460" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Face} color={orange[600]} title="New Members" value="248" />
        </Grid>
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
