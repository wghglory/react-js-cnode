import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import qs from 'qs';

import { useGetTopics } from 'store/action/topic';

import SubNav from './components/SubNav';
import HomePagination from './components/HomePagination';
import TopicList from 'components/TopicList';

function HomePage() {
  const { loading, data } = useSelector((state) => state.topics);
  const { search } = useLocation();
  const { page = '1', tab = 'all' } = qs.parse(search.slice(1));
  const getTopics = useGetTopics();

  useEffect(() => {
    getTopics(page, tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, tab]);

  return (
    <div className='spacing'>
      <SubNav></SubNav>
      <TopicList data={data} loading={loading}></TopicList>
      {loading ? '' : <HomePagination />}
    </div>
  );
}

export default HomePage;
