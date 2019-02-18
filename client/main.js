import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import './main.html';

// add render routes function
import { renderRoutes } from '../imports/startup/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.querySelector("#target"));
});
