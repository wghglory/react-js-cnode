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
    path: '/',
    exact: true,
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
    title: '首页',
    to: '/',
  },
  {
    title: '新手入门',
    to: '/getstart',
  },
  {
    title: 'API',
    to: '/api',
  },
  {
    title: '关于',
    to: '/about',
  },
];

const homeSubNavs = [
  {
    title: '全部',
    to: '/?tab=all',
  },
  {
    title: '精华',
    to: '/?tab=good',
  },
  {
    title: '分享',
    to: '/?tab=share',
  },
  {
    title: '问答',
    to: '/?tab=ask',
  },
  {
    title: '招聘',
    to: '/?tab=job',
  },
  {
    title: '客户端测试',
    to: '/?tab=dev',
  },
];

export { routes, navs, homeSubNavs, tabValues };
