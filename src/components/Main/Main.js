import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import ReportPage from '../ReportPage/ReportPage';
import ReportPageFilters from '../ReportPageFilters/ReportPageFilters';

const Main = () => (
  <main className="hr-main-content">
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/report-page' component={ReportPage}/>
      <Route path='/report-page-filters' component={ReportPageFilters}/>
    </Switch>
  </main>
)

export default Main;