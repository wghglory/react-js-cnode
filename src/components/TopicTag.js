import { Tag } from 'antd';

function setTag(tab) {
  switch (tab) {
    case 'top':
      return <Tag color='#87d068'>置顶</Tag>;
    case 'good':
      return <Tag color='#f50'>精华</Tag>;
    case 'share':
      return <Tag color='green'>分享</Tag>;
    case 'ask':
      return <Tag color='gold'>问答</Tag>;
    case 'job':
      return <Tag color='blue'>招聘</Tag>;
    case 'dev':
      return <Tag color='purple'>测试</Tag>;
    default:
      return null;
  }
}

export default function TopicTag({ tab }) {
  return setTag(tab);
}
