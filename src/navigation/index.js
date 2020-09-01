import React from 'react';
import { Route } from 'react-router-dom';
import { SheduleNavigation } from './shedule/SheduleNavigation';

export default function App() {
  return (
    <>
      <div className="bd-masthead">
        <Route exact path="*" render={() => <SheduleNavigation key="SheduleNavigation" />} />
      </div>
    </>
  );
}
