import { Spin } from 'antd';

import style from './loading.module.css';

function Loading() {
  return (
    <div className={style.loadingContainer}>
      <Spin size='large' />
    </div>
  );
}

export default Loading;
