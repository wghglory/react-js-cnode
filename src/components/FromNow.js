import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
require('dayjs/locale/zh-cn');
dayjs.locale('zh-cn');

export default function FromNow(props) {
  return <>{dayjs(props.date).fromNow()}</>;
}
