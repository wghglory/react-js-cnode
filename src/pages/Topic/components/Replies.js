import { Link } from 'react-router-dom';
import { Card, List, Comment, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FromNow from 'components/FromNow';

export default function Replies(props) {
  const { data = [], loading } = props;
  data.reverse();

  return (
    <Card title='评论列表' loading={loading} type='inner'>
      <List
        dataSource={data}
        renderItem={(item) => {
          const { author, content, create_at } = item;
          return (
            <List.Item>
              <Comment
                author={<Link to={`/users/${author.loginname}`}>{author.loginname}</Link>}
                avatar={<Avatar icon={<UserOutlined />} src={author.avatar_url} title={author.loginname} />}
                content={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  ></div>
                }
                datetime={<time>发表于： {<FromNow date={create_at} />}</time>}
              />
            </List.Item>
          );
        }}
        pagination={{
          simple: true,
        }}
      />
    </Card>
  );
}
