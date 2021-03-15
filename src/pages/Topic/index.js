import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

// import { useGetTopic } from '../../store/action/topic';  // since jsconfig.json is configured, we can use below absolute path
import { useGetTopic } from 'store/action/topic';

function TopicPage() {
  const { loading, data } = useSelector((state) => state.topic);
  const getTopic = useGetTopic();
  const { id } = useParams();
  console.log(loading, data);

  useEffect(() => {
    getTopic(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
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
