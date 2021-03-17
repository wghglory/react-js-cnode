import { useHistory, useLocation } from 'react-router-dom';
import { Pagination } from 'antd';
import qs from 'qs';

import style from './homePagination.module.css';

export default function HomePagination() {
  const { search } = useLocation();
  const { push } = useHistory();
  const { tab = 'all', page = 1 } = qs.parse(search.substr(1));

  return (
    <div className={style.homePagination}>
      <Pagination
        current={page - 0}
        defaultPageSize={20}
        total={1000}
        showSizeChanger={false}
        showQuickJumper={true}
        onChange={(page) => {
          push(`/?tab=${tab}&page=${page}`);
        }}
        // itemRender={(page, type) => {
        //   switch (type) {
        //     case 'page':
        //       return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>;
        //     case 'prev':
        //       return <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>;
        //     case 'next':
        //       return <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>;
        //     default:
        //       return <Link to={`/?tab=${tab}&page=${page}`}>{'…'}</Link>;
        //   }
        // }}
      />
    </div>
  );
}
