import { Layout } from 'antd';

import Header from 'components/Header';
import Footer from 'components/Footer';

// HOC
export default function BasicLayout(Comp) {
  return (props) => (
    <Layout>
      <Header></Header>
      <Layout.Content>
        <div className='wrap'>
          <Comp {...props}></Comp>
        </div>
      </Layout.Content>
      <Footer></Footer>
    </Layout>
  );
}
