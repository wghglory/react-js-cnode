import { List, Col } from 'antd';

import { Link } from 'react-router-dom';

export default function TopicList(props) {
  let { loading, data } = props;
  return (
    <List
      className='topicList'
      loading={loading}
      dataSource={data}
      renderItem={(item) => {
        const { author, last_reply_at, good, top, tab, title, id } = item;
        const { loginname, avatar_url } = author;

        return (
          <List.Item>
            <Col xs={24} md={20}>
              <Link to={`/topics/${id}`} style={{ marginLeft: 10 }}>
                {title}
              </Link>
            </Col>
            <Col xs={0} md={4}></Col>
          </List.Item>
        );
      }}
    />
  );
}
