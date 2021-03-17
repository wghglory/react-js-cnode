import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Alert } from 'antd';

// import { useGetTopic } from '../../store/action';  // since jsconfig.json is configured, we can use below absolute path
import { useGetTopic } from 'store/action';

import Detail from './components/Detail';
import Replies from './components/Replies';

function TopicPage() {
  const { loading, data, errorMsg } = useSelector((state) => state.topic);
  const getTopic = useGetTopic();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getTopic(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return errorMsg ? (
    <div className='spacing'>
      <Alert
        showIcon
        closable
        message={'请求出错'}
        type='error'
        description={
          <>
            <p>{errorMsg}</p>
            <p>点击关闭按钮返回上一步</p>
          </>
        }
        afterClose={() => {
          history.goBack();
        }}
      />
    </div>
  ) : (
    <div className='spacing'>
      <Detail loading={loading} data={data}></Detail>
      <Replies loading={loading} data={data.replies} />
    </div>
  );
}

export default TopicPage;
