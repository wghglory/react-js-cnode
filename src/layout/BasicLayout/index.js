import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';

// HOC
export default function BasicLayout({ comp }) {
  return (
    <Layout className='layoutContainer'>
      <Header></Header>
      <Layout.Content>
        <div className='wrap'>{comp}</div>
      </Layout.Content>
      <Footer></Footer>
    </Layout>
  );
}
