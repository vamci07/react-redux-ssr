import Home from './pages/Home';
import Users, { loadData } from './pages/Users';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: Users,
    loadData
  }
];
