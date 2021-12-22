// import style from './style.module.css';
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';

import Header from '../components/Header';
import Main from '../components/Main';

const { Footer } = Layout;



function App() {
  return (
    <Layout>
      
      <Header />

      <Layout>
        <Main />
      </Layout>

    </Layout>
  );
}

export default App;
