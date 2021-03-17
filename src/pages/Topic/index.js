import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Alert } from 'antd';

// import { useGetTopic } from '../../store/action/topic';  // since jsconfig.json is configured, we can use below absolute path
import { useGetTopic } from 'store/action/topic';

function TopicPage() {
  const { loading, data, errorMsg } = useSelector((state) => state.topic);
  const getTopic = useGetTopic();
  const { id } = useParams();
  const history = useHistory();

  console.log(loading, data);

  useEffect(() => {
    getTopic(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return errorMsg ? (
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
  ) : (
    <Card title={data.title} loading={loading}>
      <div
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></div>
    </Card>
  );
}

export default TopicPage;
