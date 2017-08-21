import Layout from 'components/Layout';
import FirstPage from 'components/MainPage';
import CountryLayout from 'components/CountryLayout';

const routes = [
  {
    component: Layout,
    path: '/'
  },
  {
    component: FirstPage,
    path: '/firstpage',
    childRoutes: [
      {
        component: CountryLayout,
        path: '/countries'
      }
    ]
  },
  {
    component: CountryLayout,
    path: '/countries'
  }
];

export default routes;
