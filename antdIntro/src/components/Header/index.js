import React from 'react';
import logoImg from './logo.png';
import burgerIcon from './burgerIcon.jpeg';
// import style from './style.module.css';
// import { NavLink } from 'react-router-dom';
import { MenuUnfoldOutlined, SmileTwoTone, HeartTwoTone } from '@ant-design/icons';
import { Layout, Menu, Button, Row, Col, Input, Space, Divider } from 'antd';

const { Search } = Input;
const { Header } = Layout;


function Component() {
  return (
    <Header className="header">
      <Row className="header-inner" gutter={22}>
        <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button className="burger">{React.createElement(MenuUnfoldOutlined)}</Button>
          <a href="#" className="logo" style={{ marginLeft: 11 }}>
            <img src={logoImg} alt="logo" width={'55px'} />
          </a>
          <Button style={{ marginLeft: 11 }}>Catalog</Button>
        </Col>

        <Col className="search-outer" span={12} style={{ display: 'flex', alignItems: 'center' }}>
          <Search placeholder="input search text" enterButton="Search" size="large" />
        </Col>

        <Col span={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="lang">
            <Button>
              <a href="#">ru</a>
            </Button>
            <Divider type="vertical" style={{ backgroundColor: 'white' }} />
            <Button>
              <a href="#">ua</a>
            </Button>
          </div>

          <Button>
            <a href="#">try premium</a>
          </Button>

          <div className="icons-list">
            <SmileTwoTone style={{ fontSize: '22px', margin: '11px'}} />
            <HeartTwoTone style={{ fontSize: '22px', margin: '11px'}} twoToneColor="#eb2f96" />
          </div>
        </Col>
      </Row>


    </Header>
  );
}

export default Component;
