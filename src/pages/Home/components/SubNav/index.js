import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import qs from 'qs';

import style from './subNav.module.css';

import { homeSubNavs, tabValues } from '../../../../router';

function SubNav() {
  const { search } = useLocation();
  const { tab } = qs.parse(search.substr(1));
  const activeIndex = tab === undefined ? 0 : tabValues.indexOf(tab);

  return (
    <Menu mode={'horizontal'} selectedKeys={[activeIndex + '']} className={style.subNav}>
      {homeSubNavs.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={item.to}>{item.title}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default SubNav;
