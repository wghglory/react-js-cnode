import { lazy, Suspense } from 'react';

import Loading from '../components/Loading';

import HomePage from '../pages/Home';

const NotFoundPage = lazy(() => import('../pages/404'));
const AboutPage = lazy(() => import('../pages/About'));
const TopicPage = lazy(() => import('../pages/Topic'));

const routes = [
  {
    path: '/',
    exact: true,
    render(props) {
      return <HomePage {...props} />;
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

export { routes, navs, homeSubNavs };
