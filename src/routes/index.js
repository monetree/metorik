import React from 'react';

const Home = React.lazy(() => import('../views/Home.view'));
const Auth = React.lazy(() => import('../views/Auth.view'));

var indexRoutes = [
  { path: "/dashboard", name: "Home", component: Home },
  { path: "/", name: "Auth", component: Auth },
];

export default indexRoutes;
