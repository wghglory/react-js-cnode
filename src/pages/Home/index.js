import BasicLayout from 'layout/BasicLayout';

import SubNav from './components/SubNav';
import TopicList from './components/TopicList';

function HomePage() {
  return (
    <div style={{ marginTop: 10 }}>
      <SubNav></SubNav>
      <TopicList></TopicList>
    </div>
  );
}

export default BasicLayout(HomePage);
