import { Link, useLocation } from 'react-router-dom';
import { Affix, Col, Layout, Menu, Row } from 'antd';

import { navs } from 'router';

import style from './header.module.css';

function Header(props) {
  const { pathname } = useLocation();

  const activeIndex = navs.findIndex((item) => {
    return pathname === item.to;
  });

  return (
    <Affix offsetTop={0}>
      <Layout.Header>
        <div className='wrap'>
          <Row>
            <Col xs={6} sm={4} md={2}>
              <h1 className={style.logo}>
                <Link to='/'>logo</Link>
              </h1>
            </Col>
            <Col xs={18} sm={20} md={22}>
              <Menu theme='dark' mode='horizontal' selectedKeys={[activeIndex + '']}>
                {navs.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      <Link to={item.to}>{item.title}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  );
}
export default Header;
