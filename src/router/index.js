import { lazy, Suspense } from 'react';
import qs from 'qs';

import Loading from '../components/Loading';

import HomePage from '../pages/Home';

const NotFoundPage = lazy(() => import('../pages/NotFound'));
const LoginPage = lazy(() => import('../pages/Login'));
const AboutPage = lazy(() => import('../pages/About'));
const APIPage = lazy(() => import('../pages/API'));
const TopicPage = lazy(() => import('../pages/Topic'));
const UserPage = lazy(() => import('../pages/User'));
const GetStartPage = lazy(() => import('../pages/GetStart'));

const tabValues = ['all', 'good', 'share', 'ask', 'job', 'dev'];

const routes = [
  {
    path: ['/', '/topics'],
    exact: true,
    layout: true,
    render(props) {
      const { location } = props;
      const { search } = location;
      const { tab, page } = qs.parse(search.substr(1));

      if ((tab === undefined && page === undefined) || (tabValues.includes(tab) && (page === undefined || page > 0))) {
        return <HomePage {...props} />;
      }
      return (
        <Suspense fallback={<Loading />}>
          <NotFoundPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/login',
    exact: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <LoginPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/topics/:id',
    exact: true,
    layout: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <TopicPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/users/:username',
    exact: true,
    layout: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <UserPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/getStart',
    exact: true,
    layout: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <GetStartPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/api',
    exact: true,
    layout: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <APIPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '/about',
    exact: true,
    layout: true,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <AboutPage {...props} />
        </Suspense>
      );
    },
  },
  {
    path: '',
    layout: true,
    exact: false,
    render(props) {
      return (
        <Suspense fallback={<Loading />}>
          <NotFoundPage {...props} />
        </Suspense>
      );
    },
  },
];

const navs = [
  {
    title: '??????',
    to: '/',
    alias: '/topics',
  },
  {
    title: '????????????',
    to: '/getstart',
  },
  {
    title: 'API',
    to: '/api',
  },
  {
    title: '??????',
    to: '/about',
  },
];

const homeSubNavs = [
  {
    title: '??????',
    to: '/?tab=all',
  },
  {
    title: '??????',
    to: '/?tab=good',
  },
  {
    title: '??????',
    to: '/?tab=share',
  },
  {
    title: '??????',
    to: '/?tab=ask',
  },
  {
    title: '??????',
    to: '/?tab=job',
  },
  {
    title: '???????????????',
    to: '/?tab=dev',
  },
];

export { routes, navs, homeSubNavs, tabValues };
