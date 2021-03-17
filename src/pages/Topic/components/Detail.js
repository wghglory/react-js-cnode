import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import FromNow from 'components/FromNow';
import TopicTag from 'components/TopicTag';

export default function Detail(props) {
  let { data, loading } = props;
  let { author = {}, content, create_at, good, top, tab, title, visit_count } = data;
  return (
    <Card
      bordered
      loading={loading}
      title={
        <Fragment>
          <h1>
            <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
            {title}
          </h1>
          <p>
            作者：<Link to={`/users/${author.loginname}`}>{author.loginname}</Link>　 创建时间：
            <FromNow date={create_at} />
            　浏览人数：{visit_count}
          </p>
        </Fragment>
      }
      type='inner'
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </Card>
  );
}
