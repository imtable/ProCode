// import { Routes, Route } from 'react-router-dom';
// import style from './style.module.css';
import { Layout, Menu, Carousel, Row, Col } from 'antd';
import itemImg from './item.png';

const { Content, Sider } = Layout;


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  arrows: true
};
// from https://react-slick.neostack.com/docs/example/custom-arrows
const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  )
}
const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  )
}
const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}


function Component() {
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="4">menu item</Menu.Item>
          <Menu.Item key="8">menu item</Menu.Item>
          <Menu.Item key="12">menu item</Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ padding: '0 24px 24px' }}>
        <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }}>

          <div className="slider">
            <Row justify="center">
              <Col span={16}>
                <Carousel arrows {...settings}>
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>

          <Layout className="products" gutter={[11, 11]} style={{ padding: '33px 11px' }}>
            <Row>
              <h2>Products</h2>
            </Row>
            <Row className="products-inner" gutter={[11, 11]} style={{ marginTop: '11px' }}>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
            </Row>
          </Layout>
          <Layout className="products" gutter={[11, 11]} style={{ padding: '33px 11px' }}>
            <Row>
              <h2>Antoher products</h2>
            </Row>
            <Row className="products-inner" gutter={[11, 11]} style={{ marginTop: '11px' }}>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
              <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="#" className="product">
                  <img src={itemImg} alt="logo" width={'88px'} />
                </a>
                <span>poroshok</span>
                <span>999$</span>
              </Col>
            </Row>
          </Layout>
        </Content>
      </Layout>
    </>
  );
}

export default Component;
