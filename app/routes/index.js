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
    path: '/firstpage'
  },
  {
    component: CountryLayout,
    path: '/countries'
  }
];

export default routes;
