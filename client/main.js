import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import './main.html';
import '../imports/startup/load-fonts.js'
// add render routes function
import { renderRoutes } from '../imports/startup/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.querySelector("#target"));
});
