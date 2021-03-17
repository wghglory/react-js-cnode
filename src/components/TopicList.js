import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import TopicTag from './TopicTag';

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
              <Link to={`/users/${loginname}`} style={{ marginRight: '10px' }}>
                <Avatar icon={<UserOutlined />} src={avatar_url} title={loginname} />
              </Link>
              <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
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
